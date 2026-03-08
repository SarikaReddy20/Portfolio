import { ScrollReveal } from "./ScrollReveal";
import { Code, Sparkles, Heart } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 text-primary opacity-20">
        <Code size={100} />
      </div>

      <div className="absolute bottom-20 left-10 text-primary opacity-20">
        <Sparkles size={80} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>

            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <ScrollReveal delay={200}>
            <div className="flex justify-center">
              <div className="relative group">
                {/* Gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

                <img
                  src="/sarika.jpg"
                  alt="Sarika Reddy"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover aspect-square"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* About Text */}
          <ScrollReveal delay={400}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <Sparkles size={18} className="text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Computer Science Student
                </span>
              </div>

              <h3 className="text-3xl font-bold text-foreground">
                Studying at CBIT
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student at Chaitanya Bharathi
                Institute of Technology (CBIT), with a strong interest in web
                development and data structures & algorithms.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I love solving complex problems and building innovative
                solutions that make a difference. My journey in technology has
                been driven by curiosity and a desire to create meaningful
                applications that enhance user experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed flex items-center gap-2">
                When I'm not coding, you'll find me exploring new technologies,
                participating in coding competitions, and constantly learning to
                improve my skills.
                <Heart size={18} className="text-red-500 fill-red-500" />
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>

                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Skills</div>
                </div>

                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">
                    Dedication
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
