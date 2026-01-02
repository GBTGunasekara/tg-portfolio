export type Experience = {
  company: string;
  location: string;
  role: string;
  team?: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "IFS",
    location: "Colombo, Sri Lanka",
    role: "Senior Software Engineer",
    team: "AI Services (Technology R&D)",
    period: "Oct 2022 - Dec 2025",
    bullets: [
      "Led development of an internal Machine Learning Developer Portal (MLDP) enabling product teams to design and deploy ML/LLM recipes without notebooks or ad-hoc scripts.",
      "Owned release engineering and environments (DEV/EXP/PROD): CI/CD pipelines, image builds, deployments, versioning, and cleanup for reliability and cost efficiency.",
      "Implemented monitoring/observability using Azure Application Insights + workbooks; defined dashboards and documented usage/cost considerations.",
      "Led LLM recipe management + UI uplift from design to delivery (workshops, API/Angular implementation, reusable components, zero-bug milestones).",
      "Co-owned IFS Cloud framework components for ML integration and scheduling optimisation; provided design/technical guidance and continuity when architect support was unavailable.",
      "Collaborated with multiple product teams through design sessions and stakeholder syncs; supported planning, estimation, code reviews, demos, and knowledge sharing.",
    ],
  },
  {
    company: "IFS",
    location: "Colombo, Sri Lanka",
    role: "Software Engineer",
    team: "Infrastructure & Framework; Asset Management",
    period: "Nov 2019 - Sep 2022",
    bullets: [
      "Maintained CI infrastructure: monitored Kubernetes clusters and pipelines, configured CI jobs, fixed CI bugs, wrote automation scripts, and managed Linux server configs.",
      "Delivered IFS Cloud enhancements for Asset Management including Aurena UX work, cross-module feature development, and a technician web portal.",
      "Improved performance, upgrade stability, and quality by fixing performance/upgrade issues, strengthening row-level security, and authoring regression/E2E tests.",
      "Completed formal training on IFS Cloud / Apps 9 & 10 and Service & Asset Management, strengthening ERP domain knowledge.",
    ],
  },
];
