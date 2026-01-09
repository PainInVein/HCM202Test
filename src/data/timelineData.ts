export type TimelineItemType = {
  year: string;
  title: string;
  description: string;
  fullContent?: string;
};

export const timelineData: TimelineItemType[] = [
  {
    year: "Ancient Times",
    title: "The Birth of Civilization",
    description: "Early human societies develop agriculture, writing systems, and the first cities.",
    fullContent: "The birth of civilization marks one of humanity's greatest achievements. Around 3500 BCE, the first cities emerged in Mesopotamia...",
  },
  {
    year: "500 BCE",
    title: "Classical Era",
    description: "Golden ages of Greece and Rome bring philosophy, democracy, and monumental architecture.",
    fullContent: "The Classical Era represents a golden age of human achievement. In Ancient Greece, philosophers like Socrates, Plato...",
  },
  {
    year: "Middle Ages",
    title: "Feudalism and Faith",
    description: "Europe enters the medieval period with knights, castles, and the rise of Christianity.",
    fullContent: "The Middle Ages (500-1500 CE) saw profound transformations across Europe, Asia, and Africa...",
  },
  {
    year: "1500s",
    title: "Renaissance & Exploration",
    description: "A rebirth of art and science in Europe, alongside the Age of Discovery.",
    fullContent: "The Renaissance (14th-17th centuries) marked a rebirth of classical learning and humanistic values...",
  },
  {
    year: "1789",
    title: "Revolutions",
    description: "The French Revolution and Industrial Revolution transform politics and society.",
    fullContent: "1789 marked the beginning of revolutionary change that would reshape the modern world...",
  },
  {
    year: "20th Century",
    title: "World Wars & Beyond",
    description: "Two global conflicts, the Cold War, and the dawn of the digital era.",
    fullContent: "The 20th century was an era of unprecedented change, conflict, and progress. Two World Wars reshaped global politics...",
  },
];