export const useSortedOptions = (options) => {
  const optionsWithFirstLetter = options.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const sortedOptions = optionsWithFirstLetter.sort(
    (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
  );

  const groupBy = (option) => option.firstLetter;

  return {
    sortedOptions,
    groupBy,
  };
};
