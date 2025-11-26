import { useState } from "react";
import { creatures, Creature } from "@/data/creatures";
import { CreatureCard } from "@/components/CreatureCard";
import { CreatureModal } from "@/components/CreatureModal";
import { ParallaxHero } from "@/components/ParallaxHero";
import { ParallaxDivider } from "@/components/ParallaxDivider";

const Index = () => {
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreatureClick = (creature: Creature) => {
    setSelectedCreature(creature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCreature(null), 300);
  };

  // Split creatures into categories for parallax dividers
  const firstBatch = creatures.slice(0, 6);
  const secondBatch = creatures.slice(6, 12);
  const thirdBatch = creatures.slice(12);

  return (
    <div className="min-h-screen">
      {/* Parallax Hero Section */}
      <ParallaxHero />

      {/* First Batch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstBatch.map((creature, index) => (
            <CreatureCard
              key={creature.id}
              creature={creature}
              onClick={() => handleCreatureClick(creature)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Parallax Divider */}
      <ParallaxDivider title="Guardians of the Elements" />

      {/* Second Batch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondBatch.map((creature, index) => (
            <CreatureCard
              key={creature.id}
              creature={creature}
              onClick={() => handleCreatureClick(creature)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Parallax Divider */}
      <ParallaxDivider title="Ancient Powers Unleashed" />

      {/* Third Batch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thirdBatch.map((creature, index) => (
            <CreatureCard
              key={creature.id}
              creature={creature}
              onClick={() => handleCreatureClick(creature)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <CreatureModal
        creature={selectedCreature}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
