import { ScrollReveal } from "./ScrollReveal";
import { Award, Sparkles } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jul 2026",
    link: "https://www.credly.com/badges/f1b28b2b-397f-4006-9c25-720f70601404/public_url",
  },
  {
    title: "Java Programming",
    issuer: "Codecademy",
    date: "Jan 2026",
    link: "https://www.codecademy.com/profiles/web8399124956/certificates/d3f89367b558583e361640f778191345",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">
              Professional certifications that validate my skills and knowledge.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <ScrollReveal
              key={cert.title}
              delay={certifications.indexOf(cert) * 100}
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl bg-white p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0f172a]">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-500">{cert.issuer}</p>
                  </div>
                </div>
                <div className="text-sm text-slate-600 flex items-center gap-2">
                  <Award size={16} />
                  <span>{cert.date}</span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
