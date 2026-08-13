import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx(ScrollReveal, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#1E293B] mb-4", children: "Get In Touch" }),
      /* @__PURE__ */ jsx("div", { className: "w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-6 max-w-2xl mx-auto", children: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision." })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 100, children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "mailto:pittasarikareddy@gmail.com",
          className: "group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center overflow-hidden card-3d",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg", children: /* @__PURE__ */ jsx(Mail, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#1E293B] mb-2 group-hover:text-[#2563EB] transition-colors", children: "Email" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "pittasarikareddy@gmail.com" }),
              /* @__PURE__ */ jsx(
                Send,
                {
                  size: 16,
                  className: "mx-auto mt-3 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 200, children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://github.com/sarikareddy20",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center overflow-hidden card-3d",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg", children: /* @__PURE__ */ jsx(Github, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#1E293B] mb-2 group-hover:text-purple-600 transition-colors", children: "GitHub" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "github.com/sarikareddy20" }),
              /* @__PURE__ */ jsx(
                Send,
                {
                  size: 16,
                  className: "mx-auto mt-3 text-purple-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(ScrollReveal, { delay: 300, children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.linkedin.com/in/sarikareddy20/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center overflow-hidden card-3d",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg", children: /* @__PURE__ */ jsx(Linkedin, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-[#1E293B] mb-2 group-hover:text-green-600 transition-colors", children: "LinkedIn" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "linkedin.com/in/sarikareddy20" }),
              /* @__PURE__ */ jsx(
                Send,
                {
                  size: 16,
                  className: "mx-auto mt-3 text-green-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                }
              )
            ] })
          ]
        }
      ) })
    ] })
  ] }) });
}
export {
  Contact
};
