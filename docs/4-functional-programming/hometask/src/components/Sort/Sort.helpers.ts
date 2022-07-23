import { Row } from "../../../types";

export const sortByPaymentDesc = (data: Row[]): Row[] =>
  [...data]?.sort((a, b) => b.lastPayments - a.lastPayments);

export const sortByPaymentAsc = (data: Row[]): Row[] =>
  sortByPaymentDesc(data)?.reverse();
