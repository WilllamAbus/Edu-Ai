import React, { useEffect, useState } from "react";
import Slider from "../components/sliders/sliderHome";
import ProductCard from "../components/productCart";
import ProductModal from "../components/productModal";
import SearchAndFilter from "../components/searchFilter/searchAnhFilter";
import { getProducts } from "../services/products/produtCartApi";
import { Product } from "../types/productType";
import { useViewed } from "../contexts/viewContexts";
import { useFavorite } from "../contexts/favoriteContext";
import SuggestionBox from "../components/suggestionBox";
import ChatbotSuggestion from "../components/chatboxMock";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [modalProd, setModalProd] = useState<Product | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("Tất cả");

  const { addViewed, viewedList } = useViewed();
  const { favorites } = useFavorite();

  const handleView = (product: Product) => {
    addViewed(String(product.id));
    setModalProd(product);
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    let temp = products.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (priceRange === "<500K") {
      temp = temp.filter((p) => p.price < 500000);
    } else if (priceRange === "500K–1 triệu") {
      temp = temp.filter((p) => p.price >= 500000 && p.price <= 1000000);
    } else if (priceRange === ">1 triệu") {
      temp = temp.filter((p) => p.price > 1000000);
    }

    setFilteredProducts(temp);
  }, [searchTerm, priceRange, products]);

  const viewedProducts = products.filter((p) =>
    viewedList.includes(String(p.id))
  );

  return (
    <div className="space-y-4 max-w-[1400px] mx-auto px-4">
      <Slider />

      <SearchAndFilter
        onSearchChange={setSearchTerm}
        onPriceFilterChange={setPriceRange}
      />


      {/* Danh sách sản phẩm lọc */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} onView={handleView} />
        ))}
      </div>

      {/* Modal sản phẩm */}
      <ProductModal
        product={modalProd}
        onClose={() => setModalProd(null)}
      />
      {/* Gợi ý thông minh */}
         <SuggestionBox
  products={products}
  viewedIds={viewedList}
  likedIds={favorites}
   onView={handleView}
 />
      {/* Lịch sử xem */}
      {viewedProducts.length > 0 && (
        <section className="p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold mb-2">Lịch sử xem</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {viewedProducts.map((p) => (
              <ProductCard key={p.id} product={p} onView={handleView} />
            ))}
          </div>
        </section>
      )}

      {/* Chat AI tư vấn sản phẩm */}
      <ChatbotSuggestion onView={handleView} />
    </div>
  );
}




