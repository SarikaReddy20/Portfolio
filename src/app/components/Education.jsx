import { jsx, jsxs } from "react/jsx-runtime";
import { GraduationCap, BookOpen, Award, TrendingUp } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
function Education() {
  const educationData = [
    {
      icon: /* @__PURE__ */ jsx(GraduationCap, { size: 32 }),
      degree: "Bachelor of Engineering in Computer Science Engineering",
      institution: "Chaitanya Bharathi Institute of Technology",
      period: "Sep 2023 \u2013 Present",
      description: "Pursuing B.E. CSE with a current CGPA of 9.60/10 and a focus on software engineering, algorithms, and system design.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: /* @__PURE__ */ jsx(BookOpen, { size: 32 }),
      degree: "Intermediate Education (MPC)",
      institution: "Narayana Junior College",
      period: "Jun 2021 \u2013 Mar 2023",
      description: "Completed intermediate education in Mathematics, Physics, and Chemistry with a CGPA of 9.79/10.",
      color: "from-purple-500 to-pink-500"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "education", className: "py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#1E293B] mb-4", children: "Education Journey" }),
      /* @__PURE__ */ jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-4", children: "My academic background and achievements" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 items-stretch", children: educationData.map((edu, index) => /* @__PURE__ */ jsx(ScrollReveal, { delay: index * 200, className: "h-full", children: /* @__PURE__ */ jsxs("div", { className: "group relative h-full flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${edu.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `text-white bg-gradient-to-br ${edu.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`,
            children: edu.icon
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors", children: edu.degree }),
            index === 0 && /* @__PURE__ */ jsx(TrendingUp, { size: 18, className: "text-green-500" }),
            index === 1 && /* @__PURE__ */ jsx(Award, { size: 18, className: "text-yellow-500" })
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: `font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`,
              children: edu.institution
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-3 font-medium", children: edu.period }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: edu.description })
        ] })
      ] }) })
    ] }) }, index)) })
  ] }) });
}
export {
  Education
};
