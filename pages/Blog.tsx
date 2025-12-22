import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center">Blog Xe & Kiến Thức Pháp Luật</h1>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-8">
            Nơi chia sẻ kinh nghiệm, cập nhật luật giao thông và hướng dẫn thủ tục hành chính mới nhất.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
             <input 
               type="text" 
               placeholder="Tìm kiếm bài viết..." 
               className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 shadow-sm transition"
             />
             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Featured Post (First one) */}
      <div className="container mx-auto px-4 py-12">
         {BLOG_POSTS.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col md:flex-row mb-12 group cursor-pointer hover:shadow-xl transition duration-300">
               <div className="md:w-1/2 overflow-hidden">
                  <img 
                    src={BLOG_POSTS[0].image} 
                    alt={BLOG_POSTS[0].title} 
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
               </div>
               <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                     <span className="flex items-center gap-1"><Calendar size={14} /> {BLOG_POSTS[0].date}</span>
                     <span className="flex items-center gap-1"><User size={14} /> Admin</span>
                     <span className="text-sky-500 font-bold bg-sky-50 px-2 py-0.5 rounded text-xs">Mới nhất</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition">
                     {BLOG_POSTS[0].title}
                  </h2>
                  <p className="text-slate-600 mb-6 text-lg line-clamp-3">
                     {BLOG_POSTS[0].summary} Bài viết này sẽ cung cấp cho bạn cái nhìn tổng quan và những lưu ý quan trọng nhất để tránh mất tiền oan.
                  </p>
                  <span className="inline-flex items-center text-sky-600 font-bold hover:underline gap-1">
                     Đọc chi tiết <ArrowRight size={18} />
                  </span>
               </div>
            </div>
         )}

        {/* Post Grid */}
        <h2 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-sky-500 pl-4">Bài viết mới nhất</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group h-full">
              <div className="h-52 overflow-hidden relative">
                 <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                 <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                     <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                 </div>
                 <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition line-clamp-2">
                    {post.title}
                 </h3>
                 <p className="text-slate-500 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.summary}
                 </p>
                 <Link to="#" className="text-sky-600 font-semibold text-sm hover:text-sky-700 inline-flex items-center mt-auto">
                    Xem thêm <ArrowRight size={14} className="ml-1" />
                 </Link>
              </div>
            </div>
          ))}
          
          {/* Placeholder for visual balance if needed */}
          <div className="bg-sky-50 rounded-xl border-2 border-dashed border-sky-200 flex items-center justify-center p-8 text-center min-h-[300px]">
             <div>
                <p className="text-slate-500 mb-4 font-medium">Bạn muốn tìm hiểu về chủ đề khác?</p>
                <Link to="/lien-he" className="inline-block bg-white text-sky-600 border border-sky-200 px-6 py-2 rounded-full font-bold hover:bg-sky-600 hover:text-white transition">
                   Gửi câu hỏi cho chúng tôi
                </Link>
             </div>
          </div>
        </div>
        
        {/* Pagination (Fake) */}
        <div className="flex justify-center mt-12 gap-2">
           <button className="w-10 h-10 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center">1</button>
           <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 flex items-center justify-center font-bold">2</button>
           <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 flex items-center justify-center font-bold">3</button>
           <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 flex items-center justify-center font-bold">...</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;