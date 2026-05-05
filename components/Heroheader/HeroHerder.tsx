
import Link from "next/link";
function HeroHerder() {
  return (
    <div>
      {/* HERO */}
      <main className="mt-0 md:mt-20 relative h-screen flex items-center justify-center px-4 md:px-0">
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

        <div className="relative text-center flex flex-col items-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mix-blend-difference drop-shadow-[0_0_40px_rgba(217,119,6,0.1)]">
            ONLYDUST <br /> RECORDS
          </h1>

          <p className="mt-4 md:mt-6 text-xs md:text-sm uppercase tracking-[0.3em] text-stone-400 font-mono mix-blend-difference">
            Analog soul. Modern underground.
          </p>

          <div className="mt-8 md:mt-40">
            <Link
              href="/"
              className="inline-block px-6 md:px-8 py-3 md:py-4 text-xs uppercase tracking-[0.3em] border-b border-amber-600 text-amber-500 hover:text-amber-400 transition"
            >
              Enter
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroHerder
