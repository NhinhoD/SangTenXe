// Function helper to render Service Card
function renderServiceCard(s) {
    return `
        <div class="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all overflow-hidden group border border-slate-100 flex flex-col h-full hover:-translate-y-1">
            <div class="relative h-52 overflow-hidden">
                <img src="${s.image}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                <div class="absolute bottom-4 right-4 w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center text-white shadow-lg transform group-hover:-translate-y-2 transition">
                    <i data-lucide="${s.icon}"></i>
                </div>
            </div>
            <div class="p-8 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-3 group-hover:text-sky-600 transition">${s.title}</h3>
                <p class="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">${s.description}</p>
                <a href="chi-tiet.html?id=${s.id}" class="mt-auto text-sky-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Xem chi tiết <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
        </div>
    `;
}

// Initializing UI
document.addEventListener('DOMContentLoaded', () => {
    // Render Header
    const header = document.getElementById('main-header');
    if (header) {
        header.innerHTML = `
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="index.html" class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                        <i data-lucide="car"></i>
                    </div>
                    <span class="text-xl font-black">SangTenXe<span class="text-sky-600">24h</span></span>
                </a>
                <nav class="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wider">
                    <a href="index.html" class="hover:text-sky-600">Trang chủ</a>
                    <a href="dich-vu.html" class="hover:text-sky-600">Dịch vụ</a>
                    <a href="lien-he.html" class="hover:text-sky-600">Liên hệ</a>
                </nav>
                <div class="flex items-center gap-4">
                    <a href="tel:0867678339" class="hidden sm:flex items-center gap-2 font-black text-sky-700">
                        <i data-lucide="phone"></i> 0867 678 339
                    </a>
                </div>
            </div>
        `;
    }

    // Render Services on Home
    const grid = document.getElementById('services-grid');
    if (grid) {
        SERVICES.slice(0, 3).forEach(s => {
            grid.innerHTML += renderServiceCard(s);
        });
    }

    // Render Floating Actions
    const floating = document.getElementById('floating-actions');
    if (floating) {
        floating.innerHTML = `
            <a href="https://zalo.me/0867678339" target="_blank" class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white font-bold hover:scale-110 transition">Zalo</a>
            <a href="tel:0867678339" class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white animate-pulse hover:scale-110 transition">
                <i data-lucide="phone"></i>
            </a>
        `;
    }

    // Render Footer
    const footer = document.getElementById('main-footer');
    if (footer) {
        footer.innerHTML = `
            <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
                <div>
                    <h3 class="text-xl font-bold mb-6">SangTenXe24h</h3>
                    <p class="text-slate-400 text-sm">Dịch vụ sang tên xe uy tín hàng đầu. Phục vụ 24/7 toàn quốc.</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-6">Liên kết</h3>
                    <ul class="space-y-3 text-slate-400">
                        <li><a href="index.html">Trang chủ</a></li>
                        <li><a href="dich-vu.html">Dịch vụ</a></li>
                        <li><a href="lien-he.html">Liên hệ</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-6">Liên hệ</h3>
                    <p class="text-slate-400 text-sm mb-2">📍 ${COMPANY_INFO.address}</p>
                    <p class="text-slate-400 text-sm">📞 ${COMPANY_INFO.phone}</p>
                </div>
            </div>
            <div class="text-center text-slate-500 text-xs border-t border-slate-800 pt-8">
                &copy; 2025 SangTenXe24h. Bản quyền thuộc về chúng tôi.
            </div>
        `;
    }

    // AI Chatbot Logic
    const chatbotRoot = document.getElementById('ai-chatbot-root');
    if (chatbotRoot) {
        chatbotRoot.innerHTML = `
            <div class="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
                <div id="chat-window" class="hidden mb-4 w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl border flex flex-col overflow-hidden">
                    <div class="bg-sky-600 p-4 text-white flex justify-between items-center">
                        <span class="font-bold">Trợ Lý SangTenXe24h</span>
                        <button onclick="toggleChat()"><i data-lucide="x"></i></button>
                    </div>
                    <div id="chat-messages" class="flex-grow p-4 overflow-y-auto bg-slate-50 text-sm space-y-3">
                        <div class="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 max-w-[85%]">
                            Chào bạn! Tôi có thể giúp gì cho hồ sơ xe của bạn?
                        </div>
                    </div>
                    <div class="p-4 border-t flex gap-2">
                        <input id="chat-input" class="flex-grow bg-slate-100 rounded-full px-4 py-2 outline-none text-sm" placeholder="Hỏi về thủ tục...">
                        <button onclick="sendMessage()" class="bg-sky-600 text-white p-2 rounded-full"><i data-lucide="send"></i></button>
                    </div>
                </div>
                <button onclick="toggleChat()" class="w-16 h-16 bg-sky-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-105 transition">
                    <i data-lucide="message-square"></i>
                </button>
            </div>
        `;
    }

    // Initialize Icons
    lucide.createIcons();
});

function toggleChat() {
    const win = document.getElementById('chat-window');
    win.classList.toggle('hidden');
    win.classList.add('animate-fade-up');
}

async function sendMessage() {
    const input = document.getElementById('chat-input');
    const box = document.getElementById('chat-messages');
    if (!input.value.trim()) return;

    const userText = input.value;
    input.value = '';
    box.innerHTML += `<div class="flex justify-end"><div class="bg-sky-600 text-white p-3 rounded-2xl max-w-[85%]">${userText}</div></div>`;
    box.scrollTop = box.scrollHeight;

    // Phản hồi giả lập (có thể thêm Gemini API nếu cần)
    setTimeout(() => {
        box.innerHTML += `<div class="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 max-w-[85%]">Cảm ơn bạn. Để được tư vấn chính xác cho hồ sơ của mình, bạn vui lòng liên hệ Hotline 0867 678 339 hoặc gửi ảnh qua Zalo nhé!</div>`;
        box.scrollTop = box.scrollHeight;
    }, 1000);
}

// Reveal animation on scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(r => {
        const top = r.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) r.classList.add('active');
    });
});