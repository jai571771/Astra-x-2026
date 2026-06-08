import React, { useState } from 'react'
import { eventsData } from '../data/events'
import EventCard from '../components/EventCard/EventCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const PREVIOUS_EVENTS = [
  {
    title: "Astra X 2025: Stark Hackathon",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
    desc: "150+ teams assembled to engineer real-world systems in 24 hours."
  },
  {
    title: "Astra X 2024: Cyber Warfare",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&auto=format&fit=crop&q=80",
    desc: "An intense red-vs-blue CTF challenge testing server security."
  },
  {
    title: "Astra X 2023: Multiverse Coding",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80",
    desc: "Algorithmic showdown breaking compilation records."
  }
]

const SPIDERMAN_IMG = 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=80' // Cinematic Spider-Man
const DRSTRANGE_IMG = 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=80' // Glowing mystic portal swirls
const ROCKS_BG = 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=1200&auto=format&fit=crop&q=80' // Floating cosmic stellar rocks


function Missions() {
  const [filter, setFilter] = useState('all')

  const filteredEvents = filter === 'all'
    ? eventsData
    : eventsData.filter(event => event.category === filter)

  return (
    <div className="w-full min-h-screen">
      
      {/* Previous Events Slider Section with Spider-Man & Dr Strange */}
      <section className="relative py-16 px-4 md:px-8 border-b border-white/5 overflow-hidden">
        {/* Portal/Rocks background overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-screen"
          style={{ backgroundImage: `url(${ROCKS_BG})` }}
        ></div>
        
        {/* Floating Spider-Man - Left */}
        <div className="hidden lg:block absolute left-4 xl:left-10 top-16 w-[220px] xl:w-[280px] z-20 pointer-events-none animate-float">
          <img 
            src={SPIDERMAN_IMG} 
            alt="Spider-Man swinging"
            className="w-full h-auto drop-shadow-[0_0_15px_rgba(226,54,54,0.4)]"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Floating Doctor Strange - Right */}
        <div className="hidden lg:block absolute right-4 xl:right-10 bottom-16 w-[220px] xl:w-[280px] z-20 pointer-events-none animate-float-delayed">
          <img 
            src={DRSTRANGE_IMG} 
            alt="Doctor Strange casting magic"
            className="w-full h-auto drop-shadow-[0_0_15px_rgba(255,159,0,0.4)]"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-orbitron text-gray-400 mb-2 uppercase">
              Operational History
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-orbitron tracking-tight text-white uppercase text-glow-blue leading-none">
              PREVIOUS EVENTS
            </h2>
          </div>

          {/* Swiper.js Slider */}
          <div className="w-full max-w-2xl px-4 md:px-0">
            <Swiper
              modules={[Pagination, Autoplay, EffectCoverflow]}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
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
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover opacity-70"
                    />
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

      {/* Active Missions (Events) Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white font-orbitron text-glow-red">
              ACTIVE MISSIONS
            </h2>
            <p className="text-xs text-gray-500 font-mono tracking-widest mt-1 font-bold uppercase">
              Operational Protocols: Select a category to filter
            </p>
          </div>

          {/* Filter Bar */}
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

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
            <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">No Active Timelines Found</p>
          </div>
        )}
      </section>

      {/* Spider-Man and Dr Strange details for mobile overlay */}
      <div className="lg:hidden flex justify-between px-6 py-4 opacity-10 border-t border-white/5">
        <img src={SPIDERMAN_IMG} alt="" className="w-16 h-auto" />
        <img src={DRSTRANGE_IMG} alt="" className="w-16 h-auto" />
      </div>
    </div>
  )
}

export default Missions
