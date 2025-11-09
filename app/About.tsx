import { Zap, Heart, Target, Award } from 'lucide-react';
import { SectionHeaderName } from './Components/section-header-name';
import { SectionQuote } from './Components/section-quote';

export function About() {
  const values = [
    { 
      icon: Zap, 
      title: 'Fast Learner', 
      description: 'Quick to adapt and master new technologies',
      gradient: 'from-purple-500 to-violet-500'
    },
    { 
      icon: Heart, 
      title: 'Passionate', 
      description: 'Dedicated to creating meaningful work',
      gradient: 'from-pink-500 to-rose-500'
    },
    { 
      icon: Target, 
      title: 'Goal-Oriented', 
      description: 'Focused on delivering results',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      icon: Award, 
      title: 'Quality-Driven', 
      description: 'Committed to excellence',
      gradient: 'from-orange-500 to-amber-500'
    },
  ];

  const imagesContainer = [
    {
      alt:"Abstract",
      src:"/abstract.png"
    },
    {
      alt:"Technology",
      src:"/technology.png"
    },
    {
      alt:"Creative",
      src:"/creative.png"
    },
    {
      alt:"Desgin",
      src:"/design.png"
    }
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <SectionHeaderName sectionName="About me" />
          <SectionQuote qT1="Turning Ideas into" qT2="Digital Reality" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {imagesContainer.map((imageDetails, index) => (
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10" key={index}>
                <img
                  src={imageDetails.src}
                  alt={imageDetails.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-xl text-white/70 leading-relaxed">
            I’m a <span className="text-white">Software Engineer</span> currently working at <span className="text-white">Zebra Technologies</span>, where I’m learning and applying <span className="text-white">automation testing</span> to ensure high-quality, reliable software delivery. My role allows me to bridge the gap between development and testing — building efficient, maintainable automation frameworks and improving overall test coverage.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
            I believe in <span className="text-white">continuous learning and pushing creative and technical boundaries </span>with every project I take on. Whether its designing clean interfaces, building seamless full-stack solutions, or exploring emerging technologies like <span className="text-white">AI/ML</span> and <span className="text-white">DevOps</span>, I approach every challenge with curiosity and dedication.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
            I’m actively seeking opportunities where I can <span className="text-white">contribute</span> my skills, <span className="text-white">learn from experienced professionals</span>, and <span className="text-white">build meaningful digital products</span> that make a real impact.
            </p>

            {/* Current Status */}
            <div className="mt-8 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <div className="text-white mb-2">Currently at Zebra Technologies</div>
                  <div className="text-white/60">
                    Gaining hands-on experience while actively exploring new
                    opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-white mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
