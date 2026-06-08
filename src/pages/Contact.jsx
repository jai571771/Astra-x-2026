import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { coordinatorsData } from '../data/coordinators'
import ContactCard from '../components/ContactCard/ContactCard'
import { FaPaperPlane, FaInstagram, FaLinkedinIn, FaEnvelope, FaFingerprint } from 'react-icons/fa'

const GAUNTLET_IMG = 'https://images.unsplash.com/photo-1608889174637-3c44f6326f1c?w=500&auto=format&fit=crop&q=80' // Iron-Man Nano Gauntlet glowing mockup
const SUNSET_BG = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80' // Golden-Orange fluid gradient curves


function Contact() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [formStatus, setFormStatus] = useState(null) // 'success' or 'error'
  const [isSnapped, setIsSnapped] = useState(false)
  const [snapText, setSnapText] = useState('')

  // Handle Thanos Snap Interaction
  const handleSnap = () => {
    if (isSnapped) return; // Prevent double snap
    setIsSnapped(true)
    setSnapText("Thanos snapped his fingers! Disintegrating communication channels...")
    
    // Play a mock sound/alert effect after a delay
    setTimeout(() => {
      setSnapText("Perfect balance restored. 50% of your input fields have turned to dust. Re-assembling timeline in 5 seconds...")
    }, 1500)

    // Reset snap state after 6 seconds
    setTimeout(() => {
      setIsSnapped(false)
      setSnapText('')
    }, 6500)
  }

  // Handle EmailJS Form Submission
  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setFormStatus(null)

    // We use standard template setup or mock success if credentials are not ready
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_mock'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_mock'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'key_mock'

    if (serviceId === 'service_mock') {
      // Mock submission for presentation/testing
      setTimeout(() => {
        setLoading(false)
        setFormStatus('success')
        formRef.current.reset()
      }, 1200)
    } else {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          setLoading(false)
          setFormStatus('success')
          formRef.current.reset()
        }, (error) => {
          console.error(error)
          setLoading(false)
          setFormStatus('error')
        })
    }
  }

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Sunset/orange horizon background overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat opacity-25 mix-blend-screen"
        style={{ backgroundImage: `url(${SUNSET_BG})` }}
      ></div>

      {/* Header */}
      <div className="text-center relative z-10">
        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.2em] font-orbitron text-gray-400 mb-2 uppercase">
          Transmission terminal
        </span>
        <h1 className="text-3xl md:text-5xl font-black font-orbitron tracking-tight text-white uppercase text-glow-red leading-none">
          CONTACTS
        </h1>
      </div>

      {/* Main Grid: Left (Coordinators & Form) - Right (Infinity Gauntlet) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Columns (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Coordinator Grid */}
          <div className="space-y-4">
            <h3 className="font-orbitron font-black text-xs text-gray-400 tracking-widest uppercase">
              COORDINATOR DETAILS
            </h3>
            
            <div className="space-y-3">
              <p className="text-[10px] font-mono text-gray-500 font-bold uppercase">S.H.I.E.L.D. COMMAND STAFF</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coordinatorsData.staff.map((c, i) => (
                  <ContactCard key={i} contact={c} />
                ))}
              </div>

              <p className="text-[10px] font-mono text-gray-500 font-bold uppercase pt-2">STUDENT INITIATORS</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coordinatorsData.students.map((c, i) => (
                  <ContactCard key={i} contact={c} />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Container with snap animation class */}
          <div className={`space-y-4 ${isSnapped ? 'animate-snap' : ''}`}>
            <h3 className="font-orbitron font-black text-xs text-gray-400 tracking-widest uppercase">
              TRANSMIT LOG QUERY
            </h3>

            <form 
              ref={formRef} 
              onSubmit={sendEmail} 
              className="glass-panel border border-white/10 rounded-lg p-6 space-y-4 shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-orbitron font-bold text-gray-400 tracking-wider uppercase">Your Codename</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    placeholder="e.g. Stark Cadet"
                    className="w-full px-3 py-2 bg-space-black/80 border border-white/10 rounded focus:border-marvel-red focus:outline-none text-xs font-outfit text-white placeholder-gray-600"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-orbitron font-bold text-gray-400 tracking-wider uppercase">S.H.I.E.L.D. Comm Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    placeholder="e.g. cadet@shield.gov"
                    className="w-full px-3 py-2 bg-space-black/80 border border-white/10 rounded focus:border-marvel-red focus:outline-none text-xs font-outfit text-white placeholder-gray-600"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-orbitron font-bold text-gray-400 tracking-wider uppercase">Transmission Data</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Type your encrypted message to command..."
                  className="w-full px-3 py-2 bg-space-black/80 border border-white/10 rounded focus:border-marvel-red focus:outline-none text-xs font-outfit text-white placeholder-gray-600 resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                {/* Status indicator messages */}
                {formStatus === 'success' && (
                  <p className="text-[10px] font-mono text-green-400 uppercase tracking-widest animate-pulse">
                    ✓ SECURE BEACON CONNECTED
                  </p>
                )}
                {formStatus === 'error' && (
                  <p className="text-[10px] font-mono text-marvel-red uppercase tracking-widest animate-pulse">
                    ✗ TRANSMISSION FAILURE // KEY ERROR
                  </p>
                )}
                <span></span>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded bg-marvel-red hover:bg-marvel-red/80 font-orbitron font-bold text-[10px] tracking-widest text-white transition-all duration-300 flex items-center gap-1.5 hover:scale-105 cursor-pointer disabled:opacity-50 shadow-md"
                >
                  {loading ? 'TRANSMITTING...' : 'SEND BEACON'}
                  <FaPaperPlane size={9} />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Right Column: Infinity Gauntlet (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 text-center space-y-6">
          <div className="relative group max-w-[320px]">
            {/* Pulsing ring overlay around gauntlet */}
            <div className={`absolute -inset-4 rounded-full blur-2xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity bg-gradient-to-tr from-marvel-red via-infinity-gold to-cosmic-purple ${isSnapped ? 'animate-pulse' : ''}`}></div>

            <button
              onClick={handleSnap}
              className={`relative cursor-pointer transition-transform duration-300 hover:scale-105 ${isSnapped ? 'scale-90 rotate-3' : ''}`}
              title="Click to Snap Fingers"
            >
              <img 
                src={GAUNTLET_IMG} 
                alt="Infinity Gauntlet" 
                className="w-full h-auto drop-shadow-[0_0_25px_rgba(255,215,0,0.3)] filter brightness-105 group-hover:brightness-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              
              {/* Overlay visual triggers */}
              {!isSnapped && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-space-black/20 rounded-lg">
                  <div className="bg-space-black/90 border border-infinity-gold/40 px-3 py-1.5 rounded font-orbitron font-bold text-[9px] text-infinity-gold tracking-widest flex items-center gap-1.5">
                    <FaFingerprint className="animate-pulse text-xs" />
                    SNAP TIMELINE
                  </div>
                </div>
              )}
            </button>
          </div>

          {/* Snap Status Details */}
          {snapText && (
            <div className="glass-panel border border-marvel-red/20 bg-marvel-red/5 p-4 rounded-md font-mono text-[10px] text-gray-300 max-w-xs leading-relaxed animate-pulse">
              {snapText}
            </div>
          )}

          <p className="text-[10px] text-gray-500 font-mono tracking-widest max-w-xs uppercase leading-relaxed font-bold">
            WARNING: Interacting with the Infinity Gauntlet may alter form compilation status. Snap at your own risk.
          </p>
        </div>

      </div>

      {/* Bottom Row: Social Media Glowing Pills */}
      <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-4 relative z-10">
        
        <a 
          href="mailto:info@astrax.com" 
          className="px-6 py-3 rounded-full glass-panel border border-white/10 hover:border-marvel-red hover:shadow-red-glow text-xs font-orbitron font-bold tracking-widest text-white flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <FaEnvelope className="text-marvel-red" />
          EMAIL BEACON
        </a>

        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-3 rounded-full glass-panel border border-white/10 hover:border-reactor-blue hover:shadow-blue-glow text-xs font-orbitron font-bold tracking-widest text-white flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <FaInstagram className="text-reactor-blue" />
          INSTAGRAM
        </a>

        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-3 rounded-full glass-panel border border-white/10 hover:border-cosmic-purple hover:shadow-purple-glow text-xs font-orbitron font-bold tracking-widest text-white flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <FaLinkedinIn className="text-cosmic-purple" />
          LINKEDIN
        </a>

      </div>

    </div>
  )
}

export default Contact
