const user = {
  firstName: "shahariar",
  age: 23,
  isMarried: true,
};

console.log(user);

const user1: {
  firstName: string;
  middleName?: string;
  lastName: string;
  organization: "Programming Hero"; //object literal type [cant be rewrite the value]
  isMarried: boolean;
} = {
  firstName: "Shahariar",
  lastName: "Shawon",
  organization: "Programming Hero",
  isMarried: true,
};

console.log(user1);
