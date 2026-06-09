import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'

const galleryItems = [
  {
    title: 'Opening Ceremony',
    caption: 'Demo stage lighting and keynote moment placeholder.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&auto=format&fit=crop&q=80'
  },
  {
    title: 'Coding Arena',
    caption: 'Demo participant work zone for technical rounds.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=700&auto=format&fit=crop&q=80'
  },
  {
    title: 'Workshop Lab',
    caption: 'Demo hands-on learning session with mentor support.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop&q=80'
  },
  {
    title: 'Project Showcase',
    caption: 'Demo product demos, hardware builds, and judging panels.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&auto=format&fit=crop&q=80'
  },
  {
    title: 'Campus Energy',
    caption: 'Demo crowd moments from inter-college participation.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=700&auto=format&fit=crop&q=80'
  },
  {
    title: 'Award Night',
    caption: 'Demo closing ceremony and winner celebration placeholder.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&auto=format&fit=crop&q=80'
  }
]

function Gallery() {
  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-marvel-red/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-marvel-red/10 border border-marvel-red/30 text-[10px] tracking-widest font-mono text-marvel-red mb-4 uppercase">
          <FaCameraRetro className="animate-pulse" />
          Visual archive
        </div>
        <h1 className="text-4xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase text-glow-red leading-none">
          GALLERY
        </h1>
        <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-2 font-bold uppercase">
          Demo media placeholders for event highlights and campus moments
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <article
            key={item.title}
            className={`glass-panel border border-white/10 hover:border-marvel-red/40 rounded-lg overflow-hidden group transition-all duration-300 ${
              index === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            <div className="relative h-64 overflow-hidden bg-space-black/60">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="font-orbitron font-black text-white text-lg uppercase tracking-wider">{item.title}</h2>
                <p className="text-[11px] text-gray-400 font-outfit leading-relaxed mt-1">{item.caption}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="glass-panel border border-white/5 p-6 rounded-lg text-center max-w-3xl mx-auto font-mono text-[9px] text-gray-500 leading-relaxed">
        Demo notice: gallery images are temporary remote placeholders. Replace these with official ASTRA X photos once available.
      </div>
    </div>
  )
}

export default Gallery
