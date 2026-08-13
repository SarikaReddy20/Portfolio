import { jsx, jsxs } from "react/jsx-runtime";
import { ScrollReveal } from "./ScrollReveal";
import { Award, Sparkles } from "lucide-react";
const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jul 2026",
    link: "https://www.credly.com/badges/f1b28b2b-397f-4006-9c25-720f70601404/public_url"
  },
  {
    title: "Java Programming",
    issuer: "Codecademy",
    date: "Jan 2026",
    link: "https://www.codecademy.com/profiles/web8399124956/certificates/d3f89367b558583e361640f778191345"
  }
];
function Certifications() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "certifications",
      className: "py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#1E293B] mb-4", children: "Certifications" }),
          /* @__PURE__ */ jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-4", children: "Professional certifications that validate my skills and knowledge." })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: certifications.map((cert) => /* @__PURE__ */ jsx(
          ScrollReveal,
          {
            delay: certifications.indexOf(cert) * 100,
            children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: cert.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group block rounded-3xl bg-white p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg", children: /* @__PURE__ */ jsx(Sparkles, { size: 20 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#0f172a]", children: cert.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: cert.issuer })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-600 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { size: 16 }),
                    /* @__PURE__ */ jsx("span", { children: cert.date })
                  ] })
                ]
              }
            )
          },
          cert.title
        )) })
      ] })
    }
  );
}
export {
  Certifications
};
