import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants.tsx';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Blog Kiến Thức - SangTenXe24h";
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Kiến Thức Pháp Luật Xe</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src={post.image} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{post.summary}</p>
                <button className="text-sky-600 font-bold">Xem thêm</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;