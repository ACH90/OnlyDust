import HeroHerder from "@/components/Heroheader/HeroHerder";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen text-white antialiased overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="texture-overlay" />
      <div className="grain-overlay" />

      <HeroHerder/>

      
    </main>
  );
}
