interface IHighlightProps {
  className?: string;
}

function useHighlight({ className }: IHighlightProps) {
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;

    const escapedSearchTerm = escapeRegExp(searchTerm.trim());
    const regex = new RegExp(`(${escapedSearchTerm})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <b className={className} key={index}>
          {part}
        </b>
      ) : (
        part
      ),
    );
  };

  return highlightSearchTerm;
}

export default useHighlight;
