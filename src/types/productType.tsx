export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  shortDesc: string;
  longDesc: string;
  views: number;
  likes: number;
  rating: number; // Thêm trường đánh giá (rating từ 1–5 sao)
};

