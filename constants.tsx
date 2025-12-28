
import { Car, FileText, Repeat, ShieldCheck, Truck, ClipboardList, PenTool, Search, Landmark, Shield, Hash } from 'lucide-react';
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
      { label: "Sang tên ô tô trọn gói", path: "/dich-vu/sang-ten" },
      { label: "Rút hồ sơ gốc hỏa tốc", path: "/dich-vu/rut-ho-so" },
      { label: "Làm giấy tờ xe ô tô", path: "/dich-vu/giay-to" },
      { label: "Cấp lại biển số ô tô", path: "/dich-vu/bien-so" },
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
    title: "Dịch vụ sang tên ô tô trọn gói tại TPHCM nhanh nhất",
    description: "Bạn đang tìm mua xe cũ sang tên ở đâu? SangTenXe24h cung cấp dịch vụ sang tên xe ô tô sài gòn chuyên nghiệp. Hỗ trợ sang tên ô tô không cần đi lại, giải quyết hồ sơ sang tên ô tô không chính chủ theo quy định mới nhất 2025.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", 
    icon: Car
  },
  {
    id: "rut-ho-so",
    title: "Dịch vụ hồ sơ xe ô tô & Rút hồ sơ gốc toàn quốc hỏa tốc",
    description: "Chuyên làm hồ sơ xe ô tô, rút hồ sơ gốc xe biển tỉnh về TP.HCM. Dịch vụ rút hồ sơ gốc nhanh chóng, đúng pháp luật, cam kết bàn giao hồ sơ tận tay khách hàng trong 3-5 ngày làm việc.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800", 
    icon: FileText
  },
  {
    id: "bien-so",
    title: "Cấp lại biển số ô tô & Đổi biển số ô tô TPHCM hỏa tốc",
    description: "Mất biển số ô tô làm lại ở đâu? Chúng tôi hỗ trợ cấp lại biển số ô tô, đổi biển số xe ô tô sài gòn sang biển định danh, đổi biển số ô tô từ biển vuông sang biển dài hoặc ngược lại theo yêu cầu.",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
    icon: Hash
  },
  {
    id: "giay-to",
    title: "Dịch vụ làm giấy tờ xe ô tô Sài Gòn & Cấp lại đăng ký xe",
    description: "Chuyên dịch vụ giấy tờ xe ô tô, làm lại đăng ký xe ô tô bị mất (cà vẹt) nhanh nhất TPHCM. Xử lý mọi rắc rối về giấy tờ xe ô tô cũ, làm hồ sơ xe ô tô trọn gói giá rẻ.",
    image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/01/07/loi-xe-khong-chinh-chu.jpg",
    icon: Repeat
  },
  {
    id: "giam-dinh",
    title: "Kiểm tra gốc gác & Giám định tình trạng pháp lý xe",
    description: "Check gốc xe ô tô, giám định tình trạng tranh chấp, xe tang vật. Tư vấn sang tên ô tô cần giấy tờ gì để đảm bảo an toàn pháp lý tuyệt đối trước khi mua bán.",
    image: "https://mercedesphumyhung.com.vn/wp-content/uploads/2024/10/audi2.jpg",
    icon: Search
  },
  {
    id: "dang-kiem",
    title: "Cà số máy tận nhà & Hỗ trợ Đăng kiểm xe hỏa tốc",
    description: "Thợ cà số khung số máy chuyên nghiệp tận nơi tại Bình Thạnh và TPHCM. Hỗ trợ đưa xe đi đăng kiểm, xử lý lỗi đăng kiểm, đảm bảo xe lưu hành đúng quy định.",
    image: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785d45dd972489b8630a840aa247a41769c10d29387ecb7ce29b9c4716bcb8e355f7c8ad008c57673c6c1582d78e0e2a8301039b653f7228b0042d704e48349bb259c6b3b4e826641f2a5ff22c7cd96e7c0/5c13378d057c480a8e98c64a413e20613682161636517973.jpg",
    icon: PenTool
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Quy trình sang tên ô tô 2025 và chi phí sang tên ô tô thực tế",
    summary: "Hướng dẫn chi tiết sang tên ô tô cần giấy tờ gì, chi phí sang tên ô tô bao gồm những khoản nào và cách thực hiện sang tên ô tô nhanh nhất theo luật mới.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    date: "20/02/2025"
  },
  {
    id: "2",
    title: "Dịch vụ sang tên ô tô TPHCM: Sang tên ô tô mất bao lâu?",
    summary: "Giải đáp thắc mắc về thời gian làm thủ tục sang tên xe ô tô sài gòn. Các bước sang tên ô tô trọn gói giúp bạn tiết kiệm thời gian và công sức đi lại.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    date: "18/02/2025"
  },
  {
    id: "3",
    title: "Mất biển số ô tô làm lại ở đâu? Dịch vụ cấp lại biển số ô tô TPHCM",
    summary: "Thủ tục xin cấp lại biển số ô tô bị mất hoặc bị hỏng. Dịch vụ đổi biển số ô tô tphcm nhanh gọn, lấy biển số mới hỏa tốc trong ngày.",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
    date: "15/02/2025"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Dịch vụ sang tên ô tô TPHCM trọn gói giá bao nhiêu?",
    answer: "Chi phí sang tên ô tô bao gồm thuế trước bạ 2% (xe cũ), lệ phí cấp đổi biển số định danh và phí dịch vụ làm hồ sơ xe ô tô của SangTenOtoSG. Vui lòng liên hệ để nhận báo giá chi tiết."
  },
  {
    question: "Sang tên ô tô mất bao lâu thì xong?",
    answer: "Thông thường thời gian sang tên ô tô tại TPHCM từ 3-5 ngày làm việc. Nếu sử dụng dịch vụ sang tên ô tô nhanh của chúng tôi, thời gian có thể rút ngắn tối đa tùy theo tình trạng hồ sơ."
  },
  {
    question: "Sang tên ô tô không chính chủ cần giấy tờ gì?",
    answer: "Đối với trường hợp sang tên ô tô không chính chủ, bạn cần chuẩn bị giấy tờ mua bán (nếu có) hoặc kê khai theo Thông tư 24. SangTenOtoSG sẽ hỗ trợ bạn làm hồ sơ xe ô tô trọn gói để xử lý nhanh nhất."
  },
  {
    question: "Mất biển số ô tô làm lại có nhanh không?",
    answer: "Dịch vụ cấp lại biển số ô tô tphcm của chúng tôi giúp quý khách nhận biển số mới chỉ sau vài ngày làm việc, thủ tục đơn giản, không cần mang xe đến trực tiếp."
  }
];
