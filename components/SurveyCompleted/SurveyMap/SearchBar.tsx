"use client";

import { useState } from "react";
import { SearchBarProps } from "../types";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch, mapSearchPlaceholder }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      onSearch(trimmedQuery);
      setSearchQuery('')
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="absolute left-1/2 top-4 -translate-x-1/2 z-1"
      role="search"
      aria-label="Postcode search"
    >
      <div className="flex items-center gap-2 rounded-lg bg-white border border-grey-500 pl-5 pr-2 h-12 w-78.25 md:w-[min(92vw,28.3125rem)]">
        <input
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={mapSearchPlaceholder}
          aria-label={mapSearchPlaceholder}
          className="flex-1 bg-transparent outline-none text-[1rem] font-semibold text-grey-500 placeholder:text-grey-300 text-ellipsis overflow-hidden whitespace-nowrap"
        />
        <button
          type="submit"
          className="grid place-items-center size-5 text-grey-500 hover:bg-grey-100 transition-colors shrink-0"
          aria-label="Search"
        >
          <FaSearch className="fill-yellow-900 w-3.75 h-3.75" />
        </button>
      </div>
    </form>
  );
}

