import { Product } from "../../types/productType";

 export const mockProducts: Product[] = [
  {
    id: 1,
    name: "TOEIC 550",
    price: 499000,
    image: "k1.png",
    shortDesc: "Lộ trình TOEIC từ cơ bản lên 550 điểm.",
    longDesc: "Khóa học TOEIC 550 giúp bạn nắm vững các kỹ năng Nghe, Đọc, Ngữ pháp căn bản, từ vựng thông dụng nhất trong đề thi TOEIC.",
    views: 1234,
    likes: 100,
    rating: 4.5,
  },
  {
    id: 2,
    name: "TOEIC 650",
    price: 599000,
    image: "k2.png",
    shortDesc: "Luyện thi TOEIC trung cấp.",
    longDesc: "Khóa TOEIC 650 dành cho người đã có nền tảng, tập trung vào luyện đề nâng cao, chiến lược làm bài, mẹo và tips hữu ích.",
    views: 980,
    likes: 80,
    rating: 4.7,
  },
  {
    id: 3,
    name: "IETS",
    price: 399000,
    image: "k3.png",
    shortDesc: "Khóa học IELTS toàn diện.",
    longDesc: "Chương trình học IELTS bao gồm 4 kỹ năng Listening, Reading, Writing và Speaking, với bài tập thực hành và chấm điểm chi tiết.",
    views: 755,
    likes: 65,
    rating: 4.3,
  },
  {
    id: 4,
    name: "KET",
    price: 699000,
    image: "k4.png",
    shortDesc: "Khóa học KET Cambridge.",
    longDesc: "Học từ vựng, ngữ pháp và luyện đề theo khung chuẩn Cambridge dành cho KET. Thích hợp cho học sinh tiểu học và trung học.",
    views: 540,
    likes: 72,
    rating: 4.2,
  },
  {
    id: 5,
    name: "PET",
    price: 799000,
    image: "k5.png",
    shortDesc: "Khóa PET Cambridge trung cấp.",
    longDesc: "Nâng cao kỹ năng Reading, Writing, Listening với các bài luyện tập chuẩn Cambridge PET format.",
    views: 1200,
    likes: 150,
    rating: 4.6,
  },
  {
    id: 6,
    name: "VSTEP",
    price: 299000,
    image: "k6.png",
    shortDesc: "Khóa luyện thi VSTEP.",
    longDesc: "Phù hợp cho sinh viên, giáo viên cần bằng VSTEP tiếng Anh theo chuẩn khung Châu Âu, với các đề luyện cập nhật mới nhất.",
    views: 400,
    likes: 34,
    rating: 4.1,
  },
  {
    id: 7,
    name: "Writing",
    price: 899000,
    image: "k7.png",
    shortDesc: "Chuyên sâu Writing tiếng Anh.",
    longDesc: "Tập trung hoàn toàn vào kỹ năng Writing cho tất cả các cấp độ thi: TOEIC, IELTS, TOEFL, Cambridge.",
    views: 670,
    likes: 58,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Chuyên ngành",
    price: 350000,
    image: "k8.png",
    shortDesc: "Tiếng Anh chuyên ngành kỹ thuật.",
    longDesc: "Khóa học cung cấp từ vựng, mẫu câu, và hội thoại thực tế trong môi trường kỹ thuật, CNTT, xây dựng,...",
    views: 890,
    likes: 110,
    rating: 4.4,
  },
  {
    id: 9,
    name: "Tiếng Anh Cơ bản 1",
    price: 450000,
    image: "k9.png",
    shortDesc: "Ngữ pháp và từ vựng cơ bản.",
    longDesc: "Phù hợp với người mới bắt đầu học tiếng Anh, làm quen với cấu trúc câu, thì cơ bản và hội thoại hàng ngày.",
    views: 890,
    likes: 110,
    rating: 4.0,
  },
  {
    id: 10,
    name: "Tiếng Anh Cơ bản 2",
    price: 550000,
    image: "k10.png",
    shortDesc: "Tiếp tục nâng cao cơ bản.",
    longDesc: "Học tiếp các mẫu câu, chủ đề giao tiếp phổ biến, luyện nghe hiểu với video thực tế, bài kiểm tra định kỳ.",
    views: 890,
    likes: 110,
    rating: 4.1,
  },
];


export async function getProducts(): Promise<Product[]> {
  return Promise.resolve(mockProducts);
}





export function getSuggestionsByBehavior(viewedIds: string[], likedIds: string[]) {
  const priorityList = mockProducts.filter(
    (p) => viewedIds.includes(String(p.id)) || likedIds.includes(String(p.id))
  );

  const remainingList = mockProducts.filter(
    (p) => !viewedIds.includes(String(p.id)) && !likedIds.includes(String(p.id))
  );

  // Ưu tiên sản phẩm liên quan, sau đó trộn phần còn lại nếu thiếu
  const finalList = [
    ...priorityList,
    ...remainingList.sort(() => 0.5 - Math.random()),
  ];

  return finalList.slice(0, 4);
}
