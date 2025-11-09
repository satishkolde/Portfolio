"use client"
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">

            {/* Main Heading */}
            <div>
              <div className="text-white/50 mb-4">Hello, I'm</div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4">
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Satish
                </span>
                <span className="block text-white mt-2">Kolde</span>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl">
              Building meaningful digital experiences through clean code and creative thinking. Software Engineer at <span className="text-white">Zebra Technology</span>, open to new opportunities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center gap-3 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                download="Satish_Kolde_Resumre.pdf"
                href="/Resume.pdf"
                className="px-8 py-4 rounded-full border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-3"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-white/40">Connect:</span>
              {[
                { icon: Github, href: SocialLinks["Github"] },
                { icon: Linkedin, href: SocialLinks["LinkedIn"] },
                { icon: Mail, href: `mailto:${SocialLinks["Mail"]}` },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    target="_blank"
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square">
              {/* Glowing Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-20 blur-3xl animate-pulse" />
              
              {/* Center Content */}
              <div className="relative h-full rounded-3xl border brightness-75 filter contrast-95 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img src="/profile_pic.jpg" className="w-full h-full object-top object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}