import { jsx, jsxs } from "react/jsx-runtime";
import {
  Github,
  Linkedin,
  Download,
  Briefcase,
  Code,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";
function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Sarika Reddy";
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Web Developer", "DSA Enthusiast", "Problem Solver"];
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3e3);
    return () => clearInterval(interval);
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-blue-50 to-purple-50", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-30", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
          /* @__PURE__ */ jsx(
            Code,
            {
              className: "absolute top-20 left-[10%] text-blue-300 opacity-20 animate-float",
              size: 40
            }
          ),
          /* @__PURE__ */ jsx(
            Sparkles,
            {
              className: "absolute top-40 right-[15%] text-purple-300 opacity-10 animate-float animation-delay-2000",
              size: 35
            }
          ),
          /* @__PURE__ */ jsx(
            Code,
            {
              className: "absolute bottom-40 left-[20%] text-pink-300 opacity-10 animate-float animation-delay-4000",
              size: 45
            }
          ),
          /* @__PURE__ */ jsx(
            Sparkles,
            {
              className: "absolute bottom-20 right-[25%] text-blue-300 opacity-10 animate-float animation-delay-3000",
              size: 30
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto w-full relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[#2563EB] mb-4 animate-fade-in-down", children: "Hi, I'm" }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1E293B] mb-4 min-h-[1.5em]", children: [
            displayText,
            /* @__PURE__ */ jsx("span", { className: "animate-blink", children: "|" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-16 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 font-bold animate-fade-in", children: titles[titleIndex] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-1000", children: "B.E. Computer Science student at CBIT specializing in backend systems, security, and modern full-stack development." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-1500", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => scrollToSection("projects"),
                className: "group flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white px-6 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg",
                children: [
                  /* @__PURE__ */ jsx(
                    Briefcase,
                    {
                      size: 20,
                      className: "group-hover:rotate-12 transition-transform"
                    }
                  ),
                  "View Projects"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => scrollToSection("resume"),
                className: "group flex items-center gap-2 bg-white text-[#2563EB] px-6 py-3 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg border-2 border-[#2563EB]",
                children: [
                  /* @__PURE__ */ jsx(
                    Download,
                    {
                      size: 20,
                      className: "group-hover:translate-y-1 transition-transform"
                    }
                  ),
                  "Download Resume"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 animate-fade-in-up animation-delay-2000", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://github.com/sarikareddy20",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:-rotate-6",
                children: /* @__PURE__ */ jsx(
                  Github,
                  {
                    size: 24,
                    className: "text-[#1E293B] group-hover:text-[#2563EB] transition-colors"
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
                className: "group p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:rotate-6",
                children: /* @__PURE__ */ jsx(
                  Linkedin,
                  {
                    size: 24,
                    className: "text-[#1E293B] group-hover:text-[#2563EB] transition-colors"
                  }
                )
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
export {
  Hero
};
