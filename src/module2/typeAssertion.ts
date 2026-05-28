// type assertion means typescript acts an variable as unknown or any but i am sure that this variable later I declared a specific tyope value like string, number.
// "as" are used to show

let value: unknown = "";
value = "shawon"; //typescript can't recognize value as string even after string value are assigned to the variable and that is the reason string methods are not working.

// but when I use "as"
// value as string;
console.log((value as string).length);
