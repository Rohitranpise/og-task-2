//1
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);
setTimeout(() => {
  console.log(4);
}, 0);
console.log(6);

/*output: 
1 synch process
3 synch process
6 synch process
4 it will execute before the first timeout function, becase second parameter (time) in ms is zero.
2 after 1 seconds it will execute
*/


//2

/*
difference-
1. For-loop : for loop is an iteration through an array and executes the code repeatedly
            until the conditon is matched. 
2.ForEach : The forEach() method executes a provided function once for each array element.
3.map : The map() method creates a new array populated with the results of calling a 
            provided function on every element in the calling array.
4.Filter: filtered down to just the elements from the given array that pass the test
        implemented by the provided function. 
5.Reduce: The reduce() method executes a user-supplied "reducer" callback function on each element
          of the array, in order, passing in the return value from the calculation on the preceding element.
*/ 


//3
let array = [
  {
    Id: 1,
    Name: "pranit",
    isVeg: true,
    Age: 20,
  },
  {
    Id: 2,
    Name: "rohit",
    isVeg: false,
    Age: 18,
  },
  {
    Id: 3,
    Name: "Urvesh",
    isVeg: false,
    Age: 25,
  },
  {
    Id: 4,
    Name: "pritam",
    isVeg: true,
    Age: 26,
  },
];

//Find all name of persons who are veg
const vegFun = array.filter((element) => {
  if (!element.isVeg) {
    console.log(element.Name);
  }
});

//Find all persons name who are veg and age is above 15
const vegAge = array.filter((el) => {
  if (el.isVeg && el.Age > 22) console.log(el.Name);
});
