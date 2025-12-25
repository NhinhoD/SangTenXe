
import { Car, FileText, Repeat, ShieldCheck, Truck, ClipboardList, PenTool } from 'lucide-react';
import { ServiceItem, NavItem, BlogPost, FaqItem } from './types';

export const COMPANY_PHONE = "0123 456 789";
export const COMPANY_EMAIL = "contact@sangtenxe24h.com";
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
    title: "Dịch vụ sang tên xe ô tô và xe máy tại TP.HCM",
    description: "Hỗ trợ thủ tục sang tên đổi chủ, sang tên chính chủ cho xe ô tô và xe máy nhanh gọn, đúng thông tư 24. Uy tín, bảo mật thông tin khách hàng tuyệt đối.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", 
    icon: Car
  },
  {
    id: "rut-ho-so",
    title: "Dịch vụ rút hồ sơ gốc xe ô tô, xe máy toàn quốc",
    description: "Nhận rút hồ sơ gốc chuyên nghiệp cho xe chuyển vùng từ tỉnh về TP.HCM hoặc ngược lại. Xử lý nhanh các trường hợp mất giấy tờ, xe qua nhiều đời chủ.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800", 
    icon: FileText
  },
  {
    id: "cap-doi",
    title: "Cấp đổi, cấp lại Đăng ký xe (Cà vẹt) bị mất",
    description: "Dịch vụ làm lại cà vẹt xe bị mất, hư hỏng hoặc đổi thông tin đăng ký nhanh chóng. Không cần chờ đợi lâu, thủ tục đơn giản, giao tận nhà.",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
    icon: Repeat
  },
  {
    id: "bien-so",
    title: "Dịch vụ làm lại Biển số & Biển số định danh",
    description: "Tư vấn thủ tục giữ biển số định danh, làm lại biển số bị mờ, gãy hoặc mất. Ép biển số chống nước cao cấp theo tiêu chuẩn đăng kiểm.",
    image: "https://mercedesphumyhung.com.vn/wp-content/uploads/2024/10/audi2.jpg",
    icon: ShieldCheck
  },
  {
    id: "dang-kiem",
    title: "Cà số khung số máy & Hỗ trợ Đăng kiểm xe",
    description: "Đội ngũ kỹ thuật hỗ trợ tận nhà cà số khung, số máy chính xác. Tư vấn và hỗ trợ đưa xe đi đăng kiểm cho khách hàng bận rộn tại Sài Gòn.",
    image: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785d45dd972489b8630a840aa247a41769c10d29387ecb7ce29b9c4716bcb8e355f7c8ad008c57673c6c1582d78e0e2a8301039b653f7228b0042d704e48349bb259c6b3b4e826641f2a5ff22c7cd96e7c0/5c13378d057c480a8e98c64a413e20613682161636517973.jpg",
    icon: PenTool
  },
  {
    id: "van-tai",
    title: "Giấy phép kinh doanh vận tải & Phù hiệu xe",
    description: "Tư vấn thủ tục cấp phù hiệu xe tải, xe hợp đồng, lắp định vị và đăng ký kinh doanh vận tải trọn gói cho cá nhân và doanh nghiệp.",
    image: "https://cdn.dailyxe.com.vn/image/toyota-prius-2025-338480j.jpg?ref=bonboncar.vn",
    icon: Truck
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Hướng dẫn thủ tục sang tên xe ô tô mới nhất 2025 theo Thông tư 24",
    summary: "Chi tiết các bước làm thủ tục sang tên đổi chủ, giữ biển số định danh và mức lệ phí trước bạ mới nhất người dùng cần lưu ý.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    date: "12/10/2024"
  },
  {
    id: "2",
    title: "Cách rút hồ sơ gốc xe máy khác tỉnh nhanh chóng, giá rẻ",
    summary: "Những giấy tờ cần chuẩn bị và quy trình rút hồ sơ gốc xe máy để chuyển vùng về TP.HCM đơn giản nhất dành cho bạn.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    date: "15/10/2024"
  },
  {
    id: "3",
    title: "Lỗi xe không chính chủ và mức phạt mới nhất năm 2025",
    summary: "Phân tích quy định xử phạt đối với hành vi không làm thủ tục sang tên xe và cách giải quyết cho xe mua bán qua nhiều đời chủ.",
    image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/01/07/loi-xe-khong-chinh-chu.jpg",
    date: "20/10/2024"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Dịch vụ sang tên xe tại SangTenXe24h mất bao lâu?",
    answer: "Thông thường quy trình mất từ 3-5 ngày làm việc. Chúng tôi có gói dịch vụ hỏa tốc hỗ trợ lấy kết quả ngay trong ngày đối với hồ sơ đầy đủ."
  },
  {
    question: "Tôi ở xa có thể làm dịch vụ rút hồ sơ gốc không?",
    answer: "Có, chúng tôi nhận hồ sơ online và hỗ trợ rút gốc tại tất cả các tỉnh thành trên cả nước, sau đó gửi hồ sơ về tận nhà qua bưu điện an toàn."
  },
  {
    question: "Chi phí sang tên xe ô tô trọn gói là bao nhiêu?",
    answer: "Chi phí bao gồm thuế trước bạ (nhà nước thu) và phí dịch vụ của SangTenXe24h. Liên hệ hotline 0123 456 789 để nhận báo giá chi tiết cho từng loại xe."
  }
];
