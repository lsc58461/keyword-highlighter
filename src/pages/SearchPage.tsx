import SearchBar from "../components/SearchBar";
import SEARCH_RESULTS from "../constants/searchResult";
import useHighlight from "../hooks/useHighlight";
import useSearchBar from "../hooks/useSearchBar";

function SearchPage() {
  const { searchValue, handleSearchValueChange } = useSearchBar();
  const highlightSearchTerm = useHighlight({
    className: "text-20pxr text-cyan-700 tablet:text-24pxr",
  });

  const isSearchValue = searchValue.trim().length > 0;

  const filteredResults = isSearchValue
    ? SEARCH_RESULTS.filter((result) =>
        result.toLowerCase().includes(searchValue.trim().toLowerCase()),
      )
    : SEARCH_RESULTS;

  return (
    <main>
      <section className="mx-auto mt-46pxr max-w-4xl px-16pxr flex-row-center">
        <SearchBar onSearchValueChange={handleSearchValueChange} />
      </section>
      <section className="mx-auto mt-46pxr max-w-6xl px-16pxr">
        {isSearchValue && (
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
                {isSearchValue
                  ? highlightSearchTerm(result, searchValue)
                  : result}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default SearchPage;
