import React, { useState, useEffect } from 'react'

function Countdown({ targetDate = '2026-08-15T09:00:00', accentColor = '#E23636' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      let newTimeLeft = {}

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isOver: false
        }
      } else {
        newTimeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isOver: true
        }
      }
      setTimeLeft(newTimeLeft)
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds }
  ]

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {timeLeft.isOver ? (
        <div className="font-orbitron font-bold text-2xl text-glow-red text-marvel-red tracking-widest animate-pulse">
          ASTRA X IS LIVE
        </div>
      ) : (
        <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
          {timeBlocks.map((block, i) => (
            <div 
              key={i} 
              className="w-20 h-24 md:w-28 md:h-32 flex flex-col justify-center items-center rounded-lg border bg-space-black/80 backdrop-blur-md relative overflow-hidden group shadow-lg"
              style={{ borderColor: `${accentColor}25` }}
            >
              {/* Top/Bottom divider styling */}
              <div className="absolute top-0 left-0 w-full h-[1px]" style={{ backgroundColor: `${accentColor}80` }}></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ backgroundColor: `${accentColor}30` }}></div>
              
              {/* Corner decorative bracket designs */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l" style={{ borderColor: accentColor }}></span>
              <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r" style={{ borderColor: accentColor }}></span>
              <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l" style={{ borderColor: accentColor }}></span>
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r" style={{ borderColor: accentColor }}></span>

              <span className="font-orbitron font-black text-2xl md:text-4xl tracking-tighter text-white animate-hologram">
                {String(block.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] md:text-[10px] font-orbitron tracking-widest text-gray-500 mt-2 font-bold">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Countdown
