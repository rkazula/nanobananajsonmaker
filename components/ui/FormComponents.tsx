import React, { InputHTMLAttributes, TextareaHTMLAttributes, useState, useRef, useEffect } from 'react';
import { UseFormRegisterReturn, FieldError, UseFormSetValue } from 'react-hook-form';
import { Info, ChevronDown, Check, X, Trash2 } from 'lucide-react';
import { COLOR_HEX_MAP } from '../../constants';

interface WrapperProps {
  label: string;
  error?: FieldError;
  children: React.ReactNode;
  description?: string;
  required?: boolean;
}

const FieldWrapper: React.FC<WrapperProps> = ({ label, error, children, description, required }) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-1">
        <label className="block text-sm font-semibold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
        </label>
        {description && (
            <div className="group relative">
                <Info className="w-4 h-4 text-slate-400 cursor-help" />
                <div className="absolute right-0 top-6 w-64 p-2 bg-slate-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                    {description}
                </div>
            </div>
        )}
    </div>
    {children}
    {error && <span className="text-xs text-red-500 mt-1">{error.message}</span>}
  </div>
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  description?: string;
}

export const TextInput: React.FC<InputProps> = ({ label, registration, error, description, className, ...props }) => (
  <FieldWrapper label={label} error={error} description={description} required={props.required}>
    <input
      {...registration}
      {...props}
      className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-banana-500 transition-colors ${
        error ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
      } ${className}`}
    />
  </FieldWrapper>
);

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    registration: UseFormRegisterReturn;
    error?: FieldError;
    description?: string;
    min?: number;
    max?: number;
    step?: number;
    currentValue?: number; // Needed to show value next to slider
}

export const Slider: React.FC<SliderProps> = ({ label, registration, error, description, min = 0, max = 10, step = 1, currentValue, ...props }) => (
    <FieldWrapper label={label} error={error} description={description}>
        <div className="flex items-center gap-4">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                {...registration}
                {...props}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-banana-500"
            />
            <span className="text-sm font-bold text-banana-600 min-w-[24px] text-center">
                {currentValue ?? 0}
            </span>
        </div>
    </FieldWrapper>
);

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    registration: UseFormRegisterReturn;
    error?: FieldError;
    description?: string;
    setValue?: UseFormSetValue<any>;
}
  
export const TextArea: React.FC<TextAreaProps> = ({ label, registration, error, description, setValue, rows = 3, ...props }) => (
    <FieldWrapper label={label} error={error} description={description}>
      <div className="relative group/textarea">
        <textarea
            {...registration}
            {...props}
            rows={rows}
            className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-banana-500 transition-colors pr-8 ${
            error ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
            }`}
        />
        {setValue && (
            <button
                type="button"
                onClick={() => setValue(registration.name, "", { shouldDirty: true })}
                className="absolute top-2 right-2 p-1.5 text-slate-300 hover:text-red-500 bg-transparent hover:bg-red-50 rounded-md transition-all z-10"
                title="Clear text"
            >
                <Trash2 size={14} />
            </button>
        )}
      </div>
    </FieldWrapper>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: readonly string[];
    registration?: UseFormRegisterReturn;
    error?: FieldError;
    description?: string;
}

