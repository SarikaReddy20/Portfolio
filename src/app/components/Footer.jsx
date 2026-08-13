import { jsx, jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Heart, ArrowUp } from "lucide-react";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-gradient-to-br from-[#1E293B] via-[#0f172a] to-[#1E293B] text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent", children: "Sarika Reddy" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Building the future, one line of code at a time" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/sarikareddy20",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group p-4 bg-white/10 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-110 backdrop-blur-sm",
              children: /* @__PURE__ */ jsx(
                Github,
                {
                  size: 20,
                  className: "group-hover:rotate-12 transition-transform"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/in/sarikareddy20/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group p-4 bg-white/10 rounded-full hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-110 backdrop-blur-sm",
              children: /* @__PURE__ */ jsx(
                Linkedin,
                {
                  size: 20,
                  className: "group-hover:rotate-12 transition-transform"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-gray-400 text-sm", children: [
          "\xA9 2026 Sarika Reddy. Crafted with",
          /* @__PURE__ */ jsx(
            Heart,
            {
              size: 16,
              className: "text-red-400 fill-red-400 animate-pulse"
            }
          ),
          "and lots of coffee \u2615"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: scrollToTop,
          className: "absolute bottom-6 right-6 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all group",
          "aria-label": "Scroll to top",
          children: /* @__PURE__ */ jsx(
            ArrowUp,
            {
              size: 20,
              className: "group-hover:-translate-y-1 transition-transform"
            }
          )
        }
      )
    ] })
  ] });
}
export {
  Footer
};
