function sum<K, V>(key: K, value: V) {
  return {
    key,
    value,
  };
}

const result = sum<number, string>(20, "Shawon");

console.log(result);

const result1 = sum<string, number>("shawon", 25);
console.log(result1);

// using real life backend
interface ApiResponse<T> {
  status: boolean;
  data: T;
}

interface IUser {
  name: string;
  isMarried: boolean;
  age: number;
}

const response: ApiResponse<IUser> = {
  status: false,
  data: {
    name: "Shawon",
    isMarried: true,
    age: 24,
  },
};
console.log(response.status ? "Status ok" : "Status not ok", response.data);

// generics with function
function getIdentity<T>(value: T) {
  return console.log("Valu is: ", value);
}

const res = getIdentity<string>("Shawon");
const res1 = getIdentity<number>(2026);
const res2 = getIdentity<boolean>(true);
