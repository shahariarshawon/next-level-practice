// null type

const getUser = (input: string | null) => {
  input ? console.log("From DB: ", input) : console.log("From DB All users: ");
};
getUser("");

// unknown type
const discountCalculator = (amount: number | string | unknown) => {
  if (typeof amount === "number") {
    let discountedPrice1 = amount * 0.1;
    console.log(discountedPrice1);
  } else if (typeof amount === "string") {
    let [mainAmount] = amount.split(" ");
    // console.log(discountedPrice2);
    const discountedPrice2: number = Number(mainAmount) * 0.1;
    console.log(discountedPrice2);
  } else {
    console.log("Chinte partechina eta k...");
  }
};

discountCalculator(190000);
discountCalculator("190000 taka");
discountCalculator();

// never -- who will never ever return anything

const showError = (error: any): never => {
  throw new Error();
};

showError(24);
