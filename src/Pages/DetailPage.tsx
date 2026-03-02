import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { FigureData } from "../data/timelineData";
import { timelineData } from "../data/timelineData";

export function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = timelineData.find(i => i.id === Number(id));
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealedFigures, setRevealedFigures] = useState<Set<string>>(new Set());

  const toggleFigure = (figureKey: string) => {
    setRevealedFigures(prev => {
      const next = new Set(prev);
      if (next.has(figureKey)) next.delete(figureKey);
      else next.add(figureKey);
      return next;
    });
  };

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

                case 'video': {
                  const rawUrl = detail.src || detail.content || '';
                  let embedUrl = rawUrl;
                  if (rawUrl.includes('youtu.be/')) {
                    const id = rawUrl.split('youtu.be/')[1].split('?')[0];
                    embedUrl = `https://www.youtube.com/embed/${id}`;
                  } else if (rawUrl.includes('youtube.com/watch')) {
                    try {
                      const urlObj = new URL(rawUrl);
                      const v = urlObj.searchParams.get('v');
                      if (v) embedUrl = `https://www.youtube.com/embed/${v}`;
                    } catch (e) { }
                  }

                  return (
                    <div key={idx} id={`detail-${idx}`} className="my-16 scroll-mt-32">
                      <div className="relative pt-[56.25%] shadow-lg border-4 border-vintage-gold/20 bg-black/5">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={embedUrl}
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
                }
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

            {/* Render interactive figure sections */}
            {item.details.filter(d => d.type === 'figures').map((detail, figGroupIdx) => (
              <div key={`fig-group-${figGroupIdx}`} className="mt-20 mb-16">
                <h3 className="font-display text-3xl md:text-4xl text-vintage-red mt-16 mb-4 uppercase tracking-wide text-center scroll-mt-32">
                  ⭐ {detail.content}
                </h3>
                <p className="font-body text-lg text-vintage-brown/60 text-center mb-12 italic">
                  Nhìn hình ảnh và đoán xem đây là ai? Bấm vào để xem đáp án!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {detail.figures?.map((figure: FigureData, figIdx: number) => {
                    const key = `${item.id}-${figGroupIdx}-${figIdx}`;
                    const isRevealed = revealedFigures.has(key);
                    return (
                      <motion.div
                        key={key}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleFigure(key)}
                        className="cursor-pointer"
                      >
                        {/* Image card - large and clear */}
                        <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl border-3 border-vintage-gold/40 hover:border-vintage-gold hover:shadow-2xl transition-all duration-300">
                          <img
                            src={figure.image}
                            alt="Nhân vật lịch sử"
                            className="w-full h-full object-cover"
                          />

                          {/* Bottom overlay - always visible */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                            {!isRevealed ? (
                              <div className="flex items-center justify-between">
                                <span className="font-display text-xl text-white">Đây là ai?</span>
                                <span className="bg-vintage-gold text-black font-display text-sm px-4 py-2 rounded-full uppercase tracking-wider">
                                  Xem đáp án
                                </span>
                              </div>
                            ) : (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                              >
                                <h4 className="font-display text-2xl text-vintage-gold leading-tight">{figure.name}</h4>
                                <p className="font-accent text-sm text-white/70 uppercase tracking-wider mt-1">{figure.role}</p>
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {/* Info panel - expands when revealed */}
                        {isRevealed && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 p-6 bg-vintage-gold/10 border border-vintage-gold/30 rounded-xl"
                          >
                            <h5 className="font-display text-lg text-vintage-red mb-2">{figure.name} — {figure.role}</h5>
                            <p className="font-body text-base text-vintage-black/80 leading-relaxed">
                              {figure.info}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
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
