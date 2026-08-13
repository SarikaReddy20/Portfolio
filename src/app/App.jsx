import { jsx, jsxs } from "react/jsx-runtime";
import { Navigation } from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Certifications } from "./components/Certifications.jsx";
import { Achievements } from "./components/Achievements.jsx";
import { Resume } from "./components/Resume.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "font-['Inter',sans-serif] bg-[#F8FAFC]", children: [
    /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Education, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Certifications, {}),
    /* @__PURE__ */ jsx(Achievements, {}),
    /* @__PURE__ */ jsx(Resume, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  App as default
};

