
import { Car, FileText, Repeat, ShieldCheck, Truck, ClipboardList, PenTool, Search, Landmark, Shield } from 'lucide-react';
import { ServiceItem, NavItem, BlogPost, FaqItem } from './types';

export const COMPANY_PHONE = "0373 823 874";
export const COMPANY_EMAIL = "sangtenxe24@gmail.com";
export const COMPANY_ADDRESS = "288H Nơ Trang Long, Phường 12, Quận Bình Thạnh, TP. Hồ Chí Minh";

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", path: "/" },
  { label: "Giới thiệu", path: "/gioi-thieu" },
  {
    label: "Dịch vụ",
    path: "/dich-vu",
    children: [
      { label: "Sang tên xe ô tô & máy", path: "/dich-vu/sang-ten" },
      { label: "Rút hồ sơ gốc toàn quốc", path: "/dich-vu/rut-ho-so" },
      { label: "Cấp lại đăng ký xe bị mất", path: "/dich-vu/cap-doi" },
      { label: "Dịch vụ làm lại biển số", path: "/dich-vu/bien-so" },
      { label: "Cà số máy & Đăng kiểm", path: "/dich-vu/dang-kiem" },
      { label: "Giám định & Kiểm tra gốc", path: "/dich-vu/giam-dinh" },
    ]
  },
  { label: "Công cụ", path: "/tu-van" },
  { label: "Blog xe", path: "/blog" },
  { label: "Liên hệ", path: "/lien-he" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "sang-ten",
    title: "Dịch vụ sang tên xe ô tô và xe máy tại TPHCM uy tín",
    description: "Chuyên thủ tục sang tên xe ô tô, xe máy trọn gói tại TP.HCM. Hỗ trợ làm giấy tờ sang tên chính chủ theo Thông tư 24, giữ biển số định danh, xử lý hồ sơ sang tên xe cũ không chính chủ hỏa tốc trong 3-5 ngày làm việc.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", 
    icon: Car
  },
  {
    id: "rut-ho-so",
    title: "Dịch vụ rút hồ sơ gốc xe ô tô, xe máy toàn quốc hỏa tốc",
    description: "Nhận rút hồ sơ gốc xe ô tô và xe máy cho khách hàng mua xe biển tỉnh về TP.HCM. Cam kết dịch vụ rút hồ sơ gốc nhanh chóng, giá rẻ, đúng pháp luật, hỗ trợ thủ tục từ xa không cần đánh xe đi.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800", 
    icon: FileText
  },
  {
    id: "giam-dinh",
    title: "Kiểm tra gốc gác & Giám định tình trạng xe cũ",
    description: "Dịch vụ check gốc xe, kiểm tra tình trạng pháp lý, tranh chấp hoặc xe tang vật. Hỗ trợ giám định tình trạng kỹ thuật và định giá xe cũ chính xác trước khi giao dịch.",
    image: "https://mercedesphumyhung.com.vn/wp-content/uploads/2024/10/audi2.jpg",
    icon: Search
  },
  {
    id: "cap-doi",
    title: "Làm lại đăng ký xe bị mất - Cấp lại Cà vẹt xe hỏa tốc",
    description: "Bạn cần làm lại giấy tờ xe bị mất? Dịch vụ cấp lại đăng ký xe (cà vẹt) bị mất nhanh nhất tại TPHCM. Thủ tục đơn giản, không cần chờ đợi lâu, giao kết quả tận nơi cho khách hàng.",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
    icon: Repeat
  },
  {
    id: "bao-hiem",
    title: "Bảo hiểm xe cơ giới & Phí đường bộ hỏa tốc",
    description: "Cung cấp các loại bảo hiểm bắt buộc TNDS, bảo hiểm thân vỏ (hai chiều) cho ô tô và xe máy. Hỗ trợ đóng phí đường bộ, xử lý bồi thường bảo hiểm nhanh chóng.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    icon: Shield
  },
  {
    id: "dang-kiem",
    title: "Cà số khung số máy tại nhà & Hỗ trợ Đăng kiểm xe",
    description: "Cung cấp thợ cà số khung số máy chuyên nghiệp tận nhà tại TP.HCM cho ô tô và xe máy. Hỗ trợ đưa xe đi đăng kiểm, xử lý các lỗi đăng kiểm nhanh chóng, đảm bảo xe lưu hành đúng quy định.",
    image: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785d45dd972489b8630a840aa247a41769c10d29387ecb7ce29b9c4716bcb8e355f7c8ad008c57673c6c1582d78e0e2a8301039b653f7228b0042d704e48349bb259c6b3b4e826641f2a5ff22c7cd96e7c0/5c13378d057c480a8e98c64a413e20613682161636517973.jpg",
    icon: PenTool
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Quy trình sang tên xe ô tô 2025 và lệ phí sang tên xe cũ",
    summary: "Hướng dẫn chi tiết thủ tục sang tên xe ô tô, xe máy theo Thông tư 24 mới nhất. Cách tính thuế trước bạ sang tên xe cũ và các bước giữ biển số định danh.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    date: "20/02/2025"
  },
  {
    id: "2",
    title: "Thủ tục rút hồ sơ gốc xe máy, ô tô chuyển vùng tỉnh",
    summary: "Mua xe tỉnh về TPHCM cần những giấy tờ gì? Dịch vụ rút hồ sơ gốc toàn quốc hướng dẫn quy trình rút hồ sơ xe nhanh nhất để không bị trễ hạn sang tên.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    date: "18/02/2025"
  },
  {
    id: "3",
    title: "Mất đăng ký xe (cà vẹt) làm lại ở đâu? Thủ tục cấp lại cà vẹt",
    summary: "Dịch vụ làm lại cà vẹt xe bị mất uy tín tại TPHCM. Hướng dẫn chuẩn bị hồ sơ xin cấp lại giấy tờ xe khi không chính chủ hoặc mất hồ sơ tự quản.",
    image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/01/07/loi-xe-khong-chinh-chu.jpg",
    date: "15/02/2025"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Dịch vụ sang tên xe ô tô TPHCM giá bao nhiêu?",
    answer: "Chi phí sang tên xe bao gồm thuế trước bạ 2% (đối với xe cũ), lệ phí biển số và phí dịch vụ làm hồ sơ của SangTenOtoSG. Vui lòng liên hệ để nhận báo giá chi tiết cho từng loại xe."
  },
  {
    question: "Rút hồ sơ gốc xe ô tô mất bao lâu?",
    answer: "Thời gian rút hồ sơ gốc xe thường từ 5-10 ngày tùy tỉnh thành. SangTenOtoSG có dịch vụ rút hồ sơ gốc hỏa tốc giúp quý khách tiết kiệm thời gian tối đa."
  },
  {
    question: "Làm lại cà vẹt xe bị mất có cần mang xe đến không?",
    answer: "Đối với dịch vụ làm lại đăng ký xe bị mất tại SangTenOtoSG, chúng tôi hỗ trợ xử lý hồ sơ nhanh gọn, trong nhiều trường hợp khách hàng không cần phải đánh xe đến cơ quan công an."
  }
];
