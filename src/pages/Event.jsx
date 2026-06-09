import React, { useState } from 'react'
import { eventsData } from '../data/events'
import EventCard from '../components/EventCard/EventCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const PREVIOUS_EVENTS = [
  {
    title: "ASTRA X 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
    desc: "Demo recap: 1,200+ participants, 40+ colleges, packed tech tracks, and a full-house project showcase."
  },
  {
    title: "ASTRA X 2024",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80",
    desc: "Demo recap: coding battles, design jams, robotics demos, and inter-college collaborations."
  },
  {
    title: "ASTRA X 2023",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&auto=format&fit=crop&q=80",
    desc: "Demo recap: a fast-growing campus symposium with workshops, talks, and competitive events."
  }
]

const EVENT_BG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80'

function Event() {
  const [filter, setFilter] = useState('all')

  const filteredEvents = filter === 'all'
    ? eventsData
    : eventsData.filter(event => event.category === filter)

  return (
    <div className="w-full min-h-screen">
      <section className="relative py-16 px-4 md:px-8 border-b border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-screen"
          style={{ backgroundImage: `url(${EVENT_BG})` }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-orbitron text-gray-400 mb-2 uppercase">
              Flagship schedule
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-orbitron tracking-tight text-white uppercase text-glow-blue leading-none">
              EVENT
            </h1>
            <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-3 font-bold uppercase">
              Demo event data for competitions, showcases, and campus experiences
            </p>
          </div>

          <div className="w-full max-w-2xl px-4 md:px-0">
            <Swiper
              modules={[Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 18,
                stretch: 0,
                depth: 110,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="w-full py-8"
            >
              {PREVIOUS_EVENTS.map((item, idx) => (
                <SwiperSlide key={idx} className="w-[280px] sm:w-[350px] rounded-lg overflow-hidden glass-panel border border-white/10 flex flex-col">
                  <div className="h-44 w-full bg-space-black/50">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70" />
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-center gap-1">
                    <h3 className="font-orbitron font-bold text-xs text-white uppercase tracking-wider">{item.title}</h3>
                    <p className="text-[10px] text-gray-400 font-outfit mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white font-orbitron text-glow-red">
              LIVE EVENT LINEUP
            </h2>
            <p className="text-xs text-gray-500 font-mono tracking-widest mt-1 font-bold uppercase">
              Filter by demo category
            </p>
          </div>

          <div className="flex flex-wrap gap-2 font-orbitron">
            {['all', 'mega', 'technical', 'non-technical'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded text-[10px] font-bold tracking-widest border transition-all duration-300 ${
                  filter === cat
                    ? 'bg-marvel-red border-marvel-red text-white shadow-red-glow scale-105'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-gray-500'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
            <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">No demo events found</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Event
