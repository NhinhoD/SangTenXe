
# Hướng Dẫn Deploy: SangTenXe24h

Tài liệu này hướng dẫn bạn cách triển khai ứng dụng **SangTenXe24h** lên Vercel. 

Ứng dụng này sử dụng kiến trúc "no-build-step", dựa trên `importmap` để tải các thư viện từ CDN và chạy trực tiếp file `.tsx` trên trình duyệt. Điều này yêu cầu cấu hình đặc biệt để Vercel phục vụ đúng loại file.

---

## ❗ Lưu ý quan trọng về Bảo mật API Key

Hiện tại, ứng dụng đang gọi trực tiếp Gemini API từ trình duyệt. Để ứng dụng hoạt động trên môi trường production:

1. **Thiết lập biến môi trường**: Trên Vercel, hãy thêm biến môi trường tên là `API_KEY` với giá trị là mã Gemini API của bạn.
2. **Cơ chế hoạt động**: Mặc dù kiến trúc này tiện lợi cho việc phát triển nhanh, nhưng đối với môi trường thực tế, API Key có thể bị lộ ở phía client. Nếu website có lượng truy cập lớn, bạn nên cân nhắc tạo một backend proxy nhỏ.

---

## Cách Deploy lên Vercel

Chúng ta sẽ sử dụng Vercel để phục vụ các file tĩnh và xử lý logic định tuyến.

### Bước 1: Đẩy mã nguồn lên GitHub
1. Tạo một repository mới trên GitHub.
2. Commit và push toàn bộ mã nguồn của bạn (bao gồm cả file `vercel.json` vừa tạo) lên đó.

### Bước 2: Kết nối và cấu hình trên Vercel
1. Truy cập [Vercel](https://vercel.com) và chọn **"Add New > Project"**.
2. Import repository từ GitHub.
3. Trong phần **Framework Preset**, hãy chọn **"Other"**.
4. **KHÔNG** cần thiết lập Build Command hay Output Directory vì chúng ta không có bước build.
5. Trong mục **Environment Variables**, hãy thêm:
   - Key: `API_KEY`
   - Value: `Mã_API_Gemini_của_bạn`
6. Nhấn **"Deploy"**.

### Bước 3: Kiểm tra
Vercel sẽ cấp cho bạn một URL. Hãy truy cập và kiểm tra các tính năng như:
- Chuyển trang (Routing).
- Reload trang (nhờ cấu hình `rewrites` trong `vercel.json`).
- Các icon Lucide và giao diện Tailwind.

---

## Tại sao cần file `vercel.json`?

Trong dự án này, file `vercel.json` đóng vai trò cực kỳ quan trọng:
1. **MIME Types**: Trình duyệt mặc định không biết cách thực thi file `.tsx`. Cấu hình `headers` trong `vercel.json` sẽ lừa trình duyệt rằng đây là các file JavaScript (`application/javascript`), giúp code React của bạn chạy được.
2. **SPA Routing**: Khi bạn reload trang tại đường dẫn `/dich-vu`, Vercel sẽ tìm file `dich-vu.html` (không tồn tại). Cấu hình `rewrites` sẽ hướng dẫn Vercel luôn trả về `index.html` để React Router xử lý việc hiển thị nội dung.

---
**SangTenXe24h - Dịch vụ sang tên chuyên nghiệp 24/7**
