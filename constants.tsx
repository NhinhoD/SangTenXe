import { Car, FileText, Repeat, ShieldCheck, Truck, ClipboardList, PenTool } from 'lucide-react';
import { ServiceItem, NavItem, BlogPost, FaqItem } from './types';

export const COMPANY_PHONE = "0867 678 339";
export const COMPANY_EMAIL = "contact@[ten-mien-cua-ban].com";
export const COMPANY_ADDRESS = "[Số nhà], [Tên đường], Quận/Huyện, TP. Hồ Chí Minh";

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", path: "/" },
  { label: "Giới thiệu", path: "/gioi-thieu" },
  {
    label: "Dịch vụ",
    path: "/dich-vu",
    children: [
      { label: "Sang tên ô tô & xe máy", path: "/dich-vu/sang-ten" },
      { label: "Rút hồ sơ gốc", path: "/dich-vu/rut-ho-so" },
      { label: "Cấp đổi, cấp lại Đăng Ký", path: "/dich-vu/cap-doi" },
      { label: "Làm lại Biển Số", path: "/dich-vu/bien-so" },
      { label: "Cà số & Đăng Kiểm", path: "/dich-vu/dang-kiem" },
    ]
  },
  { label: "Tư vấn", path: "/tu-van" },
  { label: "Blog xe", path: "/blog" },
  { label: "Liên hệ", path: "/lien-he" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "sang-ten",
    title: "Dịch vụ sang tên xe ô tô và xe máy",
    description: "Chúng tôi cung cấp dịch vụ sang tên xe uy tín, nhanh gọn, đúng pháp luật, giá tốt nhất tại khu vực Sài Gòn.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", 
    icon: Car
  },
  {
    id: "rut-ho-so",
    title: "Dịch vụ rút hồ sơ gốc",
    description: "Nhận rút hồ sơ gốc chuyên nghiệp, hỗ trợ sang tên chuyển vùng nhanh chóng từ các tỉnh về TP.HCM.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800", 
    icon: FileText
  },
  {
    id: "cap-doi",
    title: "Dịch vụ cấp đổi, cấp lại Đăng Ký Xe",
    description: "Hỗ trợ làm lại cà vẹt xe bị mất, hư hỏng hoặc đổi thông tin đăng ký nhanh chóng không cần chờ đợi lâu.",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
    icon: Repeat
  },
  {
    id: "bien-so",
    title: "Dịch vụ làm lại Biển Số",
    description: "Dịch vụ làm lại biển số bị mất, mờ, hoặc ép biển số chống nước bền đẹp theo đúng quy chuẩn Nhà nước.",
    image: "https://mercedesphumyhung.com.vn/wp-content/uploads/2024/10/audi2.jpg",
    icon: ShieldCheck
  },
  {
    id: "dang-kiem",
    title: "Dịch vụ Cà Số và Đăng Kiểm",
    description: "Đội ngũ nhân viên hỗ trợ tận nhà cà số khung, số máy và đưa xe đi đăng kiểm cho khách hàng bận rộn.",
    image: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785d45dd972489b8630a840aa247a41769c10d29387ecb7ce29b9c4716bcb8e355f7c8ad008c57673c6c1582d78e0e2a8301039b653f7228b0042d704e48349bb259c6b3b4e826641f2a5ff22c7cd96e7c0/5c13378d057c480a8e98c64a413e20613682161636517973.jpg",
    icon: PenTool
  },
  {
    id: "van-tai",
    title: "Giấy phép kinh doanh vận tải",
    description: "Tư vấn thủ tục cấp phù hiệu xe tải, xe hợp đồng và đăng ký kinh doanh vận tải trọn gói cho doanh nghiệp.",
    image: "https://cdn.dailyxe.com.vn/image/toyota-prius-2025-338480j.jpg?ref=bonboncar.vn",
    icon: Truck
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Quy trình sang tên xe ô tô cũ mới nhất 2025",
    summary: "Hướng dẫn chi tiết các bước sang tên đổi chủ xe ô tô đã qua sử dụng theo quy định mới của thông tư 24.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    date: "12/10/2024"
  },
  {
    id: "2",
    title: "Thủ tục rút hồ sơ gốc xe máy khác tỉnh",
    summary: "Những giấy tờ cần thiết và lệ phí khi thực hiện rút hồ sơ gốc để chuyển vùng xe máy năm 2025.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    date: "15/10/2024"
  },
  {
    id: "3",
    title: "Mức phạt khi không sang tên xe chính chủ",
    summary: "Cập nhật các mức phạt mới nhất đối với lỗi không làm thủ tục sang tên đổi chủ phương tiện bạn cần biết.",
    image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/01/07/loi-xe-khong-chinh-chu.jpg",
    date: "20/10/2024"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Sang tên xe tại SangTenOtoSG mất bao lâu?",
    answer: "Thời gian thông thường từ 2-5 ngày làm việc tùy thuộc vào tình trạng hồ sơ. Chúng tôi có dịch vụ hỗ trợ làm nhanh trong ngày nếu khách hàng cần gấp."
  },
  {
    question: "Tôi ở tỉnh có thể rút hồ sơ gốc tại Sài Gòn không?",
    answer: "Hoàn toàn được. Chúng tôi hỗ trợ rút hồ sơ gốc xe tại tất cả các quận huyện của TP.HCM và gửi hồ sơ về tận nhà cho khách hàng ở tỉnh qua bưu điện."
  },
  {
    question: "Phí dịch vụ sang tên xe là bao nhiêu?",
    answer: "Phí dịch vụ tùy thuộc vào loại xe (ô tô/xe máy) và địa phương chuyển đến. Hãy gọi hotline 0867 678 339 để được báo giá trọn gói chính xác nhất."
  }
];