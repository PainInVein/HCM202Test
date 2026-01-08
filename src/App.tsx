import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  fullContent?: string;
};

const timelineData: TimelineItem[] = [
  {
    year: "Ancient Times",
    title: "The Birth of Civilization",
    description:
      "Early human societies develop agriculture, writing systems, and the first cities in Mesopotamia, Egypt, and the Indus Valley.",
    fullContent:
      "The birth of civilization marks one of humanity's greatest achievements. Around 3500 BCE, the first cities emerged in Mesopotamia (modern-day Iraq), where the Sumerians developed cuneiform writing, the wheel, and sophisticated irrigation systems. Simultaneously, Ancient Egypt rose along the Nile River, creating monumental architecture like the pyramids and developing hieroglyphic writing. In the Indus Valley (present-day Pakistan and India), the Harappan civilization built planned cities with advanced drainage systems. These early civilizations laid the foundation for mathematics, astronomy, law, and governance that would shape human progress for millennia.",
  },
  {
    year: "500 BCE",
    title: "Classical Era",
    description:
      "Golden ages of Greece and Rome bring philosophy, democracy, monumental architecture, and the foundations of Western law.",
    fullContent:
      "The Classical Era represents a golden age of human achievement. In Ancient Greece, philosophers like Socrates, Plato, and Aristotle established the foundations of Western philosophy, while city-states like Athens pioneered democracy—rule by the people. Greek artists and architects created timeless masterpieces, from the Parthenon to classical sculpture. The Roman Republic and later Empire unified vast territories under a sophisticated legal system, built magnificent aqueducts and roads that connected Europe, and created a cultural legacy that would influence Western civilization for centuries. Roman law, engineering, and governance principles remain relevant today.",
  },
  {
    year: "Middle Ages",
    title: "Feudalism and Faith",
    description:
      "Europe enters the medieval period with knights, castles, the rise of Christianity, and the spread of Islam across vast territories.",
    fullContent:
      "The Middle Ages (500-1500 CE) saw profound transformations across Europe, Asia, and Africa. Feudalism emerged as the dominant social and economic system in Europe, with lords, vassals, and serfs creating a hierarchical society centered around castles and manors. Christianity became the unifying force of medieval Europe, inspiring magnificent Gothic cathedrals and monastic scholarship that preserved classical knowledge. Meanwhile, the Islamic Golden Age flourished, with scholars in Baghdad, Córdoba, and Cairo making groundbreaking advances in mathematics, medicine, astronomy, and philosophy. Trade routes like the Silk Road connected distant civilizations, facilitating cultural exchange and economic growth across continents.",
  },
  {
    year: "1500s",
    title: "Renaissance & Exploration",
    description:
      "A rebirth of art and science in Europe, alongside the Age of Discovery that connects the world through voyages and trade.",
    fullContent:
      "The Renaissance (14th-17th centuries) marked a rebirth of classical learning and humanistic values. Artists like Leonardo da Vinci, Michelangelo, and Raphael created masterpieces that elevated art to new heights, while thinkers challenged medieval dogma. The invention of the printing press democratized knowledge. Simultaneously, the Age of Exploration transformed the world: Christopher Columbus's voyages, Vasco da Gama's route to India, and Magellan's circumnavigation connected continents for the first time. This global exchange—the Columbian Exchange—introduced new foods, ideas, and cultures to every corner of the world, but also brought colonization, disease, and exploitation that would reshape global power dynamics.",
  },
  {
    year: "1789",
    title: "Revolutions",
    description:
      "The French Revolution and Industrial Revolution transform politics, society, and technology, ushering in the modern age.",
    fullContent:
      "1789 marked the beginning of revolutionary change that would reshape the modern world. The French Revolution overthrew absolute monarchy, introducing revolutionary ideals of liberty, equality, and fraternity that inspired democratic movements worldwide. Meanwhile, the Industrial Revolution, beginning in Britain, transformed human existence through steam power, mechanization, and mass production. Factories replaced workshops, railways connected nations, and urbanization reshaped societies. These twin revolutions—political and industrial—created the modern nation-state, capitalism, the working class, and set the stage for global expansion. The 19th century saw these forces spread across Europe, America, and eventually the world, fundamentally altering how humans lived, worked, and governed themselves.",
  },
  {
    year: "20th Century",
    title: "World Wars & Beyond",
    description:
      "Two global conflicts, the Cold War, decolonization, technological leaps, and the dawn of the digital era shape our world today.",
    fullContent:
      "The 20th century was an era of unprecedented change, conflict, and progress. Two World Wars reshaped global politics, killing millions and redrawing borders. The Cold War divided the world into competing ideologies for decades. Decolonization movements liberated nations across Africa, Asia, and the Middle East from colonial rule. Technological breakthroughs transformed daily life: aviation made the world smaller, nuclear energy promised power but brought existential threats, medical advances extended lifespans, and space exploration reached beyond Earth. The century's end saw the digital revolution begin, with computers, the internet, and mobile technology creating our interconnected modern world—a legacy that continues to evolve in the 21st century.",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Map vertical wheel to horizontal scrolling for the timeline rail
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      const hasVerticalIntent = Math.abs(event.deltaY) > Math.abs(event.deltaX);
      if (hasVerticalIntent) {
        event.preventDefault();
        el.scrollBy({
          left: event.deltaY * 1.2,
          behavior: "smooth",
        });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Manage body scroll when detail is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.classList.add("detail-open");
    } else {
      document.body.classList.remove("detail-open");
    }
    return () => {
      document.body.classList.remove("detail-open");
    };
  }, [activeIndex]);

  // Allow closing the detail view with Escape
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeItem = useMemo(
    () => (activeIndex !== null ? timelineData[activeIndex] : null),
    [activeIndex]
  );

  return (
    <main className="page">
      <section className="events-section">
        <motion.div
          className="events-rail"
          ref={scrollRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {timelineData.map((item, index) => (
            <motion.button
              key={item.year}
              className={`event-card ${
                activeIndex === index ? "is-active" : ""
              }`}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveIndex(index)}
              layoutId={`card-${index}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                opacity: { duration: 0.6, delay: index * 0.1 },
                x: { duration: 0.6, delay: index * 0.1 },
                scale: { duration: 0.15, ease: "easeOut" },
                y: { duration: 0.15, ease: "easeOut" },
              }}
            >
              <div className="card-content">
                <span className="card-year">{item.year}</span>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-description">{item.description}</p>
                <span className="card-cta">Explore →</span>
              </div>
              <div className="card-background"></div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      <AnimatePresence mode="wait">
        {activeItem && activeIndex !== null && (
          <motion.div
            key={`detail-${activeIndex}`}
            className="detail-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="detail-page"
              layoutId={`card-${activeIndex}`}
              initial={{
                opacity: 0,
                rotateY: -90,
                scale: 0.8,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
                x: "-50%",
                y: "-50%",
              }}
              exit={{
                opacity: 0,
                rotateY: 90,
                scale: 0.8,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.6,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="detail-content">
                <div className="detail-header">
                  <motion.span
                    className="detail-year"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {activeItem.year}
                  </motion.span>
                  <motion.button
                    className="detail-close"
                    onClick={() => setActiveIndex(null)}
                    aria-label="Close detail"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ×
                  </motion.button>
                </div>
                <motion.h3
                  className="detail-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {activeItem.title}
                </motion.h3>
                <motion.p
                  className="detail-copy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {activeItem.fullContent || activeItem.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
