import {
  Code2,
  Smartphone,
  Database,
  MessageSquare,
  Lightbulb,
  Users,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Skills() {
  const technicalSkills = [
    { name: "C", icon: <Code2 size={20} />, level: 80 },
    { name: "Python", icon: <Code2 size={20} />, level: 85 },
    { name: "Java", icon: <Code2 size={20} />, level: 80 },
    { name: "SQL", icon: <Database size={20} />, level: 75 },
    { name: "JavaScript", icon: <Code2 size={20} />, level: 80 },
    { name: "React", icon: <Code2 size={20} />, level: 75 },

    { name: "Node.js", icon: <Code2 size={20} />, level: 70 },
    { name: "Express.js", icon: <Code2 size={20} />, level: 70 },
    { name: "MongoDB", icon: <Database size={20} />, level: 70 },
    { name: "Java Servlets", icon: <Code2 size={20} />, level: 65 },
    { name: "JSP", icon: <Code2 size={20} />, level: 65 },
    { name: "Spring Boot", icon: <Code2 size={20} />, level: 65 },

    {
      name: "Data Structures & Algorithms",
      icon: <Code2 size={20} />,
      level: 80,
    },
  ];

  const softSkills = [
    { name: "Communication", icon: <MessageSquare size={20} /> },
    { name: "Problem Solving", icon: <Lightbulb size={20} /> },
    { name: "Teamwork", icon: <Users size={20} /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">
              Technologies and tools I've mastered
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {/* Technical Skills */}
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-2xl font-semibold text-[#1E293B] mb-6 text-center">
                Technical Skills
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105"
                  >
                    <div className="text-[#2563EB]">{skill.icon}</div>
                    <span className="font-semibold text-[#1E293B]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Soft Skills */}
          <ScrollReveal delay={400}>
            <div>
              <h3 className="text-2xl font-semibold text-[#1E293B] mb-6 text-center">
                Soft Skills
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-purple-600 text-white rounded-xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                  >
                    {skill.icon}
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
