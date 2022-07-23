import type {
  Image,
  User,
  Account,
  UserFields,
  ImageFields,
  AccountFields,
  Payment,
  Row,
} from "../types";

export const getLastPayment = (payments: Payment[]): number =>
  payments.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))[0]
    ?.totalSum || 0;

const getUserFields = (user: User): UserFields => {
  const { username, country, name } = user;
  return { username, country, name };
};

const getImageFields = (image: Image): ImageFields => {
  const { url: avatar } = image;
  return { avatar };
};

const getAccountFields = (account: Account): AccountFields => {
  const { posts, payments } = account;
  const lastPayments = getLastPayment(payments);
  return { posts, lastPayments };
};

const findById = <T extends Account | Image>(id: string, arr: T[]): T =>
  arr.find((item) => item.userID === id);

const getRow = (user: User, account: Account, image: Image): Row => {
  return {
    ...getUserFields(user),
    ...getImageFields(image),
    ...getAccountFields(account),
  };
};

export const dataConverter = (
  users: User[],
  accounts: Account[],
  images: Image[]
): Row[] =>
  users.map((user) =>
    getRow(user, findById(user.userID, accounts), findById(user.userID, images))
  );
