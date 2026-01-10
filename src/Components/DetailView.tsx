import { motion } from "motion/react";
import type { DetailItem, TimelineItemType } from "../data/timelineData";

interface DetailViewProps {
  item: TimelineItemType;
  index: number;
  onClose: () => void;
}

export function DetailView({ item, index, onClose }: DetailViewProps) {
  const renderContent = (detail: DetailItem, idx: number) => {
    switch (detail.type) {
      case 'heading':
        return (
          <div key={idx} className="mt-12 mb-6 flex items-center gap-4">
             <div className="h-[1px] flex-1 bg-vintage-gold/30"></div>
             <h4 className="font-display font-bold text-2xl md:text-3xl text-vintage-red tracking-wide uppercase text-center">
              {detail.content}
            </h4>
            <div className="h-[1px] flex-1 bg-vintage-gold/30"></div>
          </div>
        );
      case 'image':
        return (
          <div key={idx} className="my-12">
            <figure className="relative p-2 bg-white shadow-md border border-gray-200 rotate-1 transition-transform hover:rotate-0 hover:scale-[1.01] duration-500 ease-out">
              <img 
                src={detail.src} 
                alt={detail.caption || detail.content} 
                className="w-full h-auto object-cover max-h-[60vh] sepia-[0.3]"
              />
              {detail.caption && (
                <figcaption className="text-center text-sm font-accent italic text-vintage-brown mt-3 py-2">
                  {detail.caption}
                </figcaption>
              )}
            </figure>
          </div>
        );
      case 'quote':
        return (
          <blockquote key={idx} className="my-8 p-8 bg-vintage-gold/10 border-l-4 border-vintage-gold relative">
            <span className="absolute top-2 left-2 text-4xl text-vintage-gold/40 font-serif">“</span>
            <p className="font-display text-xl md:text-2xl text-vintage-brown italic text-center relative z-10">
              {detail.content}
            </p>
            <span className="absolute bottom-2 right-2 text-4xl text-vintage-gold/40 font-serif">”</span>
          </blockquote>
        );
      default: // text
        return (
          <p key={idx} className="text-lg md:text-xl leading-8 text-vintage-black/90 font-body mb-6 text-justify indent-0 first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-vintage-gold first-letter:mt-[-5px]">
            {detail.content}
          </p>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-vintage-black/80 backdrop-blur-sm p-4 md:p-8"
    >
      <motion.div
        layoutId={`card-${item.id}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="
          relative w-full max-w-4xl max-h-full h-[90vh]
          bg-[#FDFBF7] 
          overflow-hidden
          shadow-[0_0_100px_rgba(0,0,0,0.5)]
          rounded-[4px]
          border-8 border-double border-vintage-gold/20
          flex flex-col
        "
      >
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply pointer-events-none z-0" />

        <div className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar p-8 md:p-16 lg:p-20">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-vintage-gold/50 text-vintage-brown hover:bg-vintage-gold hover:text-white transition-all z-50 bg-[#FDFBF7]"
          >
            ✕
          </button>

          {/* Header Area */}
          <div className="text-center mb-12 border-b-2 border-vintage-gold/20 pb-12">
            <span className="font-accent text-vintage-gold text-xl tracking-[0.2em] uppercase block mb-4">
              {item.year}
            </span>
            <div className="inline-block border-y border-vintage-black/10 py-2 mb-6">
               <span className="font-accent text-vintage-brown/60 text-sm tracking-widest uppercase">
                 Chương {index + 1}
               </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-vintage-black mb-6 leading-none">
              {item.title}
            </h1>
            <p className="font-body text-xl md:text-2xl text-vintage-brown/80 italic max-w-2xl mx-auto leading-relaxed">
              "{item.description}"
            </p>
          </div>

          {/* Content Body */}
          <div className="max-w-3xl mx-auto pb-12">
            {item.details.map((detail, idx) => renderContent(detail, idx))}
          </div>

          {/* Footer Decoration */}
          <div className="mt-12 flex flex-col items-center justify-center opacity-40 gap-4">
            <div className="w-1/2 h-[1px] bg-vintage-black"></div>
            <span className="font-display text-2xl text-vintage-black">❦</span>
          </div>
          
        </div>
      </motion.div>
    </motion.div>
  );
}