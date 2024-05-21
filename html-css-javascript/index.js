let name = "Kailen";
console.log(name);

const lastName = "Mitchell";
console.log(lastName);

let address = "5 Ripen Park"

let age = 31;

let uniqueKey = Symbol('key');
let uniqueKey2 = Symbol('key');

console.log(uniqueKey == uniqueKey2);

console.log(typeof age);

let hello;

console.log(hello);

/* Deep copy normal vars */
let x = 5;
let y = x;
y =10;

/* Arrays pass by reference so not deep copy, mutable */
let arr = [1,2,3];
let arr2 = arr;
arr2.push(4);
console.log(arr2)

console.log(`name is ${name}`)
console.log(name.indexOf('a'))
console.log(name.substring(1,3))
console.log(name[0])

//operators
console.log("operators: ");
let remainder = 13 % 5; // expect 3
console.log(remainder);

//strict equals === which checks to see if they have the same type as well
//does varible have same value? : ==

//and : &&
//or : ||

//conditionals

if (true === true){
    //do something
}

const task = {
    completed: false
};

switch(task.completed){
    case true:
        console.log("true");
        break;
    case false:
        console.log("false");
    case null:
        break
    default:
        break
};

console.log(task.completed ? "True" : "False");


/* Nonprimative data types */

//Objects

const person = {
    firstName:"kailen",
    lastName:"mitchell",
    address:{
        streetname:"main st",
        streetnum:"2134"
    },
    gender:"female",
    getFullName: ()=>{
        return person.firstName+ " "+person.lastName
    }

};


console.log(person.getFullName())
console.log(person.firstName)


//Arrays

let arr1 = new Array(1,2,3,4,5);
let arr3 = [1,2,3,4,5];
console.log(arr3.length);

arr3.push("strawberry");
const popped = arr3.pop();

arr3.shift();


//Higher order arrays
const filterFunction = (num)=> {
    return num==3;
};
let newArray = arr1.filter(filterFunction);
console.log(`filtered array: ${newArray}`);

/*

const getCompletedTodos = (todos)=>{
    return todos.filter((todo)=>{
        return todo.completed == true;
    });
};

const newTodos = todos.map(x=>{
    return {
        id: todo.id,
        title: todo.title,
        completed:todo.completed,
        priority:"Low"
    }
});

*/
//for loop

for (i=0;i<arr3.length;i++){
    console.log(arr3[i])
}

for (let num of arr3){
    console.log(num);
}
/*
array.forEach(function(num, i, arr3) {
    // Your code here
  });
*/

//functions

function addFactor(val){
    return val * 4;
};


//the dom

const onSubmit = (e) => {
    e.preventDefault();
    console.log("on submit");
    const fistName = document.getElementsByName("firstName")[0].value;
    const lastName = document.getElementByName("lastName").value;
    const id1 = document.getElementById("id1").value;
};





// Fibonacci Sequence
fibs = [0,1]
for (i=2;i<10;i++){
    fibs[i] = fibs[i-1] + fibs[i-2]
}
console.log(fibs)