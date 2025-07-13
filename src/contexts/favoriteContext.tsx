import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type FavoriteContextType = {
  favorites: string[];
  toggleFavorite: (productId: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];

      toast.success(
        prev.includes(productId) ? "Đã bỏ yêu thích!" : "Đã thêm vào yêu thích!"
      );

      return updated;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error("useFavorite must be used within FavoriteProvider");
  return context;
};
