// spread operator
const userInfo: {
  name: string;
  age: number;
} = {
  name: "Shahariar",
  age: 24,
};
const otherInfo: {
  address: string;
} = {
  address: "Uttara, Dhaka",
};

const customerInfo = { ...userInfo, ...otherInfo };
console.log(customerInfo);
