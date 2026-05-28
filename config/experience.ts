import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ubs",
    position: "Software Development Engineer",
    company: "Radiant Infonet Pvt. Ltd.",
    location: "Noida, India",
    startDate: new Date("2022-02-08"),
    endDate: new Date("2026-03-31"),
    description: [
      "Developed and delivered scalable React-based UI features within the first month, including dynamic dashboards and form-driven modules used by multiple users.",

      "Refactored and standardized UI components using reusable architecture (custom components, hooks, and modular structure) to improve performance, maintainability, and consistency across the application.",

      "Integrated REST APIs using Axios with centralized API handling (GET, POST, PUT, DELETE) and implemented JWT-based authentication with token management.",

      "Built complex multi-step forms with validation using React Hook Form and Zod, supporting dynamic fields, file uploads, and role-based workflows.",

      "Implemented performance optimizations like debouncing, throttling, and lazy loading (infinite scroll) for large datasets and dropdowns.",

      "Worked on localization (multi-language support) and dark/light theme implementation to enhance user experience.",

      "Collaborated with backend and design teams to deliver responsive, user-friendly interfaces aligned with business requirements.",
    ],
    achievements: [
      "Delivered production-ready UI features within the first month, contributing to dashboards and form-based modules used by end users.",

      "Improved UI consistency and performance by refactoring legacy components into reusable React components using modern best practices.",

      "Built and integrated centralized API handling using Axios with JWT authentication, improving code reusability and secure data flow.",

      "Developed complex multi-step onboarding forms with dynamic fields, validation, and file upload support, enhancing user experience and reducing errors.",

      "Implemented performance optimizations such as debouncing, throttling, and lazy loading for large datasets and dropdowns.",

      "Enabled multi-language (i18n) support and dark/light theme, improving accessibility and user engagement.",

      "Collaborated closely with backend and design teams to deliver scalable, responsive, and user-friendly interfaces within deadlines.",
    ],
    skills: [
      "Javascript",
      "Typescript",
      "React",
      "Next.js",
      "HTML 5",
      "CSS 3",
      "Tailwind CSS",
      "Redux",
      "Git",
      "AWS",
    ],
    companyUrl: "https://www.radiantinfonet.com",
    logo: "https://www.radiantinfonet.com/logo/radiant-logo.svg",
  },
];
