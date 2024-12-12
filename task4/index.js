const person = {
    firstName: "Юрій",
    lastName: "Чулков",
    age: 30
};

person.email = "yuriichulkov@college.udhtu.edu.ua";

delete person.age;

console.log(person);
