import React from "react";
import { Product } from "../types/productType";
import { StarRating } from "./ratinngStart/rating";
type ModalProps = {
  product: Product | null;
  onClose: () => void;
};
const images = import.meta.glob("../assets/products/*.{jpg,png,jpeg}", { eager: true, as: "url" });
const ProductModal: React.FC<ModalProps> = ({ product, onClose }) => {
  if (!product) return null;
  const imageUrl = images[`../assets/products/${product.image}`] as string;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-[90%] max-w-xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-lg">X</button>
        <img src={imageUrl} alt={product.name} className="w-full  h-[400px] object-cobject-cover object-center rounded" />

        <h2 className="mt-4 text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.shortDesc}</p>
             <StarRating rating={product.rating} />
        <p className="mt-2">{product.longDesc}</p>
        <p className="mt-2 text-red-500 font-bold">{product.price.toLocaleString()}₫</p>
        {/* Thêm mô tả dài, đánh giá nếu cần */}
      </div>
    </div>
  );
};

export default ProductModal;
