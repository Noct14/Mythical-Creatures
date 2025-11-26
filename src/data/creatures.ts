import dragonImg from "@/assets/dragon.png";
import wyvernImg from "@/assets/wyvern.png";
import centaurImg from "@/assets/centaur.png";
import minotaurImg from "@/assets/minotaur.png";
import mermaidImg from "@/assets/mermaid.png";
import krakenImg from "@/assets/kraken.png";
import phoenixImg from "@/assets/phoenix.png";
import pegasusImg from "@/assets/pegasus.png";
import griffinImg from "@/assets/griffin.png";
import werewolfImg from "@/assets/werewolf.png";
import cyclopsImg from "@/assets/cyclops.png";
import golemImg from "@/assets/golem.png";
import fireElementalImg from "@/assets/fire-elemental.png";
import waterSpiritImg from "@/assets/water-spirit.png";
import earthGolemImg from "@/assets/earth-golem.png";

export interface Creature {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
}

export const creatures: Creature[] = [
  {
    id: "dragon",
    name: "Dragon",
    description: "Ancient winged reptiles capable of breathing fire, dragons are the most powerful and feared of all mythical creatures. They hoard treasure and possess immense magical power.",
    image: dragonImg,
    type: "Fire"
  },
  {
    id: "wyvern",
    name: "Wyvern",
    description: "A smaller cousin of the dragon with only two legs and poisonous barbed tail. Wyverns are aggressive hunters that soar through mountain ranges.",
    image: wyvernImg,
    type: "Poison"
  },
  {
    id: "centaur",
    name: "Centaur",
    description: "Half human, half horse, centaurs are known for their wisdom and skill in archery. They live in forests and are excellent warriors and scholars.",
    image: centaurImg,
    type: "Nature"
  },
  {
    id: "minotaur",
    name: "Minotaur",
    description: "A powerful creature with the body of a man and the head of a bull. Minotaurs are fierce warriors who guard ancient labyrinths.",
    image: minotaurImg,
    type: "Earth"
  },
  {
    id: "mermaid",
    name: "Mermaid",
    description: "Enchanting beings with the upper body of a human and the tail of a fish. Mermaids live in the ocean depths and possess mesmerizing voices.",
    image: mermaidImg,
    type: "Water"
  },
  {
    id: "kraken",
    name: "Kraken",
    description: "A colossal sea monster resembling a giant squid. The Kraken can drag entire ships beneath the waves with its massive tentacles.",
    image: krakenImg,
    type: "Water"
  },
  {
    id: "phoenix",
    name: "Phoenix",
    description: "A magnificent bird that bursts into flames upon death and is reborn from its own ashes. Phoenixes symbolize immortality and renewal.",
    image: phoenixImg,
    type: "Fire"
  },
  {
    id: "pegasus",
    name: "Pegasus",
    description: "A divine winged horse of pure white. Pegasus serves as a mount for heroes and can fly faster than the wind.",
    image: pegasusImg,
    type: "Air"
  },
  {
    id: "griffin",
    name: "Griffin",
    description: "Majestic creatures with the body of a lion and the head and wings of an eagle. Griffins guard treasures and are symbols of divine power.",
    image: griffinImg,
    type: "Air"
  },
  {
    id: "werewolf",
    name: "Werewolf",
    description: "Humans cursed to transform into wolf-like beasts under the full moon. Werewolves possess superhuman strength and ferocity.",
    image: werewolfImg,
    type: "Dark"
  },
  {
    id: "cyclops",
    name: "Cyclops",
    description: "Giants with a single eye in the center of their forehead. Cyclopes are master blacksmiths who forge weapons for the gods.",
    image: cyclopsImg,
    type: "Earth"
  },
  {
    id: "golem",
    name: "Golem",
    description: "An animated being crafted from clay or stone through ancient magic. Golems are tireless guardians who follow their creator's commands.",
    image: golemImg,
    type: "Earth"
  },
  {
    id: "fire-elemental",
    name: "Fire Elemental",
    description: "A living embodiment of flame and heat. Fire elementals are volatile beings of pure energy that can incinerate anything in their path.",
    image: fireElementalImg,
    type: "Fire"
  },
  {
    id: "water-spirit",
    name: "Water Spirit",
    description: "Ethereal beings formed from flowing water and mist. Water spirits can shape water at will and are guardians of rivers and springs.",
    image: waterSpiritImg,
    type: "Water"
  },
  {
    id: "earth-golem",
    name: "Earth Golem",
    description: "Massive constructs made from rock and soil. Earth golems are incredibly durable and can manipulate the ground itself.",
    image: earthGolemImg,
    type: "Earth"
  }
];
