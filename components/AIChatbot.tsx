import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { COMPANY_PHONE } from '../constants.tsx';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Chào bạn! Tôi là trợ lý ảo của SangTenXe24h. Bạn cần tư vấn về thủ tục sang tên, rút hồ sơ hay làm lại giấy tờ xe?' }
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
          systemInstruction: `Bạn là trợ lý ảo chuyên nghiệp của SangTenXe24h. 
          Nhiệm vụ: Tư vấn về dịch vụ sang tên xe ô tô/xe máy, rút hồ sơ gốc, biển số định danh theo Thông tư 24.
          Quy tắc: 
          1. Luôn lịch sự, gọi khách hàng là "bạn" hoặc "anh/chị".
          2. Hotline tư vấn trực tiếp: ${COMPANY_PHONE}.
          3. Nếu hỏi về giá, hãy nói giá tùy thuộc hồ sơ và mời gọi hotline.
          4. Trả lời bằng tiếng Việt, ngắn gọn, súc tích.`,
        },
      });

      const botResponse = response.text || "Tôi đang gặp chút sự cố, bạn vui lòng gọi Hotline để được hỗ trợ nhanh nhất nhé!";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Kết nối AI bị gián đoạn. Bạn vui lòng liên hệ Zalo/Hotline nhé!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-fade-up">
          <div className="bg-sky-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Bot size={24} />
              <h4 className="font-bold text-sm">Trợ Lý SangTenXe24h</h4>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-sky-600 text-white rounded-tr-none' : 'bg-white border rounded-tl-none shadow-sm text-slate-700'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-sky-600" />
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Đang trả lời...</span>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t bg-white flex gap-2">
            <input 
              className="flex-grow bg-slate-100 rounded-full px-4 py-2 outline-none text-sm" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi về thủ tục xe..."
            />
            <button onClick={handleSend} className="bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700 transition">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all transform hover:scale-110 ${isOpen ? 'bg-slate-800' : 'bg-sky-600'}`}
      >
        {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
      </button>
    </div>
  );
};

export default AIChatbot;