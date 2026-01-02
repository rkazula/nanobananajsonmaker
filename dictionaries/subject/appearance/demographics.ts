
export const SUBJECT_COUNTS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "many"];
export const SUBJECT_GROUPING = ["solo", "couple", "small_group", "crowd"];
export const SUBJECT_ROLES = ["primary", "secondary", "background", "foreground_accent"];
export const IDENTITY_LOCKS = ["none", "soft", "strong"];

/**
 * Age range presets for text-to-image prompting
 * - Numeric ranges anchor the model.
 * - Visual descriptors reinforce age perception.
 * - Guardrails prevent unwanted age drift.
 */
export type AgeRangeId =
  | "CHILD"
  | "TEEN"
  | "YOUNG_ADULT"
  | "ADULT"
  | "MIDDLE_AGED"
  | "MATURE_ADULT"
  | "SENIOR";

export type AgeRangePreset = {
  id: AgeRangeId;
  /**
   * Human-readable label with clarifying hints in parentheses.
   */
  label: string;
  /**
   * Model-friendly age anchors and descriptors.
   */
  promptTags: string[];
  /**
   * Safety or precision constraints.
   */
  guardrails?: string[];
};

export const AGE_RANGES: AgeRangePreset[] = [
  {
    id: "CHILD",
    label: "Child (under 12, pre-teen, childlike proportions)",
    promptTags: [
      "child",
      "under 12 years old",
      "pre-teen",
      "childlike facial proportions",
      "small stature",
      "youthful features",
    ],
    guardrails: [
      "no sexualized pose",
      "no revealing clothing",
      "fully clothed",
      "age-appropriate clothing",
    ],
  },

  {
    id: "TEEN",
    label: "Teen (13–17, adolescent, youthful but not adult)",
    promptTags: [
      "teenager",
      "13 to 17 years old",
      "adolescent",
      "youthful face",
      "slim teenage proportions",
    ],
    guardrails: [
      "no sexualized pose",
      "no lingerie",
      "no revealing clothing",
      "clearly under 18",
    ],
  },

  {
    id: "YOUNG_ADULT",
    label: "Young Adult (18–25, early twenties, youthful adult)",
    promptTags: [
      "young adult",
      "18 to 25 years old",
      "early twenties",
      "youthful adult appearance",
      "smooth skin",
    ],
    guardrails: [
      "clearly over 18",
      "not a teenager",
    ],
  },

  {
    id: "ADULT",
    label: "Adult (26–39, fully developed adult, mature features)",
    promptTags: [
      "adult",
      "late twenties to thirties",
      "26 to 39 years old",
      "fully developed adult",
      "mature facial structure",
    ],
    guardrails: [
      "not a teenager",
      "not elderly",
    ],
  },

  {
    id: "MIDDLE_AGED",
    label: "Middle-aged (40–49, subtle aging, experienced adult)",
    promptTags: [
      "middle-aged adult",
      "40 to 49 years old",
      "subtle signs of aging",
      "experienced appearance",
      "slight wrinkles",
    ],
    guardrails: [
      "not young adult",
      "not senior",
    ],
  },

  {
    id: "MATURE_ADULT",
    label: "Mature Adult (50–64, visible aging, confident maturity)",
    promptTags: [
      "mature adult",
      "50 to 64 years old",
      "visible signs of aging",
      "fine lines and wrinkles",
      "confident mature appearance",
    ],
    guardrails: [
      "not young adult",
    ],
  },

  {
    id: "SENIOR",
    label: "Senior (65+, elderly, advanced age, grey hair, wrinkles)",
    promptTags: [
      "senior",
      "elderly person",
      "65 years old and above",
      "advanced age",
      "grey or white hair",
      "pronounced wrinkles",
    ],
    guardrails: [
      "not middle-aged",
      "not young adult",
    ],
  },
];

export const AGE_RANGE_IDS = AGE_RANGES.map(r => r.id);

/**
 * Helper
 */
export const getAgeRange = (id: AgeRangeId): AgeRangePreset =>
  AGE_RANGES.find((r) => r.id === id) ?? AGE_RANGES[0];
