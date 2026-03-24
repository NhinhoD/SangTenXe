
# 🚗 SangTenXe24h - Dịch Vụ Sang Tên Xe Chuyên Nghiệp

Dự án website giới thiệu và quảng bá dịch vụ pháp lý xe cơ giới (ô tô, xe máy) hàng đầu tại Việt Nam. Website được tối ưu hóa cho chuyển đổi, SEO và trải nghiệm người dùng mượt mà trên mọi thiết bị.

## 🌟 Tính năng nổi bật

- **Kiến trúc Modern SPA**: Sử dụng React 19 với hệ thống `importmap` (No-build step) giúp tải trang cực nhanh và dễ dàng triển khai.
- **Giao diện Responsive**: Tối ưu hóa hoàn toàn cho Mobile, Tablet và Desktop bằng Tailwind CSS.
- **Tối ưu SEO**:
  - Tích hợp **Schema.org (JSON-LD)** cho Local Business.
  - Thẻ Meta Open Graph, Twitter Card cho việc chia sẻ mạng xã hội.
  - Tự động hóa Sitemap và cấu hình Robots.txt.
- **Hệ thống Routing thông minh**:
  - Sử dụng React Router với logic điều hướng linh hoạt.
  - **Tính năng đặc biệt**: Tự động nhận diện môi trường và ép buộc quay về Trang Chủ khi người dùng nhấn Reload (tránh lỗi tham số URL trong môi trường preview).
- **Hiệu ứng Animation**: Tích hợp các hiệu ứng cuộn trang (Reveal), sóng biển động (Wave animation) và các chuyển cảnh mượt mà.
- **Quản lý dữ liệu tập trung**: Mọi thông tin dịch vụ, blog, menu đều được quản lý tại file `constants.tsx`, dễ dàng bảo trì và cập nhật.

## 🛠 Công nghệ sử dụng

- **Frontend**: React.js (v19)
- **Styling**: Tailwind CSS (CDN-based)
- **Icons**: Lucide React
- **Navigation**: React Router (HashRouter)
- **Deployment Support**: Vercel configuration (xử lý MIME types cho `.tsx`)

## 📂 Cấu trúc thư mục

```text
├── components/          # Các thành phần giao diện tái sử dụng
│   ├── Header.tsx       # Thanh điều hướng, Logo và Hotline
│   ├── Footer.tsx       # Thông tin chân trang, liên kết
│   ├── ServiceCard.tsx  # Card hiển thị từng dịch vụ
│   └── Reveal.tsx       # Logic xử lý hiệu ứng hiện hình khi cuộn trang
├── pages/               # Các trang nội dung chính
│   ├── Home.tsx         # Trang chủ với Hero section và giới thiệu
│   ├── About.tsx        # Trang giới thiệu về công ty và giá trị
│   ├── ServicePage.tsx  # Danh sách và chi tiết từng dịch vụ
│   ├── Consultation.tsx # Trang hỏi đáp (FAQ) và tư vấn
│   ├── Blog.tsx         # Trang chia sẻ kiến thức pháp luật xe
│   └── ContactPage.tsx  # Trang liên hệ và Form đăng ký tư vấn
├── constants.tsx        # "Trái tim" dữ liệu - Chứa menu, dịch vụ, blog posts
├── types.ts             # Định nghĩa kiểu dữ liệu (TypeScript Interfaces)
├── App.tsx              # Cấu hình Routing và logic điều hướng toàn cục
├── index.tsx            # Điểm khởi đầu của ứng dụng
├── vercel.json          # Cấu hình server cho việc deploy lên Vercel
└── index.html           # File HTML gốc tích hợp importmap và Tailwind
```

## 📝 Hướng dẫn cập nhật nội dung

Website được thiết kế để không cần can thiệp sâu vào code khi cần thay đổi nội dung:

1. **Thay đổi thông tin liên hệ**: Cập nhật các biến `COMPANY_PHONE`, `COMPANY_ADDRESS` trong `constants.tsx`.
2. **Thêm dịch vụ mới**: Thêm một đối tượng mới vào mảng `SERVICES` trong `constants.tsx`.
3. **Đăng bài Blog**: Thêm dữ liệu vào mảng `BLOG_POSTS` trong `constants.tsx`.

## 🌐 Triển khai (Deployment)

Dự án được tối ưu để chạy trên **Vercel**. Vui lòng tham khảo file `DEPLOYMENT.md` để biết chi tiết cách cấu hình biến môi trường và thiết lập MIME types cho các file `.tsx`.

---
© 2025 **SangTenXe24h** - Uy Tín Hàng Đầu.
