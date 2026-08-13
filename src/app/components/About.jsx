import { jsx, jsxs } from "react/jsx-runtime";
import { ScrollReveal } from "./ScrollReveal.jsx";
import { Code, Sparkles, Heart } from "lucide-react";
function About() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "about",
      className: "py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 right-10 text-primary opacity-20", children: /* @__PURE__ */ jsx(Code, { size: 100 }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-10 text-primary opacity-20", children: /* @__PURE__ */ jsx(Sparkles, { size: 80 }) }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
          /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-foreground mb-4", children: "About Me" }),
            /* @__PURE__ */ jsx("div", { className: "w-20 h-1 bg-primary mx-auto" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsx(ScrollReveal, { delay: 200, children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-primary to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/sarika.jpg",
                  alt: "Sarika Reddy",
                  className: "relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-square"
                }
              )
            ] }) }) }),
            /* @__PURE__ */ jsx(ScrollReveal, { delay: 400, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full", children: [
                /* @__PURE__ */ jsx(Sparkles, { size: 18, className: "text-primary" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-primary", children: "Computer Science Student" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-foreground", children: "B.E. Computer Science at CBIT" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "I'm a Computer Science student at Chaitanya Bharathi Institute of Technology with a strong foundation in software engineering, distributed systems, and security." }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "I build backend and full-stack solutions using Java, Spring Boot, Node.js, React, and SQL. My work focuses on clean architecture, scalable systems, and reliable user experiences." }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed flex items-center gap-2", children: [
                "Recently interned at JPMorgan Chase & Co. and delivered hackathon solutions for real-world problems while continuing to learn and grow in cloud and security domains.",
                /* @__PURE__ */ jsx(Heart, { size: 18, className: "text-red-500 fill-red-500" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 pt-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-card rounded-xl border border-border", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary", children: "JPMorgan" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Internship" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-card rounded-xl border border-border", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary", children: "AWS" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Certified" })
                ] })
              ] })
            ] }) })
          ] })
        ] })
      ]
    }
  );
}
export {
  About
};

