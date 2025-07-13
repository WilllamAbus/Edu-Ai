import React from "react";
import { Product } from "../types/productType";
import { useFavorite } from "../contexts/favoriteContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { StarRating } from "./ratinngStart/rating";
const images = import.meta.glob("../assets/products/*.{jpg,png,jpeg}", { eager: true, as: "url" });

type Props = {
  product: Product;
  onView: (product: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onView }) => {
  const imageUrl = images[`../assets/products/${product.image}`] as string;

  const { favorites, toggleFavorite } = useFavorite();
  const isFavorite = favorites.includes(String(product.id));

  return (
    <div className="bg-white rounded shadow p-4 relative">
      <button
      onClick={() => toggleFavorite(String(product.id))}

        className="absolute top-2 right-2 text-red-500 text-2xl"
      >
        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>

   <img
  src={imageUrl}
  alt={product.name}
  className="w-full h-[250px] object-cover rounded"
/>

      <h2 className="mt-2 font-semibold">{product.name}</h2>
           <StarRating rating={product.rating} />
      <p>{product.shortDesc}</p>
      <p className="text-red-500 font-bold">{product.price.toLocaleString()}₫</p>

      <div className="mt-2 flex items-center gap-2">
        <button
          onClick={() => onView(product)}
          className="bg-primary text-white px-3 py-1 rounded"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
