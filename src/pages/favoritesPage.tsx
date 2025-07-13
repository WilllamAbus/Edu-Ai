import React, { useEffect, useState } from "react";
import { useFavorite } from "../contexts/favoriteContext";
import { getProducts } from "../services/products/produtCartApi";
import ProductCard from "../components/productCart";
import { Product } from "../types/productType";

const FavoritePage = () => {
  const { favorites } = useFavorite();
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setAllProducts);
  }, []);

const favoriteProducts = allProducts.filter((p) => favorites.includes(String(p.id)));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sản phẩm yêu thích</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {favoriteProducts.map((p) => (
          <ProductCard key={p.id} product={p} onView={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
