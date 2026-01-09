import { motion } from "motion/react";
import type { DetailItem, TimelineItemType } from "../data/timelineData";

interface DetailViewProps {
  item: TimelineItemType;
  index: number;
  onClose: () => void;
}

export function DetailView({ item, onClose }: DetailViewProps) {
  const renderContent = (detail: DetailItem, idx: number) => {
    switch (detail.type) {
      case 'heading':
        return (
          <h4 key={idx} className="font-serif text-2xl md:text-3xl text-black mt-16 mb-8 border-l-4 border-black pl-6">
            {detail.content}
          </h4>
        );
      case 'image':
        return (
          <div key={idx} className="my-10 group">
            <div className="overflow-hidden rounded-xl shadow-xl bg-gray-100">
              <img 
                src={detail.src} 
                alt={detail.caption || detail.content} 
                className="w-full h-auto object-cover max-h-[70vh] mx-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            {detail.caption && (
              <p className="text-sm text-center text-gray-500 mt-3 italic font-serif">
                {detail.caption}
              </p>
            )}
          </div>
        );
      default: // text
        return (
          <p key={idx} className="text-lg md:text-xl leading-relaxed text-black/80 font-light mb-6 text-justify">
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
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
    >
      <motion.div
        /* Thay đổi hiệu ứng: Trượt từ dưới lên (y) hoặc từ phải sang (x) tùy bạn */
        initial={{ x: "100%" }} 
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        className="fixed inset-0 w-full h-full bg-white overflow-y-auto overflow-x-hidden z-[1001]"
      >
        {/* Container nội dung căn giữa */}
        <div className="relative min-h-screen flex flex-col max-w-5xl mx-auto p-6 md:p-12 lg:p-20">
          
          {/* close */}
          <div className="flex justify-end sticky top-6 z-50 pointer-events-none">
             <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-black/10 flex items-center justify-center text-2xl shadow-lg transition-colors"
            >
              ×
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-[-20px]" // Kéo nội dung lên một chút bù cho khoảng trống nút đóng
          >
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-4 border border-black/20 rounded-full text-sm tracking-[0.2em] uppercase text-black/60 font-semibold mb-6">
                Giai đoạn {item.year}
              </span>
              <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 text-black leading-tight">
                {item.title}
              </h3>
              <p className="text-xl md:text-2xl text-black/60 font-light italic max-w-3xl mx-auto leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Divider */}
            <div className="w-24 h-[1px] bg-black/20 mx-auto mb-16"></div>

            {/* Nội dung chi tiết */}
            <div className=" mt-8">
              {item.details.map((detail, idx) => renderContent(detail, idx))}
            </div>
            
            {/* Footer */}
            <div className="mt-24 pt-12 border-t border-black/10 text-center pb-12">
               <span className="font-serif text-xl text-black/40">Không gian văn hóa & Lịch sử Hồ Chí Minh</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}