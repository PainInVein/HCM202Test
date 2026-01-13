import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { timelineData } from "../data/timelineData";
import { useEffect, useRef } from "react";

export function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = timelineData.find(i => i.id === Number(id));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  if (!item) return <div className="h-screen flex items-center justify-center">Not Found</div>;

  const coverImage = item.details.find(d => d.type === 'image')?.src;

  return (
      <div ref={containerRef} className="relative min-h-screen bg-[#FDFBF7] text-vintage-black selection:bg-vintage-gold/30">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference text-white">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 font-display uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"
          >
            <span className="text-xl">←</span> Quay lại
          </button>
        </nav>

        {/* Hero Section */}
        <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <motion.div 
            style={{ y: headerY, opacity: headerOpacity }}
            className="relative z-10 text-center px-4 max-w-5xl"
          >
             <span className="block font-accent text-vintage-red text-xl tracking-[0.3em] mb-6 uppercase">
               Chương {item.id} • {item.year}
             </span>
             <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
               {item.title}
             </h1>
             <div className="w-24 h-1 bg-vintage-black mx-auto"></div>
          </motion.div>

          {/* Background Image Parallax */}
          {coverImage && (
             <div className="absolute inset-0 z-0">
               <div className="absolute inset-0 bg-[#FDFBF7]/60 z-10"></div>
               <img 
                 src={coverImage} 
                 className="w-full h-full object-cover grayscale opacity-40 scale-105" 
                 alt="Background" 
               />
             </div>
          )}
        </header>

        {/* Content Body */}
        <main className="relative z-20 -mt-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto bg-white shadow-2xl p-12 md:p-24 relative overflow-hidden">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 pointer-events-none mix-blend-multiply"></div>
            
            {/* Drop Cap Description */}
            <p className="font-body text-2xl md:text-3xl leading-relaxed italic text-vintage-brown/80 mb-20 text-center border-b pb-12 border-vintage-black/10">
              "{item.description}"
            </p>

            <div className="space-y-16">
              {item.details.map((detail, idx) => {
                switch (detail.type) {
                  case 'heading':
                    return (
                      <h3 key={idx} id={`detail-${idx}`} className="font-display text-3xl md:text-4xl text-vintage-red mt-16 mb-8 uppercase tracking-wide text-center scroll-mt-32">
                        {detail.content}
                      </h3>
                    );

                  case 'text':
                    return (
                      <p key={idx} id={`detail-${idx}`} className="font-body text-lg md:text-xl leading-8 text-justify text-vintage-black/90 indent-8 mb-6 scroll-mt-32">
                        {detail.content}
                      </p>
                    );

                  case 'quote':
                    return (
                      <blockquote key={idx} id={`detail-${idx}`} className="my-16 relative py-8 px-12 border-y-2 border-vintage-gold/30 scroll-mt-32">
                         <p className="font-display text-2xl md:text-3xl text-center italic text-vintage-brown">
                           “{detail.content}”
                         </p>
                      </blockquote>
                    );

                  case 'image':
                    return (
                      <figure key={idx} id={`detail-${idx}`} className="my-16 group scroll-mt-32">
                        <div className="relative overflow-hidden shadow-lg border-8 border-white bg-white rotate-1 hover:rotate-0 transition-transform duration-500">
                          <img src={detail.src} alt={detail.caption} className="w-full h-auto sepia-[0.2] group-hover:sepia-0 transition-all duration-700" />
                          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none"></div>
                        </div>
                        {detail.caption && (
                          <figcaption className="text-center font-accent text-sm tracking-widest text-vintage-brown/60 mt-4 uppercase">
                            Fig. {idx + 1} — {detail.caption}
                          </figcaption>
                        )}
                      </figure>
                    );

                  case 'video':
                    return (
                      <div key={idx} id={`detail-${idx}`} className="my-16 scroll-mt-32">
                        <div className="relative pt-[56.25%] shadow-lg border-4 border-vintage-gold/20">
                          <iframe 
                            className="absolute inset-0 w-full h-full"
                            src={detail.content}
                            title={detail.caption || "Video"}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        {detail.caption && (
                           <p className="text-center font-accent text-sm tracking-widest text-vintage-brown/60 mt-4 uppercase">
                             Video: {detail.caption}
                           </p>
                        )}
                      </div>
                    );
                  case 'link':
                    return (
                      <div key={idx} id={`detail-${idx}`} className="my-12 flex justify-center scroll-mt-32">
                        <a 
                          href={detail.content} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group relative inline-flex items-center gap-4 px-8 py-4 bg-vintage-gold/10 hover:bg-vintage-gold/20 border border-vintage-gold transition-colors duration-300 rounded-sm"
                        >
                          <span className="font-display text-xl text-vintage-brown group-hover:text-vintage-red transition-colors">
                            {detail.caption || "Xem thêm bài viết"}
                          </span>
                          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      </div>
                    );

                  default: return null;
                }
              })}
            </div>

            {/* End Mark */}
            <div className="text-center mt-32 opacity-40">
              <span className="font-display text-4xl">❦</span>
            </div>
          </div>
        </main>

        {/* Next Chapter Preview */}
        {timelineData[Number(id)] && (
          <div className="relative z-20 py-32 text-center bg-[#F1EFEA] mt-32 cursor-pointer group" onClick={() => navigate(`/detail/${Number(id) + 1}`)}>
            <p className="font-accent tracking-widest text-sm mb-4">TIẾP THEO</p>
            <h4 className="font-display text-4xl text-vintage-black group-hover:text-vintage-red transition-colors">
              {timelineData[Number(id)].title} &rarr;
            </h4>
          </div>
        )}

      </div>
  );
}
