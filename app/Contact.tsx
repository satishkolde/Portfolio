import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Briefcase, Calendar, Clock, Send, ArrowUpRight, Sparkles } from 'lucide-react';
import { SectionHeaderName } from './Components/section-header-name';
import { SectionQuote } from './Components/section-quote';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      value: SocialLinks["Mail"],
      description: 'Drop me a line anytime',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      href:`mailto:${SocialLinks["Mail"]}`,
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: SocialLinks["Mobile"],
      description: 'Mon-Fri from 9am to 6pm',
      gradient: 'from-pink-500 to-cyan-500',
      bgGradient: 'from-pink-500/20 to-cyan-500/20',
      borderColor: 'border-pink-500/30',
      href:`callto:${SocialLinks["Mobile"]}`,
    }
  ];

  const socials = [
    { icon: Github, label: 'GitHub', handle: SocialLinks["Github"] },
    { icon: Linkedin, label: 'LinkedIn', handle: SocialLinks["LinkedIn"] },
  ];

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
            <SectionHeaderName sectionName="Let's Connect" />
            <SectionQuote qaT1="Ready To" qT2="Work Together?" />
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            I'm actively seeking new opportunities. Let's discuss how I can contribute to your team.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Job Seeking Status - Spans 2 columns */}
          <div className="lg:col-span-2 relative">
            <div className="h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/30 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/50">
                    <Briefcase size={36} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-2xl md:text-3xl text-white">Actively Job Seeking</span>
                    </div>
                    <p className="text-white/70 text-lg">
                      Fresh graduate currently at <span className="text-white">X Company</span>, looking for exciting opportunities
                    </p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar size={20} className="text-emerald-400" />
                      <span className="text-white/60">Availability</span>
                    </div>
                    <p className="text-white">1 month Joing Period</p>
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock size={20} className="text-emerald-400" />
                      <span className="text-white/60">Type</span>
                    </div>
                    <p className="text-white">Full-time</p>
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={20} className="text-emerald-400" />
                      <span className="text-white/60">Location</span>
                    </div>
                    <p className="text-white">Flexible</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                  <p className="text-white/80 text-lg">
                    💡 Eager to learn and contribute to innovative projects. Passionate about creating exceptional digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Experience */}
          <div className="relative">
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50">
                  <Briefcase size={24} />
                </div>
                
                <h3 className="text-2xl text-white mb-6">Software Engineer</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="text-white/60">Zebra Technologies</div>
                  <div className="text-white/50">Jan, 2025 - Present</div>
                </div>

                <p className="text-white/70">
                  Working on innovative projects while continuously learning and seeking new challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-3xl bg-gradient-to-br ${method.bgGradient} border ${method.borderColor} hover:scale-105 transition-all cursor-pointer relative overflow-hidden`}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-white text-xl mb-2">{method.title}</h3>
                  <p className="text-white/90 mb-2">{method.value}</p>
                  <p className="text-white/50">{method.description}</p>

                  <a href={method.href} className={`mt-6 flex items-center gap-2 text-sm bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}>
                    <span>Get in touch</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Links - Full Width Card */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm relative overflow-hidden mb-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-pink-500 rounded-full blur-2xl" />
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl text-white mb-3">Let's Connect on Social</h3>
                <p className="text-white/60 text-lg">Follow my journey and stay updated with my latest work</p>
              </div>

              <div className="flex gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.handle}
                      target="_blank"
                      className="group relative"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-purple-500/50">
                        <Icon size={28} className="text-white" />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        <p className="text-white text-sm">{social.label}</p>
                        <p className="text-white/60 text-xs">{social.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a href={`mailto:${SocialLinks["Mail"]}`} className="inline-flex items-center gap-4 p-2 pr-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all group">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <Send size={24} className="group-hover:rotate-45 transition-transform" />
            </div>
            <div className="text-left">
              <div className="text-white text-lg">Ready to start a project?</div>
              <div className="text-white/80">Let's make something amazing together</div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40">
            © 2025 Creative Portfolio. Designed & Built with passion 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
