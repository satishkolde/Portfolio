"use client"
import { Code2, Database, Globe, Zap } from 'lucide-react';
import { SectionHeaderName } from './Components/section-header-name';
import { SectionQuote } from './Components/section-quote';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    gradient: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Bootstrap', level: 95 },
      { name: 'JavaScript', level: 90 },
    ],
  },
  {
    title: 'Backend & Database',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'SQL',level:80},
      { name:"Django",level:80}
    ],
  },
  {
    title: 'Web Technologies',
    icon: Globe,
    gradient: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: Zap,
    gradient: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Webpack', level: 70 },
      { name: 'CI/CD', level: 65 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
            <SectionHeaderName sectionName="Skills & Expertise" />
            <SectionQuote qT1="What I Bring" qT2="To The Table" />
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            A diverse skill set combining creativity with technical expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-white/50 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-white/10">
            <h3 className="text-2xl md:text-3xl text-white mb-4">Always Learning, Always Growing</h3>
            <p className="text-white/70 text-lg mb-8">
              As a fresh graduate, I'm committed to continuous improvement and staying updated with the latest 
              technologies and design trends.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI/ML Basics', 'Cloud Computing', 'Playwright', 'System Design'].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
