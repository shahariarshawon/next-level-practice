let bazarList: string[] = ["eggs", "gorur bichi"];

bazarList.push("rimjhim");
console.log(bazarList);

// neither string nor number
const address: (string | number)[] = [12, "shaharon", 12];

// tuple array
// here more than 2 value cant be assignable
let couple: [number, number] = [12, 12];

console.log(address, " ", couple);
