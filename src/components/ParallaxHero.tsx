import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const backgroundY = scrollY * 0.5;
  const textY = scrollY * 0.3;
  const opacity = Math.max(1 - scrollY / 500, 0);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${backgroundY}px)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Foreground Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-100 ease-out"
        style={{
          transform: `translateY(${textY}px)`,
          opacity: opacity,
        }}
      >
        <div className="space-y-6 animate-in fade-in duration-1000">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-12 h-12 text-primary animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary glow-text">
              Mythical Creatures
            </h1>
            <Sparkles className="w-12 h-12 text-primary animate-pulse" />
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto font-light">
            Journey through the realms of ancient magic and legendary beasts
          </p>

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 text-muted-foreground animate-bounce">
              <span className="text-sm tracking-wider">Scroll to explore</span>
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
};