export const Select: React.FC<SelectProps> = ({ label, options, registration, error, description, ...props }) => (
    <FieldWrapper label={label} error={error} description={description}>
      <select
        {...registration}
        {...props}
        className={`w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-banana-500 disabled:bg-slate-100 disabled:text-slate-400 ${props.className || ""}`}
      >
        {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </FieldWrapper>
);

interface MultiSelectProps {
    label: string;
    options: readonly string[];
    value: string[];
    onChange: (val: string[]) => void;
    maxSelections?: number;
    error?: FieldError;
    description?: string;
    placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({ 
    label, options, value = [], onChange, maxSelections = 3, error, description, placeholder = "Select options..." 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleOption = (option: string) => {
        if (value.includes(option)) {
            onChange(value.filter(item => item !== option));
        } else {
            if (value.length < maxSelections) {
                onChange([...value, option]);
            }
        }
    };

    return (
        <FieldWrapper label={label} error={error} description={description}>
            <div className="relative" ref={containerRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full px-3 py-2 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-banana-500 flex items-center justify-between min-h-[38px] text-left ${
                        error ? 'border-red-500' : 'border-slate-300'
                    }`}
                >
                    <div className="flex flex-wrap gap-1 pr-6">
                        {value.length > 0 ? (
                            value.map(v => (
                                <span key={v} className="bg-banana-100 text-banana-800 text-xs px-2 py-0.5 rounded-full flex items-center gap-1 font-medium">
                                    {v}
                                    <span
                                        className="cursor-pointer hover:text-red-600"
                                        onClick={(e) => { e.stopPropagation(); toggleOption(v); }}
                                    >
                                        <X size={10} />
                                    </span>
                                </span>
                            ))
                        ) : (
                            <span className="text-slate-500">{placeholder}</span>
                        )}
                    </div>
                    <ChevronDown size={14} className="text-slate-400 flex-shrink-0 absolute right-3 top-3" />
                </button>
                
                {value.length >= maxSelections && !isOpen && (
                   <span className="text-[10px] text-banana-600 font-bold mt-1 block">Max {maxSelections} selected</span>
                )}

                {isOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-y-auto custom-scrollbar">
                         <div className="px-3 py-2 text-xs font-bold text-slate-500 bg-slate-50 sticky top-0 z-10 border-b border-slate-100 flex justify-between">
                            <span>Available Options</span>
                            <span>{value.length} / {maxSelections}</span>
                         </div>
                        {options.map(opt => {
                             const isSelected = value.includes(opt);
                             const isDisabled = !isSelected && value.length >= maxSelections;
                             
                             return (
                                <div 
                                    key={opt}
                                    className={`px-3 py-2 flex items-center justify-between text-sm transition-colors border-b border-slate-50 last:border-0 ${
                                        isSelected ? 'bg-banana-50 text-banana-900 font-medium' : 
                                        isDisabled ? 'opacity-50 cursor-not-allowed bg-slate-50' : 'hover:bg-slate-100 cursor-pointer'
                                    }`}
                                    onClick={() => !isDisabled && toggleOption(opt)}
                                >
                                    <span className="truncate pr-2">{opt}</span>
                                    {isSelected && <Check size={14} className="text-banana-600 flex-shrink-0" />}
                                </div>
                             )
                        })}
                    </div>
                )}
            </div>
        </FieldWrapper>
    );
};

interface ColorSelectProps {
    label: string;
    options: readonly string[];
    value: string; 
    onChange: (val: string) => void; 
    error?: FieldError;
    description?: string;
    colorMap?: Record<string, string>; // Optional custom color map
}

export const ColorSelect: React.FC<ColorSelectProps> = ({ label, options, value, onChange, error, description, colorMap }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    
    // Use provided map or fallback to global default
    const mapToUse = colorMap || COLOR_HEX_MAP;

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedHex = mapToUse[value] || 'transparent';

    return (
        <FieldWrapper label={label} error={error} description={description}>
            <div className="relative" ref={containerRef}>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-banana-500 flex items-center justify-between min-h-[38px]"
                >
                    <div className="flex items-center gap-2 overflow-hidden">
                        {value ? (
                            <>
                                <span className="w-4 h-4 rounded-full border border-slate-200 flex-shrink-0" style={{ backgroundColor: selectedHex }}></span>
                                <span className="truncate">{value}</span>
                            </>
                        ) : (
                            <span className="text-slate-500">Select Color...</span>
                        )}
                    </div>
                    <ChevronDown size={14} className="text-slate-400" />
                </button>

                {isOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-y-auto custom-scrollbar">
                        <div 
                            className="px-3 py-2 hover:bg-slate-50 cursor-pointer text-slate-500 text-sm italic"
                            onClick={() => { onChange(""); setIsOpen(false); }}
                        >
                            None
                        </div>
                        {options.map(opt => {
                             const hex = mapToUse[opt] || '#eee';
                             return (
                                <div 
                                    key={opt}
                                    className={`px-3 py-2 hover:bg-banana-50 cursor-pointer flex items-center gap-2 text-sm ${value === opt ? 'bg-banana-50 font-medium' : ''}`}
                                    onClick={() => { onChange(opt); setIsOpen(false); }}
                                >
                                    <span className="w-4 h-4 rounded-full border border-slate-200 flex-shrink-0" style={{ backgroundColor: hex }}></span>
                                    <span className="text-slate-700">{opt}</span>
                                </div>
                             )
                        })}
                    </div>
                )}
            </div>
        </FieldWrapper>
    );
}

interface ComboboxProps {
    label: string;
    options: string[];
    value: string;
    onChange: (val: string) => void;
    error?: FieldError;
    description?: string;
    placeholder?: string;
}

export const Combobox: React.FC<ComboboxProps> = ({ 
    label, options, value, onChange, error, description, placeholder = "Select or type..." 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filter options based on current input value
    const filteredOptions = options.filter(opt => 
        opt.toLowerCase().includes((value || "").toLowerCase())
    );

    return (
        <FieldWrapper label={label} error={error} description={description}>
            <div className="relative" ref={containerRef}>
                <div className="relative">
                    <input
                        type="text"
                        className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-banana-500 transition-colors ${
                            error ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-white'
                        }`}
                        value={value || ""}
                        onChange={(e) => {
                            onChange(e.target.value);
                            if (!isOpen) setIsOpen(true);
                        }}
                        onFocus={() => setIsOpen(true)}
                        placeholder={placeholder}
                        autoComplete="off" // CRITICAL FIX: Disables browser history overlay
                    />
                    <div 
                        className="absolute right-0 top-0 h-full flex items-center px-2 text-slate-400 cursor-pointer hover:text-banana-500"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <ChevronDown size={16} />
                    </div>
                </div>

                {isOpen && filteredOptions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-100">
                        {filteredOptions.map((opt) => (
                            <div
                                key={opt}
                                className="px-3 py-2 hover:bg-banana-50 cursor-pointer text-sm text-slate-700 border-b border-slate-50 last:border-0"
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                            >
                                {opt}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </FieldWrapper>
    );
};

interface ToggleProps {
    label: string;
    registration: UseFormRegisterReturn;
    description?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ label, registration, description }) => (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
        <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">{label}</span>
            {description && <span className="text-xs text-slate-500">{description}</span>}
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" {...registration} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-banana-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-banana-500"></div>
        </label>
    </div>
);