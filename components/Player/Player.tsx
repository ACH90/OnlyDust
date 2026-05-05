import React from 'react'

function Player() {
  return (
    <div>
        {/* MOBILE NAV */}
      <nav className="fixed bottom-0 w-full h-24 border-t border-stone-900 bg-black/80 backdrop-blur-md md:hidden flex items-center justify-between px-10 z-50 text-[10px] uppercase tracking-widest font-mono">
        <button className="flex flex-col items-center text-stone-600">
          ▶<span>Play</span>
        </button>

        <button className="flex flex-col items-center text-amber-500">
          🎶
          <span>Queue</span>
        </button>

        <button className="flex flex-col items-center text-stone-600">
          🔎
          <span>Browse</span>
        </button>
      </nav>
    </div>
  )
}

export default Player