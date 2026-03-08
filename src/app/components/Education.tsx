import { GraduationCap, BookOpen, Award, TrendingUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Education() {
  const educationData = [
    {
      icon: <GraduationCap size={32} />,
      degree: 'B.E. Computer Science',
      institution: 'Chaitanya Bharathi Institute of Technology',
      period: 'Present',
      description: 'Pursuing Bachelor of Engineering in Computer Science with focus on software development and algorithms.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <BookOpen size={32} />,
      degree: 'MPC (Mathematics, Physics, Chemistry)',
      institution: 'Narayana Junior College',
      period: 'Completed',
      description: 'Completed intermediate education with specialization in Mathematics, Physics, and Chemistry.',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Education Journey</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">My academic background and achievements</p>
          </div>
        </ScrollReveal>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Decorative Circle */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${edu.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`text-white bg-gradient-to-br ${edu.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                          {edu.degree}
                        </h3>
                        {index === 0 && (
                          <TrendingUp size={18} className="text-green-500" />
                        )}
                        {index === 1 && (
                          <Award size={18} className="text-yellow-500" />
                        )}
                      </div>
                      <p className={`font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 mb-3 font-medium">{edu.period}</p>
                      <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}