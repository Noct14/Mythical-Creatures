import { useEffect, useState } from "react";

interface ParallaxDividerProps {
  title?: string;
}

export const ParallaxDivider = ({ title }: ParallaxDividerProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    const element = document.getElementById(`divider-${title}`);
    if (element) {
      setElementTop(element.offsetTop);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  const relativeScroll = scrollY - elementTop + window.innerHeight;
  const backgroundY = relativeScroll * 0.3;
  const opacity = Math.min(Math.max((relativeScroll / 500) - 0.5, 0.3), 1);

  return (
    <div id={`divider-${title}`} className="relative h-[40vh] overflow-hidden my-16">
      {/* Parallax Background */}


      {/* Content */}
      {title && (
        <div
          className="relative z-10 flex items-center justify-center h-full transition-opacity duration-300"
          style={{ opacity }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary glow-text text-center px-4">
            {title}
          </h2>
        </div>
      )}
    </div>
  );
};
