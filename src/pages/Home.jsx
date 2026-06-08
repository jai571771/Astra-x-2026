import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import { Link } from 'react-router-dom'
import { FaGem, FaRadiation, FaUserFriends, FaCompass, FaEnvelopeOpenText, FaHistory } from 'react-icons/fa'

const INFINITY_STONES = [
  {
    name: 'Reality Stone',
    color: '#E23636',
    border: 'border-marvel-red/20 hover:border-marvel-red/60',
    icon: FaGem,
    title: 'MISSIONS (EVENTS)',
    desc: 'Compete in high-stakes web layouts, algorithms, and cybersecurity CTFs. Reshape reality with code.',
    link: '/missions'
  },
  {
    name: 'Space Stone',
    color: '#00D2FF',
    border: 'border-reactor-blue/20 hover:border-reactor-blue/60',
    icon: FaCompass,
    title: 'CONTACT DETAILS',
    desc: 'Reach out to the coordinators of S.H.I.E.L.D. or submit a query across the quantum web portals.',
    link: '/contact'
  },
  {
    name: 'Mind Stone',
    color: '#FFD700',
    border: 'border-infinity-gold/20 hover:border-infinity-gold/60',
    icon: FaRadiation,
    title: 'INNOVATION LABS',
    desc: 'Participate in hands-on Stark-tech IoT, robotics, and deep quantum AI workshops to upgrade your intellect.',
    link: '/innovation-labs'
  },
  {
    name: 'Power Stone',
    color: '#8A2BE2',
    border: 'border-cosmic-purple/20 hover:border-cosmic-purple/60',
    icon: FaUserFriends,
    title: 'COSMIC ALLIES',
    desc: 'Connect with our elite intergalactic sponsors (Stark Industries, Oscorp, Pym Tech) backing our initiatives.',
    link: '/allies'
  }
]

function Home({ selectedHero }) {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <HeroSection selectedHero={selectedHero} />

      {/* Infinity Stone Mission Grid */}
      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-wider text-glow-red text-white">
            THE SYSTEM PROTOCOLS
          </h2>
          <p className="text-xs md:text-sm font-orbitron tracking-widest text-gray-500 mt-2 font-bold uppercase">
            Map your trajectory through the event modules
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {INFINITY_STONES.map((stone, i) => {
            const Icon = stone.icon
            return (
              <div 
                key={i} 
                className={`glass-panel border rounded-lg p-6 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 relative group overflow-hidden ${stone.border}`}
              >
                {/* Stone Background Glow on hover */}
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: stone.color }}
                ></div>

                <div>
                  {/* Glowing Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center border bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ borderColor: `${stone.color}30` }}
                  >
                    <Icon className="text-xl" style={{ color: stone.color }} />
                  </div>

                  <h3 className="font-orbitron font-bold text-sm tracking-wider text-white mb-2">
                    {stone.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 font-outfit leading-relaxed">
                    {stone.desc}
                  </p>
                </div>

                <div className="mt-6">
                  <Link 
                    to={stone.link} 
                    className="font-orbitron text-[10px] tracking-widest font-bold group-hover:underline flex items-center gap-1"
                    style={{ color: stone.color }}
                  >
                    ACCESS CONSOLE &rarr;
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Assemble Section CTA */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-[#040405] text-center overflow-hidden z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,54,54,0.05),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black font-orbitron tracking-tight text-white leading-none">
            A NEW AGE OF INNOVATION <br />
            <span className="text-marvel-red text-glow-red">ASSEMBLING NOW</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-outfit max-w-lg mx-auto leading-relaxed">
            Don't face the digital void alone. Form your alliance, claim your infinity cores, and secure your place in college history.
          </p>
          <div>
            <Link 
              to="/about" 
              className="inline-block px-8 py-3 rounded-md bg-white/5 border border-white/10 hover:border-marvel-red font-orbitron text-xs font-bold tracking-widest text-white transition-all duration-300 hover:scale-105"
            >
              LEARN EVENT INTEL
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
