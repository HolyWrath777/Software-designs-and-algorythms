import { Row } from "../../../types";

export const OPTIONS = [
  {
    title: "Without posts",
  },
  {
    title: "More than 100 posts",
  },
];

export const updateFilters = (
  selectedFilters: string[],
  title: string
): string[] =>
  selectedFilters.includes(title)
    ? selectedFilters.filter((item) => item !== title)
    : [...selectedFilters, title];

const optionsConditionsMapping = (row: Row, option: string) => {
  return {
    [OPTIONS[0].title]: row.posts === 0,
    [OPTIONS[1].title]: row.posts >= 100,
  }[option];
};

export const filterData = (filters: string[], data: Row[]): Row[] | undefined =>
  data?.reduce((acc, row) => {
    filters.forEach((option) => {
      if (optionsConditionsMapping(row, option)) {
        acc.push(row);
      }
    });
    return acc;
  }, [] as Row[]);
