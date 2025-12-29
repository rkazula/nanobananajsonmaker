
import { useState } from 'react';
import { useForm, useWatch, Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NanoBananaSchema, NanoBananaType, DEFAULT_VALUES } from './schema';
import { SectionRenderer } from './components/sections/SectionRenderer';
import { autoFixJson } from './utils/autoFix';
import { 
  Clipboard, Download, Upload, CheckCircle,
  ChevronRight, ChevronLeft, Save, FileJson, Wand2, Code, RotateCcw
} from 'lucide-react';

// Sections definition for the Wizard
const SECTIONS = [
  { id: 'ideal_parameters', label: '0. Ideal Parameters (Demo)' },
  { id: 'intent', label: '1. User Intent' },
  { id: 'api', label: '2. Configuration' },
  { id: 'meta', label: '3. Meta & Film' },
  { id: 'scene', label: '4. Scene' },
  { id: 'lighting', label: '5. Lighting' },
  { id: 'camera', label: '6. Camera' },
  { id: 'subject', label: '7. Subject' },
  { id: 'wardrobe', label: '8. Wardrobe' },
  { id: 'advanced', label: '9. Advanced' },
];

function App() {
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [importLog, setImportLog] = useState<string[]>([]);
  const [importError, setImportError] = useState(false);
  const [showJsonPreview, setShowJsonPreview] = useState(false);

  // --- Form Setup ---
  const form = useForm<NanoBananaType>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(NanoBananaSchema) as unknown as Resolver<NanoBananaType>,
    mode: "onChange"
  });

  const { reset, control } = form;
  
  // Watch all values for Live Preview
  const allValues = useWatch({ control });

  // --- Handlers ---
  const handleReset = () => {
    if (confirm("Are you sure you want to reset all fields to default values?")) {
      reset(DEFAULT_VALUES);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(allValues, null, 2));
    alert("JSON copied to clipboard!");
  };

  const downloadJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allValues, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${allValues.meta?.project_name || "nano_banana"}_config.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleImport = () => {
    const result = autoFixJson(importText);
    if (result.fixed && result.data) {
        setImportLog(result.logs);
        setImportError(false);
        // Delay close to show logs
        setTimeout(() => {
            reset(result.data); // Update form state
            setImportModalOpen(false);
            setImportText("");
            setImportLog([]);
            alert("Import Successful with auto-fixes!");
        }, 1000);
    } else {
        setImportError(true);
        setImportLog(result.logs);
    }
  };

  const nextSection = () => {
    if (activeSectionIdx < SECTIONS.length - 1) setActiveSectionIdx(p => p + 1);
  };

  const prevSection = () => {
    if (activeSectionIdx > 0) setActiveSectionIdx(p => p - 1);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans text-slate-900">
      
      {/* --- Sidebar Navigation --- */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col border-r border-slate-800 shadow-xl z-20">
        <div className="p-6 border-b border-slate-800 bg-slate-950">
            <h1 className="text-xl font-black text-banana-500 flex items-center gap-2 tracking-tight">
                <FileJson className="w-6 h-6 text-banana-400" />
                NanoBanana
            </h1>
            <p className="text-xs text-slate-500 mt-1 font-medium tracking-wide">JSON Builder v2.0</p>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1">
                {SECTIONS.map((sec, idx) => (
                    <li key={sec.id}>
                        <button
                            onClick={() => setActiveSectionIdx(idx)}
                            className={`w-full text-left px-6 py-3.5 text-sm font-semibold transition-all flex items-center justify-between group ${
                                idx === activeSectionIdx 
                                ? 'bg-banana-500 text-white shadow-md' 
                                : 'hover:bg-slate-800 hover:text-white text-slate-400'
                            }`}
                        >
                            {sec.label}
                            {idx < activeSectionIdx && <CheckCircle className={`w-4 h-4 ${idx === activeSectionIdx ? 'text-white' : 'text-banana-500'}`} />}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="p-4 border-t border-slate-800 space-y-2 bg-slate-950">
             <button 
                onClick={() => setImportModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 px-4 rounded-lg text-sm transition-colors font-medium border border-slate-700"
             >
                <Upload size={16} /> Import JSON
             </button>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 flex flex-col bg-slate-100 relative overflow-hidden">
         
         {/* Top Bar */}
         <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm flex-shrink-0 z-10">
            <h2 className="font-bold text-xl text-slate-800 tracking-tight">
                {SECTIONS[activeSectionIdx].label}
            </h2>
            <div className="flex items-center gap-3">
                 <button 
                    onClick={() => setShowJsonPreview(!showJsonPreview)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all border ${showJsonPreview ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700'}`}
                    title="Toggle Live JSON Preview"
                 >
                    <Code size={18} />
                    <span className="hidden sm:inline">JSON Preview</span>
                 </button>
                 <div className="h-6 w-px bg-slate-200 mx-1"></div>
                 <button onClick={handleReset} className="p-2.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Reset to Defaults">
                    <RotateCcw size={20} />
                 </button>
                 <button onClick={copyToClipboard} className="p-2.5 text-slate-500 hover:text-banana-600 hover:bg-banana-50 rounded-lg transition-colors" title="Copy JSON">
                    <Clipboard size={20} />
                 </button>
                 <button onClick={downloadJson} className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md active:transform active:scale-95">
                    <Download size={16} /> Export
                 </button>
            </div>
         </header>

         {/* Split View */}
         <div className="flex-1 flex overflow-hidden">
            
            {/* Form Area */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-smooth">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-200 min-h-[600px]">
                    <SectionRenderer section={SECTIONS[activeSectionIdx].id} form={form} />
                </div>
                
                {/* Stepper Controls */}
                <div className="max-w-4xl mx-auto mt-8 flex justify-between pb-10">
                    <button 
                        onClick={prevSection}
                        disabled={activeSectionIdx === 0}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 hover:text-slate-900 font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                    >
                        <ChevronLeft size={20} /> Back
                    </button>

                    {activeSectionIdx < SECTIONS.length - 1 ? (
                        <button 
                            onClick={nextSection}
                            className="flex items-center gap-2 px-8 py-3 rounded-lg text-white bg-banana-600 hover:bg-banana-500 font-bold shadow-lg shadow-banana-200 transition-all hover:translate-x-1"
                        >
                            Next Step <ChevronRight size={20} />
                        </button>
                    ) : (
                         <button 
                            onClick={copyToClipboard}
                            className="flex items-center gap-2 px-8 py-3 rounded-lg text-white bg-green-600 hover:bg-green-500 font-bold shadow-lg shadow-green-200 transition-all hover:-translate-y-1"
                        >
                            <Save size={20} /> Copy & Finish
                        </button>
                    )}
                </div>
            </div>

            {/* Live Preview Panel (Right - Collapsible) */}
            <div className={`flex flex-col bg-slate-900 text-slate-400 border-l border-slate-800 shadow-2xl z-20 transition-all duration-300 ease-in-out ${showJsonPreview ? 'w-[480px] opacity-100' : 'w-0 opacity-0 border-l-0 overflow-hidden'}`}>
                <div className="p-5 border-b border-slate-800 bg-slate-950 flex justify-between items-center min-w-[480px]">
                    <span className="text-xs font-black uppercase tracking-widest text-banana-500">Live JSON Preview</span>
                    <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-slate-300">{Object.keys(allValues).length} keys</span>
                </div>
                <div className="flex-1 overflow-auto p-6 font-mono text-xs custom-scrollbar bg-slate-900 min-w-[480px]">
                    <pre className="whitespace-pre-wrap break-all text-banana-100 leading-relaxed">
                        {JSON.stringify(allValues, null, 2)}
                    </pre>
                </div>
            </div>
         </div>
      </main>

      {/* --- Import Modal --- */}
      {importModalOpen && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[85vh] border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b flex justify-between items-center bg-slate-50">
                    <h3 className="text-xl font-bold text-slate-800">Import Existing JSON</h3>
                    <button onClick={() => setImportModalOpen(false)} className="text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full p-1 transition-colors">
                        <span className="sr-only">Close</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                
                <div className="p-6 flex-1 overflow-hidden flex flex-col gap-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Paste your configuration JSON below. The system utilizes a heuristic engine to <strong>auto-repair</strong> missing fields, correct data types, and map enumerations to the schema.
                    </p>
                    <textarea 
                        value={importText}
                        onChange={(e) => setImportText(e.target.value)}
                        className="flex-1 w-full border border-slate-300 rounded-lg p-4 font-mono text-xs text-slate-700 focus:ring-2 focus:ring-banana-500 outline-none resize-none bg-slate-50 shadow-inner"
                        placeholder='{ "user_intent": "..." }'
                    ></textarea>
                    
                    {importLog.length > 0 && (
                        <div className={`text-xs p-4 rounded-lg border max-h-40 overflow-y-auto ${importError ? 'bg-red-50 border-red-100 text-red-800' : 'bg-green-50 border-green-100 text-green-800'}`}>
                            <p className="font-bold mb-2 uppercase tracking-wide text-[10px]">{importError ? "Validation Errors:" : "Auto-Fix Report:"}</p>
                            <ul className="list-disc pl-4 space-y-1.5">
                                {importLog.map((log, i) => <li key={i}>{log}</li>)}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="p-6 border-t bg-slate-50 flex justify-end gap-3">
                    <button onClick={() => setImportModalOpen(false)} className="px-5 py-2.5 text-slate-600 font-bold hover:bg-slate-200 rounded-lg transition-colors text-sm">Cancel</button>
                    <button onClick={handleImport} className="px-6 py-2.5 bg-banana-600 hover:bg-banana-500 text-white font-bold rounded-lg shadow-md transition-colors text-sm flex items-center gap-2">
                        <Wand2 size={16} /> Analyze & Import
                    </button>
                </div>
            </div>
        </div>
      )}

    </div>
  );
}

export default App;
