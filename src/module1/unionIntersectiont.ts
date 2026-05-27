// union -- OR/ |
type TUserRole = "Admin" | "Vendor" | "Customer";

const userDashboard = (role: TUserRole) => {
  if (role === "Admin") {
    console.log("Show admin dashboard");
  } else if (role === "Vendor") {
    console.log("Show vendor dashboard");
  } else {
    console.log("Show customer dashboard");
  }
};
userDashboard("Admin");

// intersection -- and/ &
type TEmployee = {
  employeeId: string;
  name: string;
  age: number;
  department: string;
};

type TLeader = {
  teamName: string;
  teamSize: number;
};

const teamLeader: TEmployee & TLeader = {
  employeeId: "abc123",
  name: "Al Shahariar Arafat Shawon",
  age: 24,
  department: "Backend",
  teamName: "SoftHub",
  teamSize: 14,
};

console.log("Team leader Info: ", teamLeader);
