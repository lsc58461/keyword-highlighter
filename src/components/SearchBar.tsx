import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface ISearchBarProps {
  onSearchValueChange: (value: string) => void;
}

function SearchBar({ onSearchValueChange }: ISearchBarProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchValueChange(searchValue);
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      onSearchValueChange("");
    }
  }, [searchValue, onSearchValueChange]);

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        className="peer w-420pxr rounded-2xl bg-gray-100 py-12pxr pl-12pxr pr-100pxr text-22pxr font-bold text-gray-700 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 active:scale-100 active:bg-gray-300"
        type="search"
        title="search bar"
        placeholder="검색을 해보세요!"
        onChange={handleValueChange}
      />
      <button
        className="absolute right-3pxr top-1/2 w-82pxr -translate-y-1/2 transform rounded-2xl bg-cyan-400 px-12pxr py-8pxr text-22pxr font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.16] hover:bg-cyan-500 active:scale-100 active:bg-cyan-600 peer-hover:translate-x-8pxr peer-hover:scale-105 peer-active:-translate-x-1pxr peer-active:scale-100"
        type="submit"
      >
        검색
      </button>
    </form>
  );
}

export default SearchBar;
