import { Github, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Projects() {
  const projects = [
    {
      title: "TRACE — Threat Risk Analysis for Code Environments",
      description:
        "Developing an automated threat-modeling system using Tree-sitter to parse code, extract architecture context, and generate risk assessments with STRIDE, OWASP Top 10, LINDDUN, and PASTA.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tech: ["Security", "Code Analysis", "Threat Modeling", "Architecture"],
      github: null,
      demo: null,
      gradient: "from-slate-500 to-slate-700",
    },
    {
      title: "SpendSmart",
      description:
        "MERN-based financial analysis platform that processes bank statements and spending data to provide intelligent insights, expense categorization, and analytics dashboards.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/SarikaReddy20/FinanceTracker",
      demo: null,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "MindConnect",
      description:
        "Full-stack mental health platform with PHQ-9 screening, therapist-patient interaction, and responsive dashboards for monitoring user progress.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      tech: ["React", "Express", "MongoDB", "Node.js"],
      github: "https://github.com/SarikaReddy20/MindConnect",
      demo: null,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Interactive Graphing Calculus Tool",
      description:
        "Python application for real-time visualization of function behavior, root finding, intersections, and multi-graph calculus analysis.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
      tech: ["Python", "Algorithms", "Visualization", "Education"],
      github:
        "https://github.com/SarikaReddy20/Interactive-Graphing-Calculus-Tool",
      demo: null,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">
              Some of my recent work and creations
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full">
              <div className="group relative h-full flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-3d">
                {/* Gradient Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`}
                ></div>

                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 z-10`}
                  ></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-[#2563EB] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 text-[#2563EB] px-3 py-1.5 rounded-full font-medium border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    {/* Buttons */}
                    <div className="flex gap-3 flex-wrap">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 text-[#1E293B] hover:text-white bg-gray-100 hover:bg-[#2563EB] px-4 py-2 rounded-lg transition-all"
                        >
                          <Github
                            size={18}
                            className="group-hover/btn:rotate-12 transition-transform"
                          />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg text-sm font-medium">
                          🚧 Currently Working
                        </div>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 text-white bg-gradient-to-r from-[#2563EB] to-purple-600 hover:from-purple-600 hover:to-pink-600 px-4 py-2 rounded-lg transition-all"
                        >
                          <ExternalLink
                            size={18}
                            className="group-hover/btn:translate-x-1 transition-transform"
                          />
                          <span className="text-sm font-medium">Demo</span>
                        </a>
                      )}
                    </div>
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
