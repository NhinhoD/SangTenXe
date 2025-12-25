
import { Car, FileText, Repeat, ShieldCheck, Truck, ClipboardList, PenTool } from 'lucide-react';
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
    ]
  },
  { label: "Tư vấn", path: "/tu-van" },
  { label: "Blog xe", path: "/blog" },
  { label: "Liên hệ", path: "/lien-he" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "sang-ten",
    title: "Dịch vụ sang tên xe ô tô và xe máy tphcm hỏa tốc",
    description: "Chuyên thực hiện thủ tục sang tên xe ô tô, sang tên xe máy trọn gói tại TP.HCM. Hỗ trợ sang tên chính chủ theo Thông tư 24, giữ biển số định danh, xử lý hồ sơ khó, xe qua nhiều đời chủ nhanh gọn trong 3-5 ngày.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800", 
    icon: Car
  },
  {
    id: "rut-ho-so",
    title: "Rút hồ sơ gốc xe ô tô, xe máy toàn quốc uy tín",
    description: "Dịch vụ rút hồ sơ gốc xe ô tô và xe máy cho xe chuyển vùng tỉnh về TP.HCM hoặc ngược lại. Cam kết rút hồ sơ gốc xe nhanh chóng, đúng pháp luật, hỗ trợ cà số khung số máy tận nơi cho khách hàng.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800", 
    icon: FileText
  },
  {
    id: "cap-doi",
    title: "Làm lại giấy tờ xe - Cấp lại Cà vẹt bị mất",
    description: "Bạn bị mất đăng ký xe? SangTenXe24h cung cấp dịch vụ làm lại cà vẹt xe bị mất, cấp đổi đăng ký xe hư hỏng hỏa tốc. Thủ tục đơn giản, không cần chờ đợi lâu tại cơ quan công an.",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
    icon: Repeat
  },
  {
    id: "bien-so",
    title: "Dịch vụ làm lại biển số xe & Biển số định danh",
    description: "Tư vấn và thực hiện thủ tục biển số định danh 2025. Hỗ trợ làm lại biển số xe bị mất, mờ số, gãy biển. Ép biển số chống nước inox cao cấp bảo vệ biển số bền đẹp.",
    image: "https://mercedesphumyhung.com.vn/wp-content/uploads/2024/10/audi2.jpg",
    icon: ShieldCheck
  },
  {
    id: "dang-kiem",
    title: "Cà số khung số máy tận nhà & Hỗ trợ Đăng kiểm",
    description: "Cung cấp thợ cà số khung số máy chuyên nghiệp tận nhà tại TP.HCM. Hỗ trợ đưa xe đi đăng kiểm, xử lý các lỗi đăng kiểm nhanh chóng cho xe ô tô con, xe tải.",
    image: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785d45dd972489b8630a840aa247a41769c10d29387ecb7ce29b9c4716bcb8e355f7c8ad008c57673c6c1582d78e0e2a8301039b653f7228b0042d704e48349bb259c6b3b4e826641f2a5ff22c7cd96e7c0/5c13378d057c480a8e98c64a413e20613682161636517973.jpg",
    icon: PenTool
  },
  {
    id: "van-tai",
    title: "Phù hiệu xe tải & Giấy phép kinh doanh vận tải",
    description: "Đăng ký phù hiệu xe hợp đồng, xe tải hỏa tốc. Tư vấn thành lập hộ kinh doanh cá thể, HTX vận tải và cấp giấy phép kinh doanh vận tải bằng ô tô trọn gói.",
    image: "https://cdn.dailyxe.com.vn/image/toyota-prius-2025-338480j.jpg?ref=bonboncar.vn",
    icon: Truck
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Thủ tục sang tên xe ô tô mới nhất 2025: Những điều cần biết",
    summary: "Hướng dẫn chi tiết quy trình sang tên xe ô tô, sang tên xe máy theo Thông tư 24. Cách giữ biển số định danh và bảng thuế trước bạ xe cũ mới nhất.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    date: "20/02/2025"
  },
  {
    id: "2",
    title: "Dịch vụ rút hồ sơ gốc xe máy khác tỉnh: Quy trình và Lệ phí",
    summary: "Làm thế nào để rút hồ sơ gốc xe nhanh nhất khi mua xe biển tỉnh? SangTenXe24h chia sẻ kinh nghiệm rút hồ sơ gốc toàn quốc an toàn, giá rẻ.",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800",
    date: "18/02/2025"
  },
  {
    id: "3",
    title: "Mất cà vẹt xe phải làm sao? Dịch vụ làm lại giấy tờ xe uy tín",
    summary: "Thủ tục xin cấp lại đăng ký xe bị mất tại TP.HCM. Giải pháp làm lại cà vẹt xe nhanh gọn không cần chính chủ đi cùng cho các trường hợp đặc biệt.",
    image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/01/07/loi-xe-khong-chinh-chu.jpg",
    date: "15/02/2025"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Chi phí sang tên xe ô tô tphcm là bao nhiêu?",
    answer: "Chi phí bao gồm thuế trước bạ (2% giá trị xe cũ), lệ phí cấp đổi biển số và phí dịch vụ sang tên xe của SangTenXe24h. Liên hệ hotline để nhận báo giá chính xác theo loại xe."
  },
  {
    question: "Rút hồ sơ gốc xe máy mất bao lâu?",
    answer: "Thông thường quy trình rút hồ sơ gốc xe tại tỉnh mất từ 5-7 ngày làm việc. Tại TP.HCM, chúng tôi có thể hỗ trợ rút hỏa tốc trong 2-3 ngày."
  },
  {
    question: "Sang tên xe không chính chủ có làm được không?",
    answer: "Được. Theo Thông tư 24, chúng tôi hỗ trợ làm thủ tục sang tên xe cho các trường hợp xe mua bán qua nhiều đời chủ mà không tìm được chủ cũ."
  }
];
