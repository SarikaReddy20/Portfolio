import { ScrollReveal } from "./ScrollReveal";
import { Briefcase, Sparkles, CalendarDays } from "lucide-react";

const experienceData = [
  {
    title: "Summer Software Engineering Intern",
    company: "JPMorgan Chase & Co.",
    period: "Jun 2026 – Jul 2026",
    details: [
      "Developed backend components using Java and Spring Boot within an enterprise software environment.",
      "Worked with Apache Kafka for event-driven communication and SQL for data querying and persistence.",
      "Collaborated in an agile team to improve code quality, debugging, testing, and deployment workflows.",
    ],
    tags: ["Java", "Spring Boot", "Apache Kafka", "SQL"],
  },
  {
    title: "Walmart Hackathon",
    company: "Team Project",
    period: "Jul 2025",
    details: [
      "Built a MERN-stack product recommendation system integrating external APIs to improve discovery.",
      "Implemented product metadata retrieval, review analysis, and recommendation ranking based on user feedback.",
    ],
    tags: ["React", "Node.js", "MongoDB", "API Integration"],
  },
  {
    title: "JPMorgan Chase & Co. — Code for Good Hackathon",
    company: "Hackathon Project",
    period: "Jun 2025",
    details: [
      "Designed and built a full-stack web application using React, Express.js, and PostgreSQL.",
      "Delivered features for a nonprofit organization focused on usability, data flow, and reliability.",
    ],
    tags: ["React", "Express.js", "PostgreSQL", "Team Collaboration"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">
              Professional experience, internships, and hackathon projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8">
          {experienceData.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 150}>
              <div className="group relative bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80"></div>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-[#0f172a]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#475569] mt-1">
                        {item.company} • {item.period}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-[#2563EB] shadow-sm">
                      <CalendarDays size={18} />
                      {item.period}
                    </div>
                  </div>

                  <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E293B] bg-white border border-slate-200 rounded-full px-3 py-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
