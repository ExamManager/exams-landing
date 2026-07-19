export type PricingPlan = {
  id: string;
  name: string;
  priceLabel: string;
  badge?: string;
  popular?: boolean;
  features: string[];
};

/** Canonical ExamManager plans — aligned with V1 / V2 / V3. */
export const pricingPlans: PricingPlan[] = [
  {
    id: "standard",
    name: "Standard",
    priceLabel: "$0",
    features: [
      "For Personal Use only",
      "Time up to 3 exams simultaneously",
      "Advanced Analytical Tools",
      "Save exams up to 1 day ahead",
    ],
  },
  {
    id: "basic",
    name: "Basic",
    priceLabel: "$9.99",
    badge: "Most popular",
    popular: true,
    features: [
      "For Schools with under 500 Students",
      "Basic Exam planning",
      "Exam Timetable Creation",
      "Exam Seating Plan Creation",
      "Custom Exam Presets for different subjects",
      "Save exams up to 1 month ahead",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    priceLabel: "$19.99",
    features: [
      "For Schools with under 1000 Students",
      "Advanced Exam planning and managing",
      "Student Result Analysis",
      "Save exams up to 1 year ahead",
    ],
  },
];

export const customPlanNote =
  "Need more capacity? Custom plans start at $39/mo.";
