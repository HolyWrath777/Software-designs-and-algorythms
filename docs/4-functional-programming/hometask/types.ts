export interface Image {
  userID: string;
  url: string;
}

export interface User {
  userID: string;
  username: string;
  country: string;
  name: string;
}

export interface Payment {
  totalSum: number;
  date: string;
}

export interface Account {
  userID: string;
  posts: number;
  payments: Payment[];
}

export interface UserFields {
  username: string;
  country: string;
  name: string;
}

export interface ImageFields {
  avatar: string;
}

export interface AccountFields {
  posts: number;
  lastPayments: number;
}

export interface Row {
  avatar: string;
  username: string;
  country: string;
  name: string;
  lastPayments: number;
  posts: number;
}
