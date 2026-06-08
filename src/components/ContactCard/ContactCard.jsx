import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaUserShield } from 'react-icons/fa'

function ContactCard({ contact }) {
  return (
    <div className="glass-panel border border-white/5 hover:border-marvel-red/30 rounded-lg p-5 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 group shadow-sm">
      
      {/* Profile Avatar */}
      <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10 bg-white/5 flex-shrink-0 relative group-hover:border-marvel-red/40 transition-colors">
        <img 
          src={contact.avatar} 
          alt={contact.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Hide broken image, show default icon
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-marvel-red/60 transition-colors z-0">
          <FaUserShield size={20} />
        </div>
      </div>

      {/* Info details */}
      <div className="flex-grow min-w-0 space-y-1">
        <h4 className="font-orbitron font-bold text-xs text-white truncate tracking-wider group-hover:text-marvel-red transition-colors duration-300">
          {contact.name}
        </h4>
        <p className="text-[10px] text-gray-500 font-outfit truncate uppercase font-semibold">
          {contact.role}
        </p>

        {/* Contact links */}
        <div className="flex items-center gap-4 pt-1 text-[10px] font-mono text-gray-400">
          <a 
            href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <FaPhoneAlt size={9} className="text-marvel-red" />
            <span className="truncate">{contact.phone}</span>
          </a>
          <a 
            href={`mailto:${contact.email}`} 
            className="hidden sm:flex items-center gap-1 hover:text-white transition-colors"
          >
            <FaEnvelope size={9} className="text-reactor-blue" />
            <span className="truncate">{contact.email}</span>
          </a>
        </div>
      </div>

    </div>
  )
}

export default ContactCard
