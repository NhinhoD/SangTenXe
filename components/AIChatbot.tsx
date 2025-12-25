
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { COMPANY_PHONE } from '../constants.tsx';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Chào bạn! Tôi là trợ lý ảo của SangTenXe24h. Bạn cần tư vấn về thủ tục sang tên hay rút hồ sơ xe không?' }
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

    // Lấy API Key an toàn
    const apiKey = (window as any).process?.env?.API_KEY || "";
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'user', text: input.trim() }, { role: 'bot', text: "Hệ thống AI đang bảo trì. Vui lòng gọi Hotline để được tư vấn ngay!" }]);
      setInput('');
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Bạn là trợ lý ảo của "SangTenXe24h". 
          Tư vấn về: Sang tên xe, Rút hồ sơ, Cà số máy, Làm lại cà vẹt.
          Quy tắc: Ngắn gọn, mời khách gọi ${COMPANY_PHONE}.`,
        },
      });

      const botResponse = response.text || "Xin lỗi, tôi gặp chút trục trặc.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Vui lòng liên hệ Hotline/Zalo để được hỗ trợ trực tiếp!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-fade-up">
          <div className="bg-sky-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bot size={24} />
              <div>
                <h4 className="font-bold text-sm">Trợ Lý SangTenXe24h</h4>
                <span className="text-[10px] opacity-80 uppercase font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition">
              <Minimize2 size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' ? 'bg-sky-600 text-white rounded-tr-none' : 'bg-white text-slate-700 shadow-sm rounded-tl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-sky-500" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Hỏi về thủ tục xe..."
                className="flex-grow bg-slate-100 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
              />
              <button onClick={handleSend} className="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white bg-sky-600 hover:scale-110 transition-transform">
        {isOpen ? <X size={30} /> : <MessageSquare size={30} className="animate-bounce" />}
      </button>
    </div>
  );
};

export default AIChatbot;
