import { motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;

// ─── System prompt built from timelineData ───────────────────────────────
const SYSTEM_PROMPT = `Bạn là một chuyên gia lịch sử Đảng Cộng sản Việt Nam, chuyên sâu về giai đoạn 1945-1954 (Bảo vệ chính quyền và Kháng chiến chống Pháp). Bạn có kiến thức sâu rộng và trả lời bằng tiếng Việt, giọng văn trang trọng nhưng dễ hiểu, phù hợp với sinh viên đại học.

Dưới đây là toàn bộ kiến thức nền tảng của bạn:

═══ 1. BỐI CẢNH ĐỊA CHÍNH TRỊ (1945-1950) ═══
- Sau Cách mạng Tháng Tám 1945, nhà nước công nông đầu tiên ở Đông Nam Á ra đời
- Nền độc lập non trẻ đối mặt "ngàn cân treo sợi tóc": thù trong giặc ngoài, nạn đói, nạn dốt
- Chiến tranh Lạnh lan đến Đông Dương, biến nơi đây thành chiến trường cạnh tranh gay gắt nhất
- 2/9/1945: Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình

═══ 2. XÂY DỰNG VÀ BẢO VỆ CHÍNH QUYỀN (1945-1946) ═══
- 2/9/1945: Khai sinh nước Việt Nam Dân chủ Cộng hòa, Tuyên ngôn Độc lập xóa bỏ luật pháp thực dân phong kiến
- 23/9/1945: Pháp xâm lược lần 2, nổ súng ở Sài Gòn. Nam Bộ trở thành "Thành đồng Tổ quốc"
- 25/11/1945: Chỉ thị "Kháng chiến kiến quốc" - xác định 4 nhiệm vụ sinh tử
- 6/1/1946: Tổng tuyển cử đầu tiên, xác lập tính chính danh quốc tế
- 2/3/1946: Thành lập Chính phủ chính thức, Quốc hội khóa I
- 6/3/1946: Hiệp định Sơ bộ Việt-Pháp, sách lược "hòa để tiến", mượn tay Pháp đuổi 20 vạn quân Tưởng
- 14/9/1946: Tạm ước 14-9, nhượng bộ có tính toán để tranh thủ thời gian
- 9/11/1946: Thông qua Hiến pháp đầu tiên

Nhân vật trọng yếu:
• Hồ Chí Minh: Chủ tịch Chính phủ, kiến trúc sư ngoại giao "dĩ bất biến ứng vạn biến", ký Hiệp định Sơ bộ và Tạm ước
• Huỳnh Thúc Kháng: Quyền Chủ tịch khi Bác sang Pháp (5-10/1946), dù không phải đảng viên vẫn điều hành cương quyết
• Nguyễn Văn Tố: Chủ tịch Quốc hội khóa I, phát động "Tấc đất tấc vàng", lập Nha Bình dân học vụ, hy sinh 1947
• Phạm Văn Đồng: Trưởng phái đoàn Fontainebleau, kiên quyết bảo vệ toàn vẹn lãnh thổ

═══ 3. ĐƯỜNG LỐI KHÁNG CHIẾN TOÀN QUỐC (1946-1950) ═══
- 19/12/1946: Lời kêu gọi toàn quốc kháng chiến "Chúng ta thà hy sinh tất cả..."
- Thu Đông 1947: Chiến thắng Việt Bắc, phá sản chiến lược "đánh nhanh thắng nhanh" của Pháp (Kế hoạch Léa)
- 11/6/1948: Lời kêu gọi Thi đua ái quốc - sáng kiến kiệt xuất của Hồ Chủ tịch
- Thu Đông 1950: Chiến dịch Biên giới, phương châm "đánh điểm, diệt viện", khai thông biên giới Việt-Trung
- Đường lối: Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh

Nhân vật trọng yếu:
• Trường Chinh: Tổng Bí thư, tác giả "Kháng chiến nhất định thắng lợi" (1947), 4 trụ cột kháng chiến
• Võ Nguyên Giáp: Đại tướng đầu tiên QĐNDVN (1948), chỉ huy chiến dịch Việt Bắc 1947, Biên giới 1950

═══ 4. ĐẠI HỘI II & ĐẨY MẠNH KHÁNG CHIẾN (1951-1953) ═══
- 11-19/2/1951: Đại hội II tại Vinh Quang (Chiêm Hóa, Tuyên Quang)
- Đảng ra hoạt động công khai, lấy tên Đảng Lao động Việt Nam
- Hồ Chí Minh làm Chủ tịch Đảng, Trường Chinh làm Tổng Bí thư
- Chính cương: xã hội dân chủ nhân dân, đánh đuổi đế quốc, "người cày có ruộng"
- Quân sự: chiến dịch Hòa Bình, Tây Bắc, Thượng Lào
- 11/1953: Hội nghị TW5, Cương lĩnh ruộng đất
- 19/12/1953: Sắc lệnh Luật cải cách ruộng đất

Nhân vật: Hồ Chí Minh (Chủ tịch Đảng), Trường Chinh (Tổng Bí thư), Tôn Đức Thắng (Phó Chủ tịch nước)

═══ 5. CHIẾN DỊCH ĐIỆN BIÊN PHỦ (1953-1954) ═══
- 5/1953: Kế hoạch Nava, xây ĐBP thành "pháo đài bất khả xâm phạm"
- 9/1953: Bộ Chính trị thông qua chủ trương Đông Xuân 1953-1954
- 6/12/1953: Quyết định mở chiến dịch ĐBP, giao Võ Nguyên Giáp làm Tư lệnh
- Quyết định lịch sử chuyển từ "đánh nhanh, thắng nhanh" sang "đánh chắc, tiến chắc"
- 13/3/1954: Mở màn chiến dịch
- 7/5/1954 (17h30): Đánh chiếm hầm chỉ huy, bắt sống tướng De Castries
- 56 ngày đêm chiến đấu, 3 đợt tiến công
- "Lừng lẫy năm châu, chấn động địa cầu"

Nhân vật: Võ Nguyên Giáp (Tư lệnh), Hồ Chí Minh ("Chắc thắng mới đánh, không chắc thắng không đánh")

═══ 6. HIỆP ĐỊNH GIƠ-NE-VƠ (1954) ═══
- 8/5/1954: Khai mạc, một ngày sau chiến thắng ĐBP
- Phái đoàn do Phó Thủ tướng Phạm Văn Đồng dẫn đầu
- 21/7/1954: Ký kết Hiệp định sau 75 ngày đàm phán
- Pháp cam kết tôn trọng độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ Việt Nam
- Văn bản pháp lý quốc tế đầu tiên công nhận quyền dân tộc cơ bản

Nhân vật: Phạm Văn Đồng, Tôn Đức Thắng, Trần Phú (TBT đầu tiên, hy sinh 1931, "Hãy giữ vững chí khí chiến đấu!")

═══ QUY TẮC TRẢ LỜI ═══
1. Chỉ trả lời các vấn đề liên quan đến lịch sử Đảng CSVN giai đoạn 1945-1954
2. Nếu câu hỏi ngoài phạm vi, lịch sự từ chối và gợi ý hỏi về giai đoạn 1945-1954
3. Trích dẫn sự kiện chính xác (ngày tháng, tên nhân vật, chi tiết)
4. Giọng văn trang trọng, dễ hiểu, phù hợp sinh viên đại học
5. Có thể sử dụng emoji phù hợp để sinh động hơn
6. Trả lời ngắn gọn, trọng tâm, tránh lan man
7. Khi nói về nhân vật, nêu rõ vai trò và đóng góp cụ thể`;

// ─── Types ───────────────────────────────────────────────────────────────
interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

// ─── Chat Page Component ─────────────────────────────────────────────────
export function ChatPage() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: 'Chào bạn! 🎓 Tôi là trợ lý AI chuyên về **Lịch sử Đảng Cộng sản Việt Nam giai đoạn 1945-1954**. Hãy hỏi tôi bất kỳ điều gì về:\n\n• Bối cảnh lịch sử sau Cách mạng Tháng Tám\n• Xây dựng và bảo vệ chính quyền (1945-1946)\n• Đường lối kháng chiến toàn quốc\n• Đại hội II & Cải cách ruộng đất\n• Chiến dịch Điện Biên Phủ\n• Hiệp định Giơ-ne-vơ 1954\n\nBạn muốn tìm hiểu về chủ đề nào?',
            timestamp: new Date(),
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Auto-scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Call Gemini API
    const callGemini = useCallback(async (userMessage: string): Promise<string> => {

        const conversationHistory = messages
            .filter(m => m.id !== 'welcome')
            .map(m => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.content }]
            }));

        const body = {
            system_instruction: {
                parts: [{ text: SYSTEM_PROMPT }]
            },
            contents: [
                ...conversationHistory,
                { role: 'user', parts: [{ text: userMessage }] }
            ],
            generationConfig: {
                temperature: 0.7,
                topP: 0.9,
                maxOutputTokens: 2048,
            }
        };

        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            }
        );

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            if (res.status === 400 || res.status === 403) {
                return '❌ API Key không hợp lệ hoặc hết hạn. Vui lòng kiểm tra lại.';
            }
            return `❌ Lỗi API (${res.status}): ${err?.error?.message || 'Unknown error'}`;
        }

        const data = await res.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Xin lỗi, tôi không thể trả lời lúc này.';
    }, [messages]);

    // Send message
    const handleSend = useCallback(async () => {
        const text = input.trim();
        if (!text || isLoading) return;

        const userMsg: Message = {
            id: `user-${Date.now()}`,
            role: 'user',
            content: text,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await callGemini(text);
            const aiMsg: Message = {
                id: `ai-${Date.now()}`,
                role: 'assistant',
                content: response,
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, aiMsg]);
        } catch {
            setMessages(prev => [...prev, {
                id: `err-${Date.now()}`,
                role: 'assistant',
                content: '❌ Đã xảy ra lỗi kết nối. Vui lòng thử lại.',
                timestamp: new Date(),
            }]);
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading, callGemini]);

    // Enter to send
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Quick questions
    const quickQuestions = [
        "Ý nghĩa của Tuyên ngôn Độc lập 2/9/1945?",
        "Tại sao phải ký Hiệp định Sơ bộ 6/3/1946?",
        "Chiến dịch Điện Biên Phủ diễn ra như thế nào?",
        "Vai trò của Đại tướng Võ Nguyên Giáp?",
    ];

    return (
        <div className="min-h-screen bg-vintage-cream flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-vintage-cream/95 backdrop-blur-md border-b border-vintage-gold/20 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate('/')}
                            className="w-10 h-10 rounded-full bg-vintage-gold/10 hover:bg-vintage-gold/20 flex items-center justify-center transition-colors border border-vintage-gold/20"
                        >
                            <span className="text-vintage-brown text-lg">←</span>
                        </button>
                        <div>
                            <h1 className="font-display text-lg text-vintage-red leading-tight">
                                Trợ Lý AI Lịch Sử
                            </h1>
                            <p className="font-accent text-[10px] uppercase tracking-widest text-vintage-brown/50">
                                Lịch sử Đảng CSVN • 1945-1954
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Messages Area */}
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">

                    {/* Quick questions - show only if < 2 messages */}
                    {messages.length <= 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4"
                        >
                            {quickQuestions.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setInput(q); inputRef.current?.focus(); }}
                                    className="text-left px-4 py-3 rounded-xl border border-vintage-gold/20 bg-white hover:bg-vintage-gold/5 hover:border-vintage-gold/40 transition-all font-body text-sm text-vintage-brown/80"
                                >
                                    💡 {q}
                                </button>
                            ))}
                        </motion.div>
                    )}

                    {/* Messages */}
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[85%] md:max-w-[75%] ${msg.role === 'user'
                                ? 'bg-vintage-red text-white rounded-2xl rounded-br-sm px-5 py-3 shadow-md'
                                : 'bg-white border border-vintage-gold/15 rounded-2xl rounded-bl-sm px-5 py-4 shadow-sm'
                                }`}>
                                {msg.role === 'assistant' && (
                                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-vintage-gold/10">
                                        <span className="text-base">🎓</span>
                                        <span className="font-display text-xs text-vintage-red uppercase tracking-wider">Trợ lý AI</span>
                                    </div>
                                )}
                                <div className={`font-body text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user' ? '' : 'text-vintage-black/85 chat-markdown'
                                    }`}
                                    dangerouslySetInnerHTML={{
                                        __html: msg.role === 'assistant' ? formatMarkdown(msg.content) : msg.content
                                    }}
                                />
                                <div className={`text-[10px] mt-2 ${msg.role === 'user' ? 'text-white/50' : 'text-vintage-brown/30'
                                    }`}>
                                    {msg.timestamp.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Loading indicator */}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                        >
                            <div className="bg-white border border-vintage-gold/15 rounded-2xl rounded-bl-sm px-5 py-4 shadow-sm">
                                <div className="flex items-center gap-2 mb-2 pb-2 border-b border-vintage-gold/10">
                                    <span className="text-base">🎓</span>
                                    <span className="font-display text-xs text-vintage-red uppercase tracking-wider">Trợ lý AI</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-vintage-gold/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-2 h-2 rounded-full bg-vintage-gold/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-2 h-2 rounded-full bg-vintage-gold/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                    <span className="font-body text-xs text-vintage-brown/40 italic">Đang suy nghĩ...</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                </div>
            </main>

            {/* Input Area */}
            <footer className="sticky bottom-0 bg-vintage-cream/95 backdrop-blur-md border-t border-vintage-gold/20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="max-w-4xl mx-auto px-4 py-3">
                    <div className="flex gap-2 items-end">
                        <div className="flex-1 relative">
                            <textarea
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Hỏi về lịch sử Đảng CSVN (1945-1954)..."
                                rows={1}
                                className="w-full resize-none px-4 py-3 pr-12 rounded-xl border border-vintage-gold/30 bg-white font-body text-sm focus:outline-none focus:border-vintage-gold focus:ring-2 focus:ring-vintage-gold/10 transition-all"
                                style={{ maxHeight: '120px' }}
                                onInput={(e) => {
                                    const t = e.target as HTMLTextAreaElement;
                                    t.style.height = 'auto';
                                    t.style.height = Math.min(t.scrollHeight, 120) + 'px';
                                }}
                            />
                        </div>
                        <button
                            onClick={handleSend}
                            disabled={!input.trim() || isLoading}
                            className="h-[46px] w-[46px] rounded-xl bg-vintage-red hover:bg-vintage-red/90 disabled:bg-vintage-brown/20 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg disabled:shadow-none"
                        >
                            {isLoading ? (
                                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <p className="font-body text-[10px] text-vintage-brown/30 text-center mt-2">
                        Powered by Google Gemini • Nội dung chỉ mang tính tham khảo
                    </p>
                </div>
            </footer>
        </div>
    );
}

// ─── Simple markdown formatter ───────────────────────────────────────────
function formatMarkdown(text: string): string {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^### (.*$)/gm, '<h4 class="font-display text-base text-vintage-red mt-3 mb-1">$1</h4>')
        .replace(/^## (.*$)/gm, '<h3 class="font-display text-lg text-vintage-red mt-4 mb-1">$1</h3>')
        .replace(/^# (.*$)/gm, '<h2 class="font-display text-xl text-vintage-red mt-4 mb-2">$1</h2>')
        .replace(/^[•\-] (.*$)/gm, '<div class="flex gap-2 ml-1"><span class="text-vintage-gold">•</span><span>$1</span></div>')
        .replace(/\n/g, '<br/>');
}
