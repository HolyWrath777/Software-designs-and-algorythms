import { Row } from "../../../types";

export const getSearchResults = (data: Row[], searchValue: string): Row[] =>
  data.filter(
    (row) =>
      row.country.toLowerCase().includes(searchValue.toLowerCase()) ||
      row.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      row.username.toLowerCase().includes(searchValue.toLowerCase())
  );
