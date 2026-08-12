import { ScrollReveal } from "./ScrollReveal";
import { Trophy, TreeDeciduous, Sparkles } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
              Achievements & Activities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">
              A selection of achievements and extracurricular contributions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="group relative rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0f172a]">
                      Achievements
                    </h3>
                    <p className="text-sm text-slate-500">
                      Academic and competitive milestones.
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 text-gray-600 list-disc list-inside">
                  <li>
                    Qualified <strong>JEE Advanced</strong> with AIR 18,000 and
                    secured <strong>JEE Main</strong> AIR 29,000.
                  </li>
                  <li>
                    Earned the <strong>AWS Certified Cloud Practitioner</strong>{" "}
                    credential in July 2026.
                  </li>
                  <li>
                    Completed the <strong>Codecademy Java Programming</strong>{" "}
                    certificate to strengthen Java fundamentals.
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="group relative rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-500 to-teal-500 opacity-80"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg">
                    <TreeDeciduous size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#0f172a]">
                      Extracurricular
                    </h3>
                    <p className="text-sm text-slate-500">
                      Community and campus involvement.
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 text-gray-600 list-disc list-inside">
                  <li>
                    Served as an <strong>NSS Volunteer</strong> at CBIT from Dec
                    2023 to Dec 2024.
                  </li>
                  <li>
                    Organized blood donation drives, tree plantation activities,
                    and community outreach programs.
                  </li>
                  <li>
                    Contributed to social impact initiatives while balancing
                    academic and technical commitments.
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
