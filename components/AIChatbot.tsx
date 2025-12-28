
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { COMPANY_PHONE } from '../constants.tsx';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Chào bạn! Tôi là trợ lý ảo của SangTenXe24h. Bạn cần tư vấn về thủ tục sang tên, rút hồ sơ, check gốc xe hay tính thuế trước bạ không?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Bạn là trợ lý ảo thông minh của "SangTenXe24h" - Chuyên gia pháp lý xe tại TPHCM (288H Nơ Trang Long, Bình Thạnh).
          Lĩnh vực chuyên môn:
          1. Sang tên xe ô tô/máy chính chủ hoặc không chính chủ (Thông tư 24).
          2. Rút hồ sơ gốc toàn quốc hỏa tốc.
          3. Check gốc xe, giám định tình trạng pháp lý, tranh chấp.
          4. Làm lại cà vẹt mất, cấp đổi biển số định danh.
          5. Bảo hiểm xe cơ giới & Phí đường bộ.
          6. Cà số máy tận nơi & Đăng kiểm.
          
          Phong cách: Chuyên nghiệp, tận tâm, ngắn gọn. 
          Luôn nhắc khách hàng liên hệ Hotline/Zalo: ${COMPANY_PHONE} để nhận báo giá chính xác. 
          Nếu khách hỏi về thuế, mời khách vào mục "Công cụ" trên web để tính thử.`,
        },
      });

      const botResponse = response.text || "Xin lỗi, hệ thống gặp chút trục trặc. Vui lòng gọi Hotline để được hỗ trợ nhanh nhất!";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Hệ thống tư vấn đang bận, vui lòng liên hệ Hotline/Zalo 0373 823 874 để được hỗ trợ ngay lập tức!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[420px] h-[550px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col overflow-hidden animate-fade-up">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-sky-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-widest">Trợ Lý SangTenXe24h</h4>
                <span className="text-[10px] opacity-70 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Sẵn sàng hỗ trợ
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition">
              <Minimize2 size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto bg-slate-50 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-sky-600 text-white rounded-tr-none shadow-lg shadow-sky-100' 
                    : 'bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t bg-white">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-grow bg-slate-100 rounded-2xl px-5 py-3 text-sm font-medium focus:ring-2 focus:ring-sky-500 outline-none transition-all"
              />
              <button 
                onClick={handleSend} 
                className="w-12 h-12 bg-sky-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-sky-100 hover:bg-slate-900 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="group w-20 h-20 rounded-[2rem] shadow-2xl flex items-center justify-center text-white bg-sky-600 hover:bg-slate-900 hover:scale-105 transition-all duration-500 relative"
      >
        <div className="absolute inset-0 bg-sky-600 rounded-[2rem] animate-ping opacity-20 group-hover:hidden"></div>
        {isOpen ? <X size={36} /> : <MessageSquare size={36} />}
      </button>
    </div>
  );
};

export default AIChatbot;
