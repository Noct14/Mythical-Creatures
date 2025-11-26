import { Card } from "@/components/ui/card";
import { Creature } from "@/data/creatures";
import { Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CreatureCardProps {
  creature: Creature;
  onClick: () => void;
  index: number;
}

export const CreatureCard = ({ creature, onClick, index }: CreatureCardProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Card
        onClick={onClick}
        className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl magical-border bg-gradient-to-br from-card to-secondary"
      >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 flex flex-col items-center text-center space-y-4">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <img
            src={creature.image}
            alt={creature.name}
            className="relative w-24 h-24 object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {creature.name}
          </h3>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            <span>{creature.type}</span>
          </div>
        </div>
      </div>
    </Card>
    </div>
  );
};
