
export const POSE_BODY = ["Standing", "Sitting", "Lying down", "Walking", "Running", "Jumping", "Dancing", "Kneeling", "Crouching"].sort();
export const POSE_SHOULDERS = ["Relaxed", "Tense", "Hunched", "Square", "Angled"].sort();
export const POSE_HANDS = ["By sides", "In pockets", "Crossed", "On hips", "Holding object", "Gesturing", "Clenched"].sort();
export const POSE_HEAD = ["Straight", "Tilted left", "Tilted right", "Looking up", "Looking down"].sort();
export const POSE_GAZE = ["At camera", "Away", "Down", "Up", "Closed eyes"].sort();
export const POSE_EXPRESSIONS = ["Neutral", "Happy", "Sad", "Angry", "Surprised", "Serious", "Smiling", "Laughing"].sort();
export const POSE_INTERACTIONS = ["None", "Touching face", "Adjusting clothes", "Leaning on prop", "Interacting with other"].sort();

export const POSE_TEMPLATES = [
  // Neutral / portrait foundations
  "Casual Standing",
  "Neutral Stance",
  "Three-Quarter Turn",
  "Full Profile",
  "Over-the-Shoulder Look",
  "Chin Down Eyes Up",
  "Chin Slightly Up (Confident)",
  "Soft Smile",
  "Big Laugh (Candid)",
  "Serious Editorial Expression",
  "Eyes Closed (Calm)",
  "Looking Away (Thoughtful)",
  "Direct Eye Contact (Strong)",
  "Hands Relaxed at Sides",

  // Hands / upper body
  "Hands in Pockets",
  "Thumbs Hooked on Belt",
  "Arms Crossed (Confident)",
  "One Arm Crossed, One Hand Touching Chin",
  "Hand on Hip",
  "Hands on Waist",
  "Hands Behind Back",
  "One Hand in Hair",
  "Both Hands in Hair (Messy Editorial)",
  "Hands Framing Face",
  "Hand Touching Neck (Soft)",
  "Hand Touching Collar",
  "Adjusting Jacket Lapel",
  "Fixing Tie",
  "Holding Glasses",
  "Putting on Sunglasses",
  "Looking Through Sunglasses",

  // Leaning / environmental
  "Leaning Against Wall",
  "Shoulder Against Wall",
  "Back Against Wall",
  "Leaning on Railing",
  "Leaning on Table",
  "Leaning on Bar Counter",
  "Sitting on Stairs",
  "Sitting on Edge of Bed (Neutral Lifestyle)",
  "Sitting on Chair (Upright)",
  "Sitting on Chair (Relaxed)",
  "Sitting Sideways on Chair",
  "Sitting Cross-Legged",
  "Sitting with One Knee Up",
  "Crouching Pose (Street)",
  "Kneeling Pose (Fashion Editorial)",

  // Movement / action
  "Walking Toward Camera",
  "Walking Away (Over Shoulder)",
  "Mid-Step Freeze (Street)",
  "Running (Action)",
  "Jumping (Action)",
  "Spin / Twirl (Dress Movement)",
  "Coat Flip (Editorial)",
  "Hair Flip (Dynamic)",
  "Turning Head Mid-Walk (Candid)",
  "Hands Swinging Naturally (Walk Cycle)",
  "Dancing (Energy)",
  "Athletic Stance (Ready)",
  "Boxing Guard (Sport)",
  "Stretch Pose (Fitness)",
  "Yoga Pose (Calm)",

  // Fashion posing language
  "Contrapposto (Weight Shift)",
  "S-Curve Pose",
  "Hip Pop (Fashion)",
  "Shoulders Angled (Slimming)",
  "Long Neck Pose",
  "Elongated Arms (Editorial)",
  "Hand Extended Toward Camera (Careful)",
  "Foot Forward (Leg Length)",
  "Crossed Ankles (Elegant)",
  "One Leg Bent (Casual)",
  "Power Stance (Hero)",
  "Editorial Lean (High Fashion)",
  "Looking Past Camera (Cover Look)",

  // Lifestyle / story beats
  "Looking at Phone (Candid)",
  "Texting While Walking",
  "Reading a Book",
  "Drinking Coffee",
  "Holding a Cup Near Face",
  "Cooking Prep (Kitchen Lifestyle)",
  "Sitting at Desk Working",
  "Typing on Laptop",
  "Window Gaze (Moody)",
  "Hands on Window Glass (Soft)",
  "Putting on Coat (Transition)",
  "Tying Shoelaces (Street)",
  "Holding Bag Strap",
  "Adjusting Hair in Mirror (Reflection)",

  // Product / prop interactions
  "Holding Product at Chest Level",
  "Holding Product Near Face",
  "Product in Hand (Natural Grip)",
  "Showing Ring / Hand Detail",
  "Showing Watch (Wrist Angle)",
  "Perfume Spray Moment (Candid)",
  "Carrying Shopping Bags (Lifestyle)",
  "Holding Umbrella (Rain Scene)",

  // Portrait categories
  "Professional Portrait",
  "Corporate Headshot Pose",
  "Actor Headshot (Neutral)",
  "Beauty Pose (Clean Front)",
  "Beauty Pose (Chin Slight Turn)",
  "Editorial Portrait Pose",
  "Street Photography Pose",
  "Documentary Candid Pose",
  "Dynamic Action",
  "Relaxed Sitting",
  "Fashion Pose",

  // New: Hands / Upper Body Interactions
  "Hands Adjusting Sunglasses on Head",
  "Both Hands Holding Sunglasses",
  
  // New: Selfie Variations
  "Selfie: Arms Extended Front",
  "Selfie: High Angle (Look Up)",
  "Selfie: Head Tilted (Cute)",
  
  // New: Movement / Water / Beach
  "Walking Out of Water",
  "Walking in Shallow Surf",
  "Splashing Water",
  
  // New: Mood / Expression focused
  "Laughing Head Thrown Back",
  "Genuine Joyful Smile (Walking)",
  "Relaxed Vacation Stance",

  // Fitness / Seated
  "Seated on Edge (Fitness)",
  "Seated with Hands on Knees",

  // Holiday / Elegant
  "Standing with Hand Near Neck (Elegant)",
  "Arm Folded Across Waist",
  "Standing Weight Shift (Holding Bag)",
  "Looking Down (Demure/Romantic)",

  // Beach / Back View
  "Back to Camera, Looking Over Shoulder",
  "Torso Twisted, Looking Back",

  // Glamour / Stairs
  "Seated on Stairs, Legs Crossed",
  "Elegant Seated Pose (Gown)",

  // Lifestyle / Profile
  "Profile View, Looking Away (Distant)",
  "Three-Quarter Profile (Lifestyle)",

  // Water Park / Casual
  "Standing, Hand on Hip, Hand on Neck",
  "Dutch Angle Stance (Dynamic)",

  // Selfie
  "Night Selfie (Hood Up)"
].sort();
