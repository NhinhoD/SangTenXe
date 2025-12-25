import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { COMPANY_PHONE } from '../constants.tsx';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Chào bạn! Tôi là trợ lý ảo của SangTenXe24h. Bạn cần tư vấn về thủ tục sang tên, rút hồ sơ hay làm lại giấy tờ xe không?' }
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
          systemInstruction: `Bạn là trợ lý ảo chuyên nghiệp của website "SangTenXe24h". 
          Nhiệm vụ của bạn là tư vấn cho khách hàng về các dịch vụ: 
          - Sang tên đổi chủ xe ô tô, xe máy.
          - Rút hồ sơ gốc chuyển vùng.
          - Làm lại đăng ký xe (cà vẹt) bị mất.
          - Cấp đổi biển số định danh, biển số bị mờ.
          - Cà số khung số máy tận nhà.
          
          Quy tắc trả lời:
          1. Luôn lịch sự, chuyên nghiệp và thân thiện.
          2. Câu trả lời ngắn gọn, đi vào trọng tâm pháp lý theo quy định mới nhất của Thông tư 24/2023/TT-BCA.
          3. Nếu khách hàng hỏi về giá cả, hãy nói rằng giá phụ thuộc vào từng hồ sơ cụ thể và mời họ để lại số điện thoại hoặc gọi Hotline ${COMPANY_PHONE} để được báo giá chính xác nhất.
          4. Không trả lời các vấn đề không liên quan đến xe cộ.
          5. Ngôn ngữ: Tiếng Việt.`,
        },
      });

      const botResponse = response.text || "Xin lỗi, tôi gặp chút trục trặc. Bạn vui lòng gọi hotline để được hỗ trợ nhanh nhất nhé!";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Tôi đang bận một chút, bạn vui lòng liên hệ Hotline/Zalo để chúng tôi tư vấn trực tiếp nhé!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-sky-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Chuyên Gia SangTenXe24h</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] opacity-80 uppercase font-bold">Đang trực tuyến</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition">
              <Minimize2 size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-sky-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-sky-500" />
                  <span className="text-xs text-slate-400">Đang phân tích hồ sơ...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Hỏi về thủ tục sang tên, phí..."
                className="flex-grow bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-sky-500 transition-all outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition disabled:opacity-50 shadow-lg shadow-sky-200"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-400 mt-2 uppercase font-bold tracking-widest">Powered by Gemini AI</p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-800' : 'bg-sky-600'
        }`}
      >
        {isOpen ? <X size={30} /> : <MessageSquare size={30} className="animate-bounce" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">
            1
          </span>
        )}
      </button>
    </div>
  );
};

export default AIChatbot;