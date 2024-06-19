import { useState } from "react";

function useSearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  return { searchValue, handleSearchValueChange };
}

export default useSearchBar;
