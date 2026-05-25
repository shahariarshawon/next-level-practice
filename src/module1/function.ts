//normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(20, 30));

const sum = (num1: number, num2: number): number => {
  return num1 - num2;
};

console.log(sum(10, 18));

const poorUser = {
  name: "shahariar",
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};
console.log(poorUser.addBalance(12000));

const arr: number[] = [10, 20, 30, 40, 50];

const result: number[] = arr.map((el: number): number => {
  return el * el;
});
console.log(result);
