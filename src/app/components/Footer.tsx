import { Github, Linkedin, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#1E293B] via-[#0f172a] to-[#1E293B] text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Name/Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sarika Reddy
            </h3>
            <p className="text-gray-400 text-sm">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sarikareddy20"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-110 backdrop-blur-sm"
            >
              <Github
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sarikareddy20/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 rounded-full hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-110 backdrop-blur-sm"
            >
              <Linkedin
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="flex items-center gap-2 text-gray-400 text-sm">
              © 2026 Sarika Reddy. Crafted with
              <Heart
                size={16}
                className="text-red-400 fill-red-400 animate-pulse"
              />
              and lots of coffee ☕
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-6 right-6 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all group"
          aria-label="Scroll to top"
        >
          <ArrowUp
            size={20}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
}
