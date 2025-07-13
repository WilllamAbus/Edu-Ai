import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold font-shopee">
          EduAI
        </Link>

        {/* Search */}
        {/* <div className="flex items-center bg-white rounded overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Tìm kiếm khoá học, tài liệu..."
            className="px-3 py-2 w-full text-black outline-none"
          />
          <button className="px-3 bg-primary text-white">
            <AiOutlineSearch size={20} />
          </button>
        </div> */}

        {/* Yêu thích */}
        <Link
          to="/favorites"
          className={`flex items-center gap-2 ${location.pathname === "/favorites" ? "text-yellow-300" : ""}`}
        >
          <AiOutlineHeart size={22} />
          <span>Yêu thích</span>
        </Link>
      </div>
    </header>
  );
}
