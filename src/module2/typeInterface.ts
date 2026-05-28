// Type Interface means declaring a structure for a object

interface IUser {
  name: string;
  age: number;
  address: {
    division: string;
    city: string;
    area: string;
  };
  mainSalary: number;
  otherAllowances: number;
  totalSalary(): number;
}

const user: IUser = {
  name: "Al Shahariar Arafat Shawon",
  age: 24,
  address: {
    division: "Dhaka",
    city: "Dhaka",
    area: "Mollartek",
  },
  mainSalary: 27899,
  otherAllowances: 3579,
  totalSalary() {
    return this.mainSalary + this.otherAllowances;
  },
};

console.log(`${user.name}'s total salary is ${user.totalSalary()} taka`);

// we can extend the interface
interface IPerson {
  name: string;
}
interface IEmployee {
  salary: number;
}
interface IDeveloper extends IPerson, IEmployee {
  skils: string[];
}

const developerInfo: IDeveloper = {
  name: "Shahariar Arafat",
  salary: 27999,
  skils: ["TypeScript", "PostgreSQL", "Nestjs", "Docker"],
};

console.log(developerInfo);
