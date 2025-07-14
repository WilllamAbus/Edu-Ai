import React, { useState } from "react";
import { Product } from "../types/productType";
import ProductCard from "./productCart";
import { getSuggestionsByBehavior } from "../services/products/produtCartApi";

export default function SuggestionBox({
  products,
  viewedIds,
  likedIds,
  onView,
}: {
  products: Product[];
  viewedIds: string[];
  likedIds: string[];
  onView: (product: Product) => void;
}) {
  const [suggestions, setSuggestions] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSuggestions = () => {
    try {
      setLoading(true);
      setError("");
      const suggestedData = getSuggestionsByBehavior(viewedIds, likedIds);
      const suggestedProducts = products.filter((p) =>
        suggestedData.map((s) => s.id).includes(p.id)
      );
      setSuggestions(suggestedProducts);
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
          {suggestions.map((p) => (
            <ProductCard key={p.id} product={p} onView={onView} />
          ))}
        </div>
      )}
    </div>
  );
}
