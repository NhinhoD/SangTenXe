import { Car, FileText, Repeat, ShieldCheck, PenTool, Landmark } from 'lucide-react';
import { ServiceItem, NavItem, BlogPost, FaqItem } from './types.ts';

export const COMPANY_PHONE = "0867 678 339";
export const COMPANY_EMAIL = "hotro@sangtenxe24h.vn";
export const COMPANY_ADDRESS = "123 Đường số 7, Phường Bình Trị Đông B, Quận Bình Tân, TP. Hồ Chí Minh";

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", path: "/" },
  { label: "Dịch vụ", path: "/dich-vu" },
  { label: "Giới thiệu", path: "/gioi-thieu" },
  { label: "Hỏi đáp", path: "/tu-van" },
  { label: "Liên hệ", path: "/lien-he" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "sang-ten",
    title: "Sang tên đổi chủ Ô tô & Xe máy",
    description: "Hỗ trợ thủ tục sang tên nhanh gọn cho xe mua bán, tặng cho, thừa kế. Xử lý hồ sơ khó, xe qua nhiều đời chủ không tìm được chủ cũ.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", 
    icon: Car
  },
  {
    id: "rut-ho-so",
    title: "Rút hồ sơ gốc (Toàn quốc)",
    description: "Dịch vụ rút hồ sơ gốc xe ô tô, xe máy tại 63 tỉnh thành. Hỗ trợ rút nhanh, bàn giao tận tay để khách hàng tự đi đăng ký.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800", 
    icon: FileText
  },
  {
    id: "cap-doi",
    title: "Làm lại Cà vẹt / Đăng ký xe",
    description: "Bị mất cà vẹt, cà vẹt cũ nát, sai thông tin? Chúng tôi giúp bạn cấp lại đăng ký xe chính chủ nhanh chóng, đúng pháp luật.",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
    icon: Repeat
  },
  {
    id: "bien-so",
    title: "Biển số định danh & Cấp đổi",
    description: "Tư vấn thủ tục thu hồi biển số, đăng ký biển số định danh mới. Làm lại biển số bị mất, mờ, hỏng.",
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800",
    icon: ShieldCheck
  },
  {
    id: "dang-kiem",
    title: "Cà số, Đăng kiểm & Phù hiệu",
    description: "Cà số khung số máy tận nhà. Hỗ trợ đưa xe đi đăng kiểm, lắp định vị, cấp phù hiệu xe hợp đồng trọn gói.",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800",
    icon: PenTool
  },
  {
    id: "thue-truoc-ba",
    title: "Kê khai Thuế & Lệ phí",
    description: "Hỗ trợ kê khai thuế trước bạ online, đóng thuế tại chi cục thuế. Tư vấn mức thuế thấp nhất cho các dòng xe cũ.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    icon: Landmark
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Sang tên xe không chính chủ có làm được không?",
    answer: "ĐƯỢC. Theo Thông tư 24, bạn có thể thực hiện thủ tục sang tên xe qua nhiều đời chủ mà không cần chủ cũ. Quy trình xác minh tính hợp pháp của xe mất khoảng 30 ngày."
  },
  {
    question: "Phí sang tên xe ô tô cũ là bao nhiêu?",
    answer: "Chi phí gồm: Thuế trước bạ (2% giá trị xe cũ), lệ phí cấp đổi biển số/cà vẹt và phí dịch vụ. Liên hệ Zalo để nhận báo giá chính xác cho hồ sơ của bạn."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Hướng dẫn sang tên xe không tìm được chủ cũ 2025",
    summary: "Thông tư 24 cho phép sang tên xe qua nhiều đời chủ mà không cần chủ cũ ký giấy tờ. Xem ngay quy trình 30 ngày để sở hữu xe chính chủ.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    date: "10/02/2025"
  }
];