import resumePdf from "/Sarika_Reddy_Resume.pdf";
import { Download, FileText, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Resume() {
  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Resume</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </ScrollReveal>

        {/* Resume Card */}
        <ScrollReveal delay={200}>
          <div className="relative group">
            {/* Glowing border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-[#2563EB] to-purple-600 rounded-2xl shadow-2xl p-12 overflow-hidden">
              {/* Decorative icons */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <Sparkles size={80} className="text-white opacity-10" />
              </div>

              <div className="absolute bottom-0 left-0 -mb-4 -ml-4">
                <FileText size={100} className="text-white opacity-10" />
              </div>

              <div className="relative z-10">
                <div className="text-white mb-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                    <FileText size={40} />
                  </div>

                  <h3 className="text-3xl font-bold mb-4">
                    Download My Resume
                  </h3>

                  <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    Get a detailed overview of my education, skills, projects,
                    and experience. Available in PDF format for your
                    convenience.
                  </p>
                </div>

                {/* Download Button */}
                <div className="flex justify-center">
                  <a
                    href={resumePdf}
                    download
                    className="group/btn relative inline-flex items-center gap-3 bg-white text-[#2563EB] px-8 py-4 rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl font-semibold hover:scale-105 duration-300"
                  >
                    <Download
                      size={24}
                      className="group-hover/btn:animate-bounce"
                    />
                    <span>Download Resume</span>

                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white to-blue-50 opacity-0 group-hover/btn:opacity-100 transition-opacity -z-10"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
