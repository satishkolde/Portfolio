"use client"
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeaderName } from './Components/section-header-name';
import { SectionQuote } from './Components/section-quote';

const projects = [
  {
    title: 'Pathe',
    category: 'Solo',
    description: 'A personal skill-tracking application that lets users log progress, track learning time, and receive AI-powered updates about their skills and technologies.',
    image: 'https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NjE5OTUxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'FastAPI', 'MongoDB'],
  },
  {
    title: 'AI Powered Parental Control System',
    category: 'Team',
    description: 'Designed an AI model to monitor and analyze text context and sentiment to predict potential risk levels. Focuses on ethical tracking and real-time anomaly detection.',
    image: 'https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE5NTkxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'Express.js', 'MongoDB','Python'],
  },
  {
    title: 'Portfolio',
    category: 'Solo',
    description: ' bold, modern portfolio showcasing design and development work with vibrant gradients, smooth animations, and creative layouts. Built to stand out and attract potential employers with an eye-catching visual experience.',
    image: 'https://images.unsplash.com/photo-1662012061995-0cd4a7ef2d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5lb24lMjBsaWdodHN8ZW58MXx8fHwxNzYyMDMxMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js'],
  }
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <SectionHeaderName sectionName="My Work" />
          <SectionQuote qT1="Featured" qT2="Projects" />
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            A selection of projects showcasing my design and development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                //   src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Hover Buttons */}
              {hoveredIndex === index && (
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Github size={18} />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="text-white/60 mb-2">{project.category}</div>
                <h3 className="text-white text-xl mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
