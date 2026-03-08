import { Mail, Github, Linkedin, Send } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <ScrollReveal delay={100}>
            <a
              href="mailto:pittasarikareddy@gmail.com"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center overflow-hidden card-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-[#2563EB] transition-colors">
                  Email
                </h3>
                <p className="text-gray-600 text-sm">
                  pittasarikareddy@gmail.com
                </p>
                <Send
                  size={16}
                  className="mx-auto mt-3 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                />
              </div>
            </a>
          </ScrollReveal>

          {/* GitHub */}
          <ScrollReveal delay={200}>
            <a
              href="https://github.com/sarikareddy20"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center overflow-hidden card-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Github size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-purple-600 transition-colors">
                  GitHub
                </h3>
                <p className="text-gray-600 text-sm">
                  github.com/sarikareddy20
                </p>
                <Send
                  size={16}
                  className="mx-auto mt-3 text-purple-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                />
              </div>
            </a>
          </ScrollReveal>

          {/* LinkedIn */}
          <ScrollReveal delay={300}>
            <a
              href="https://www.linkedin.com/in/sarikareddy20/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center overflow-hidden card-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Linkedin size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2 group-hover:text-green-600 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-gray-600 text-sm">
                  linkedin.com/in/sarikareddy20
                </p>
                <Send
                  size={16}
                  className="mx-auto mt-3 text-green-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                />
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
