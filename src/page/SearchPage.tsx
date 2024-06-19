import SearchBar from "../components/SearchBar";
import SEARCH_RESULTS from "../constants/searchResult";
import useSearchBar from "../hooks/useSearchBar";

function SearchPage() {
  const { searchValue, handleSearchValueChange } = useSearchBar();

  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;

    const escapedSearchTerm = escapeRegExp(searchTerm);
    const regex = new RegExp(`(${escapedSearchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <b className="text-20pxr text-cyan-700 tablet:text-24pxr" key={index}>
          {part}
        </b>
      ) : (
        part
      ),
    );
  };

  const filteredResults = SEARCH_RESULTS.filter((result) =>
    result.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <main>
      <section className="mx-auto mt-46pxr max-w-4xl px-16pxr flex-row-center">
        <SearchBar onSearchValueChange={handleSearchValueChange} />
      </section>
      <section className="mx-auto mt-46pxr max-w-6xl px-16pxr">
        {searchValue && (
          <h1 className="text-32pxr font-bold text-gray-800">
            검색 결과: {filteredResults.length}개
          </h1>
        )}
        <div className="mx-auto mt-24pxr tablet:w-full tablet:max-w-2xl">
          <ul className="flex flex-col gap-12pxr">
            {filteredResults.map((result, index) => (
              <li
                key={index}
                className="h-60pxr cursor-pointer content-center rounded-2xl bg-cyan-500 px-12pxr py-8pxr text-center text-18pxr text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-cyan-600 active:scale-100 active:bg-cyan-700 tablet:text-22pxr"
              >
                {highlightSearchTerm(result, searchValue)}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default SearchPage;
