import { jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
function ScrollReveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);
  return /* @__PURE__ */ jsx("div", { ref, className: `reveal ${className}`, children });
}
export {
  ScrollReveal
};
