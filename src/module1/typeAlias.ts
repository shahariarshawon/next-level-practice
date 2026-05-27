type TUser = {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  university: string;
};

const user1: TUser = {
  firstName: "Al Shahariar",
  middleName: "Arafat",
  lastName: "Shawon",
  age: 24,
  university:
    "IUBAT- International University of Business Agriculture and Technology",
};

const user2: TUser = {
  firstName: "Al Shahariar",
  middleName: "Arafat",
  lastName: "Shawon",
  age: 24,
  university:
    "IUBAT- International University of Business Agriculture and Technology",
};

const user3: TUser = {
  firstName: "Al Shahariar",
  middleName: "Arafat",
  lastName: "Shawon",
  age: 24,
  university:
    "IUBAT- International University of Business Agriculture and Technology",
};

// ekhane 3 ta user er jonno same same 3 ta interface use korte hoiche why not using one common type for all users as all types are same. this is called type alias.

console.log("User 1: ", user1);
console.log("User 2: ", user2);
console.log("User 3: ", user3);
