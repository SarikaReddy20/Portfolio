import sarikaImage from "/sarika.jpg";
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
                  src={sarikaImage}
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
                B.E. Computer Science at CBIT
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science student at Chaitanya Bharathi Institute
                of Technology with a strong foundation in software engineering,
                distributed systems, and security.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I build backend and full-stack solutions using Java, Spring
                Boot, Node.js, React, and SQL. My work focuses on clean
                architecture, scalable systems, and reliable user experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed flex items-center gap-2">
                Recently interned at JPMorgan Chase & Co. and delivered
                hackathon solutions for real-world problems while continuing to
                learn and grow in cloud and security domains.
                <Heart size={18} className="text-red-500 fill-red-500" />
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">
                    JPMorgan
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Internship
                  </div>
                </div>

                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <div className="text-2xl font-bold text-primary">AWS</div>
                  <div className="text-sm text-muted-foreground">Certified</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
