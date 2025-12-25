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
          Nhiệm vụ của bạn là tư vấn về dịch vụ sang tên xe, rút hồ sơ, làm lại cà vẹt... 
          Liên hệ Hotline ${COMPANY_PHONE} nếu cần hỗ trợ gấp.`,
        },
      });

      const botResponse = response.text || "Xin lỗi, tôi gặp chút trục trặc. Bạn vui lòng gọi hotline để được hỗ trợ nhanh nhất nhé!";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Tôi đang bận một chút, bạn vui lòng liên hệ Hotline/Zalo nhé!" }]);
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
              <h4 className="font-bold text-sm">Chuyên Gia SangTenXe24h</h4>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-sky-600 text-white' : 'bg-white border'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-white flex gap-2">
            <input 
              className="flex-grow bg-slate-100 rounded-full px-4 py-2 outline-none" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Hỏi trợ lý ảo..."
            />
            <button onClick={handleSend} className="bg-sky-600 text-white p-2 rounded-full"><Send size={18} /></button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-sky-600 rounded-full shadow-2xl flex items-center justify-center text-white">
        {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
      </button>
    </div>
  );
};

export default AIChatbot;