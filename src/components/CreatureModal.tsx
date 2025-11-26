import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Creature } from "@/data/creatures";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreatureModalProps {
  creature: Creature | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CreatureModal = ({ creature, isOpen, onClose }: CreatureModalProps) => {
  if (!creature) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-2 border-primary/30 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-serif text-primary glow-text">
            {creature.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl" />
              <img
                src={creature.image}
                alt={creature.name}
                className="relative w-64 h-64 object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-accent">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg font-semibold">Type: {creature.type}</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-base">
              {creature.description}
            </p>
          </div>
        </div>
        
        <div className="flex justify-end pt-4">
          <Button 
            onClick={onClose}
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
          >
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
