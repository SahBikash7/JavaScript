// We have two types of memories:
// 1.Stack =>(For Primitive Datatypes)
// 2.Heap => (For Reference DataTypes)

// whenever stack memory is used then the variable which u have declared ,u are provided with a copy of it and whenever heap memory is used then u r provided with the original data(object,array) and every change u do is done in the original data..

let namm = "Bikash";
let anotherName = namm;
anotherName = "Aakash";

// console.log(namm);
// console.log(anotherName);

// so hamileh anotherName lai namm ko Reference deko thim haina tara anotherName lai reassign garda namm ma kehi change bhayena kina bhane jun reference namm ko hamileh anotherName lai deko thim that was actually a copy of namm tyahi bhayera original namm ma kehi change aayena eventhough we changed anotherName... This is the concept of stack memory

const person1 = {
  name: "Bikash",
  age: 90,
  id: 75432,
};
const person2 = person1;
person2.name = "Aayush";

console.log(person1);
console.log(person2);

// so person1 is declared and it points to the data  which we assigned in the heap meomry, since it is stored in the heap memory.person2 is again declared and we have given the reference of person1 and since the data is in heap memory so person2 also points to the same original data in the heap memory, as a result if we perform any changes in person2,the same change will also occur in person1 as they both point at the same data in the heap memory.
