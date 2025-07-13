import React, { useState } from "react";
import { Product } from "../types/productType";
import ProductCard from "./productCart";
import { getSuggestions } from "../services/products/produtCartApi";

const images = import.meta.glob("../assets/products/*.{jpg,png,jpeg}", { eager: true, query: "?url", import: "default" });

export default function SuggestionBox({ userId, onView }: { userId: string; onView: (product: Product) => void }) {
  const [suggestions, setSuggestions] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSuggestions = () => {
    try {
      setLoading(true);
      setError("");
      const data = getSuggestions(userId);
      setSuggestions(data);
    } catch (err: any) {
      setError(err.message || "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4">
      <button
        onClick={fetchSuggestions}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Gợi ý sản phẩm phù hợp
      </button>

      {loading && <p className="mt-2">Đang tải gợi ý...</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}

      {suggestions && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {suggestions.map((p) => {
            const imageUrl = images[`../assets/products/${p.image}`] as string;
            return (
              <div key={p.id} className="bg-white rounded shadow p-4 relative">
                <img
                  src={imageUrl}
                  alt={p.name}
                  className="w-full h-[350px] object-cover rounded"
                />
                <h2 className="mt-2 font-semibold">{p.name}</h2>
                <p>{p.shortDesc}</p>
                <p className="text-red-500 font-bold">{p.price.toLocaleString()}₫</p>
                <button
                  onClick={() => onView(p)}
                  className="mt-2 bg-primary text-white px-3 py-1 rounded"
                >
                  Xem chi tiết
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
