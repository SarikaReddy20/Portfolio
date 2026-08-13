import { jsx, jsxs } from "react/jsx-runtime";
import {
  Code2,
  Database,
  MessageSquare,
  Lightbulb,
  Users
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
function Skills() {
  const technicalSkills = [
    { name: "C", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 80 },
    { name: "Python", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 85 },
    { name: "Java", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 80 },
    { name: "SQL", icon: /* @__PURE__ */ jsx(Database, { size: 20 }), level: 75 },
    { name: "JavaScript", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 80 },
    { name: "React", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 75 },
    { name: "Node.js", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 70 },
    { name: "Express.js", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 70 },
    { name: "MongoDB", icon: /* @__PURE__ */ jsx(Database, { size: 20 }), level: 70 },
    { name: "Java Servlets", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 65 },
    { name: "JSP", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 65 },
    { name: "Spring Boot", icon: /* @__PURE__ */ jsx(Code2, { size: 20 }), level: 65 },
    {
      name: "Data Structures & Algorithms",
      icon: /* @__PURE__ */ jsx(Code2, { size: 20 }),
      level: 80
    }
  ];
  const softSkills = [
    { name: "Communication", icon: /* @__PURE__ */ jsx(MessageSquare, { size: 20 }) },
    { name: "Problem Solving", icon: /* @__PURE__ */ jsx(Lightbulb, { size: 20 }) },
    { name: "Teamwork", icon: /* @__PURE__ */ jsx(Users, { size: 20 }) }
  ];
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-20 px-4 sm:px-6 lg:px-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#1E293B] mb-4", children: "Skills & Expertise" }),
      /* @__PURE__ */ jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-4", children: "Technologies and tools I've mastered" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 200, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#1E293B] mb-6 text-center", children: "Technical Skills" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: technicalSkills.map((skill, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-3 bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-[#2563EB]", children: skill.icon }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#1E293B]", children: skill.name })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 400, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#1E293B] mb-6 text-center", children: "Soft Skills" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4", children: softSkills.map((skill, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-purple-600 text-white rounded-xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all hover:scale-105",
            children: [
              skill.icon,
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: skill.name })
            ]
          },
          index
        )) })
      ] }) })
    ] })
  ] }) });
}
export {
  Skills
};
