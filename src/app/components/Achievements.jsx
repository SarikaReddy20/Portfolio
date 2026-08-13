import { jsx, jsxs } from "react/jsx-runtime";
import { ScrollReveal } from "./ScrollReveal";
import { Trophy, TreeDeciduous } from "lucide-react";
function Achievements() {
  return /* @__PURE__ */ jsx("section", { id: "achievements", className: "py-20 px-4 sm:px-6 lg:px-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#1E293B] mb-4", children: "Achievements & Activities" }),
      /* @__PURE__ */ jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-4", children: "A selection of achievements and extracurricular contributions." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 100, children: /* @__PURE__ */ jsxs("div", { className: "group relative rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg", children: /* @__PURE__ */ jsx(Trophy, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#0f172a]", children: "Achievements" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Academic and competitive milestones." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-gray-600 list-disc list-inside", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "Qualified ",
              /* @__PURE__ */ jsx("strong", { children: "JEE Advanced" }),
              " with AIR 18,000 and secured ",
              /* @__PURE__ */ jsx("strong", { children: "JEE Main" }),
              " AIR 29,000."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "Earned the ",
              /* @__PURE__ */ jsx("strong", { children: "AWS Certified Cloud Practitioner" }),
              " ",
              "credential in July 2026."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "Completed the ",
              /* @__PURE__ */ jsx("strong", { children: "Codecademy Java Programming" }),
              " ",
              "certificate to strengthen Java fundamentals."
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 200, children: /* @__PURE__ */ jsxs("div", { className: "group relative rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-green-500 to-teal-500 opacity-80" }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg", children: /* @__PURE__ */ jsx(TreeDeciduous, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#0f172a]", children: "Extracurricular" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500", children: "Community and campus involvement." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-gray-600 list-disc list-inside", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "Served as an ",
              /* @__PURE__ */ jsx("strong", { children: "NSS Volunteer" }),
              " at CBIT from Dec 2023 to Dec 2024."
            ] }),
            /* @__PURE__ */ jsx("li", { children: "Organized blood donation drives, tree plantation activities, and community outreach programs." }),
            /* @__PURE__ */ jsx("li", { children: "Contributed to social impact initiatives while balancing academic and technical commitments." })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}
export {
  Achievements
};
