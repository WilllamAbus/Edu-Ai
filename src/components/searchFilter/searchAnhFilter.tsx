import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
  onSearchChange: (value: string) => void;
  onPriceFilterChange: (range: string) => void;
};

const SearchAndFilter: React.FC<Props> = ({ onSearchChange, onPriceFilterChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleFilter = (range: string) => {
    onPriceFilterChange(range);
  };

  return (
    <div className="flex items-center gap-4 px-4">
      {/* Thanh tìm kiếm */}
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchInput}
        placeholder="Tìm kiếm theo tên sản phẩm..."
        className="p-2 border rounded flex-grow max-w-[85%]"
      />

      {/* Bộ lọc giá với dropdown */}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center gap-1 px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">
          Lọc giá
          <ChevronDownIcon className="w-4 h-4" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-40 bg-white rounded shadow z-10">
          {["Tất cả", "<500K", "500K–1 triệu", ">1 triệu"].map((item) => (
            <Menu.Item key={item}>
              {({ active }) => (
                <button
                  onClick={() => handleFilter(item)}
                  className={`block w-full px-4 py-2 text-left ${
                    active ? "bg-blue-100" : ""
                  }`}
                >
                  {item}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default SearchAndFilter;
