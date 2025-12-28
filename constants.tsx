
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
    title: "Dịch vụ sang tên ô tô trọn gói tại TPHCM chuyên nghiệp",
    description: "Bạn đang thắc mắc **sang tên ô tô cần giấy tờ gì**? SangTenXe24h cung cấp **dịch vụ sang tên xe ô tô Sài Gòn** trọn gói từ A-Z. Chúng tôi hỗ trợ xử lý mọi hồ sơ khó như **sang tên ô tô không chính chủ**, sang tên qua nhiều đời chủ theo quy định mới 2025. Cam kết không nợ thuế, không tranh chấp, bàn giao cà vẹt mới tận nhà chỉ sau vài ngày làm việc.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", 
    icon: Car
  },
  {
    id: "rut-ho-so",
    title: "Dịch vụ rút hồ sơ gốc ô tô toàn quốc hỏa tốc",
    description: "Bạn cần **rút hồ sơ gốc xe ô tô** để di chuyển từ tỉnh về TPHCM hoặc ngược lại? Chúng tôi chuyên cung cấp **dịch vụ làm hồ sơ xe ô tô** hỏa tốc, rút hồ sơ gốc xe biển tỉnh về Sài Gòn nhanh nhất. Đội ngũ chuyên viên sẽ thay mặt quý khách nộp hồ sơ tại cơ quan công an, xử lý nhanh chóng các lỗi phạt nguội hoặc nợ thuế phí đường bộ.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800", 
    icon: FileText
  },
  {
    id: "bien-so",
    title: "Cấp lại biển số ô tô & Đổi biển số định danh hỏa tốc",
    description: "**Mất biển số ô tô làm lại ở đâu?** Chúng tôi hỗ trợ **cấp lại biển số ô tô TPHCM** hỏa tốc trong 24h. Ngoài ra, SangTenXe24h còn nhận dịch vụ **đổi biển số xe ô tô Sài Gòn** sang biển định danh, đổi biển số vuông sang biển dài hoặc ngược lại theo Thông tư 24. Thủ tục đơn giản, không cần mang xe trực tiếp đến trụ sở.",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
    icon: Hash
  },
  {
    id: "giay-to",
    title: "Dịch vụ giấy tờ xe ô tô Sài Gòn & Cấp lại đăng ký xe",
    description: "Mất cà vẹt xe ô tô làm lại thế nào? SangTenXe24h chuyên **dịch vụ giấy tờ xe ô tô**, cấp lại đăng ký xe bị mất nhanh chóng nhất tại Bình Thạnh và toàn TPHCM. Chúng tôi giúp bạn chuẩn bị bộ hồ sơ xe ô tô đầy đủ, thay mặt đi nộp hồ sơ, giúp bạn tiết kiệm thời gian và tránh các sai sót không đáng có khi làm thủ tục hành chính.",
    image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/01/07/loi-xe-khong-chinh-chu.jpg",
    icon: Repeat
  },
  {
    id: "giam-dinh",
    title: "Giám định pháp lý & Check gốc xe ô tô toàn quốc",
    description: "Trước khi mua xe cũ, việc **check gốc xe ô tô** là vô cùng quan trọng. Dịch vụ của chúng tôi giúp quý khách giám định tình trạng pháp lý, kiểm tra xem xe có đang tranh chấp, cầm cố ngân hàng hay là tang vật vụ án hay không. Tư vấn sang tên ô tô cần giấy tờ gì để đảm bảo an toàn 100% trước khi xuống tiền giao dịch.",
    image: "https://mercedesphumyhung.com.vn/wp-content/uploads/2024/10/audi2.jpg",
    icon: Search
  },
  {
    id: "dang-kiem",
    title: "Cà số khung số máy & Hỗ trợ đăng kiểm xe TPHCM",
    description: "Dịch vụ **thợ cà số khung số máy tận nhà** tại Bình Thạnh, Quận 1, Quận 7... Chuyên nghiệp, sạch sẽ, chuẩn hồ sơ đăng ký. Đồng thời, chúng tôi hỗ trợ đưa xe đi đăng kiểm, xử lý các lỗi kỹ thuật bị từ chối đăng kiểm, đảm bảo xe của bạn luôn lưu hành đúng pháp luật với chi phí rẻ nhất.",
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
