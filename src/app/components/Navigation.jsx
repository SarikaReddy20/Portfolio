import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Achievements", id: "achievements" },
    { label: "Resume", id: "resume" },
    { label: "Contact", id: "contact" }
  ];
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg" : "bg-white/90 backdrop-blur-md shadow-sm"}`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-16", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollToSection("hero"),
              className: "text-[#1E293B] font-bold text-xl hover:text-[#2563EB] transition-colors relative group",
              children: [
                /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Sarika Reddy" }),
                /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity -z-0" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-1", children: menuItems.map((item) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollToSection(item.id),
              className: "relative text-[#1E293B] hover:text-[#2563EB] transition-colors px-4 py-2 rounded-lg group",
              children: [
                /* @__PURE__ */ jsx("span", { className: "relative z-10", children: item.label }),
                /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" })
              ]
            },
            item.id
          )) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              className: "md:hidden text-[#1E293B] p-2 rounded-lg hover:bg-gray-100 transition-colors",
              children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }) }),
        isMobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden glass border-t border-gray-200 shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "px-4 py-4 space-y-2", children: menuItems.map((item) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scrollToSection(item.id),
            className: "block w-full text-left text-[#1E293B] hover:text-[#2563EB] hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all py-3 px-4 rounded-lg",
            children: item.label
          },
          item.id
        )) }) })
      ]
    }
  );
}
export {
  Navigation
};
