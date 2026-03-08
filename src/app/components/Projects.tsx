import { Github, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Projects() {
  const projects = [
    {
      title: "SpendSmart",
      description:
        "Financial analysis system that processes bank statements and spending data to generate insights. Includes automated spending categorization, unusual expense detection, and visual analytics dashboards for better financial decision making.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      tech: ["React", "JavaScript", "Data Analytics", "Dashboard"],
      github: null,
      demo: null,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "MindConnect",
      description:
        "Full-stack mental health platform supporting PHQ-9 based depression screening and therapist–patient interaction with dashboards and progress tracking.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      tech: ["React", "Tailwind CSS", "JavaScript", "Full Stack"],
      github: "https://github.com/SarikaReddy20/MindConnect",
      demo: null,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive personal portfolio website showcasing projects, skills, and achievements with a modern UI layout.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/SarikaReddy20/Portfolio",
      demo: null,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Learnify",
      description:
        "An educational platform designed to enhance learning experiences with interactive content and progress tracking.",
      image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc",
      tech: ["React", "JavaScript", "CSS", "Bootstrap"],
      github: "https://github.com/sarikareddy20/Learnify",
      demo: null,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Interactive Graphing Calculus Tool",
      description:
        "Python-based application for visualizing mathematical functions. Implements algorithms to compute roots and intersections with real-time graphical plotting.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
      tech: ["Python", "Algorithms", "Mathematics", "Data Visualization"],
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-3d">
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
                <div className="p-6 relative z-20">
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

                  {/* Buttons */}
                  <div className="flex gap-3">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
