// ternary
const age: number = 24;
age > 24
  ? console.log("Tmr biyer boyosh hoyeche")
  : console.log("Tmr biyer boyosh hoynai baba");

//   nullish coalescing works only for null and undefined
const theme = undefined;
const defaultTheme = theme ?? "Light theme";

console.log(defaultTheme);

// optional Chaining
const userData: {
  name: string;
  age: number;
  address: {
    city: string;
    road?: string;
  };
} = {
  name: "Shawon",
  age: 24,
  address: {
    city: "Dhaka",
  },
};

console.log("User address", userData.address.road);
