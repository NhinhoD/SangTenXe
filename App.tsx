import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import ServicePage from './pages/ServicePage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import About from './pages/About.tsx';
import Consultation from './pages/Consultation.tsx';
import Blog from './pages/Blog.tsx';
import AIChatbot from './components/AIChatbot.tsx';
import { COMPANY_PHONE } from './constants.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const cleanPhone = COMPANY_PHONE.replace(/\s/g, '');

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dich-vu" element={<ServicePage />} />
            <Route path="/dich-vu/:id" element={<ServicePage />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/tu-van" element={<Consultation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <AIChatbot />
        
        {/* Quick Contact Buttons */}
        <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3">
          <a 
            href={`https://zalo.me/${cleanPhone}`} 
            target="_blank" 
            className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl text-white font-bold text-xs border-2 border-white hover:scale-110 transition-all"
          >
            Zalo
          </a>
          <a 
            href={`tel:${cleanPhone}`} 
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl text-white border-2 border-white animate-pulse hover:scale-110 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;