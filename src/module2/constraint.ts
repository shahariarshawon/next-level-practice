type TStudent = {
  id: number;
  name: string;
  email: string;
  phone: string;
  class: number;
};

function studentInfo<T extends TStudent>(info: T) {
  return {
    course: "Phitron Batch 7",
    data: {
      ...info,
    },
  };
}

const student1 = {
  id: 24103019,
  name: "Shawon",
  isMarried: true,
  email: "shahariarshawon.dev@gmail.com",
  phone: "+880144211222122221",
  hasWatch: true,
  class: 1,
};
const student2 = {
  id: 24109024,
  name: "Farzana",
  isMarried: true,
  email: "ahmedfarzana7739@gmail.com",
  phone: "+880144211222122221",
  class: 1,
  isPresent: true,
};
console.log(studentInfo(student1));
console.log(studentInfo(student2));

//here we can see that some students are informing their name and some students are not which will cause problem.
// to avoid this error we have to set some info as must given and this is call;ed constraint.
