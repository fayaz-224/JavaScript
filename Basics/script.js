//alert("I am popup!");
let name = prompt("Hello! pls enter your Name.");  //to take input from user
console.log(name);


// Variables
console.log("------Variables-----");
name = "fayaz";
age = 27
salary = undefined
isEmployed = true
console.log("Employed", isEmployed);
console.log("salary is", salary);


// DataTypes - var is not recommended
console.log("------DataTypes-----");
let a1 = "tree"  //string
let a2 = 2.5;  //number
let a3;  //Undefined
let a4 = BigInt("1234");
const student =    //Object
{
    fullName: "Sk Fayaz",
    age: 27,
    cgpa: 8.5
};
console.log(student.age);  //or console.log(student["age"]);
console.log(typeof student);

//we can access these .js data in browser console as well
a1  // gives a1 variable value
typeof a1 // gives a1 dataType


// Operators
console.log("------Operators-----");
let a = 5;  //number
let b = "5";  //string
console.log("a==b", a==b);  //returns true, becoz js internally converts strings to numbers, if String contains numbers only. To avoid this use stricter versions of assignment operators ===, !==


// Loops
console.log("------loops-----");
for(let i=0;i<3;i++){
    console.log("for loop\nexample for next line");  //next line
}
//for-of -> used for Arrays and Strings only
for(let i of a1){  //iterate -> characters
console.log("for-of i=", i);
}
//for-in -> used for Objects
for(let i in student){  //iterate -> key values
console.log("key=", i, " val=", student[i]);
}


// Strings
console.log("------Strings-----");
let str = "hello";
console.log("1st char =", str[0]);
//Template literals - special strings
let out = `This is template literal ${1+2+3}`;
console.log(out);
let output = `student ${student.fullName} got ${student.cgpa} cgpa`;  //better than console.log("student", student.fullName," got", student.cgpa," cgpa");
console.log(output);


// Arrays
console.log("------Arrays-----");
let heroes = ["Iron man", "Thor", "Spider man"];
console.log(heroes);
console.log(heroes.length);
//typeof heroes -> gives Object, As array is a spcl type of object


// Functions - we can return any type
console.log("------Functions-----");
function myFun(){
    console.log("Welcome to functions! - timer 4sec");
    return 1;
}
function myDemo(a, b){
    console.log("SUM in functions =", a+b);
}
myDemo(1,4);  //function call
setTimeout(myFun, 4000);  //waits for 4s before calling function


// DOM
console.log("------DOM-----");
window.console.log("Window DOM Hello");  //by default all commands comes under window object. JS already know this so no need to add thia everytime
console.log(window.document);  //just prints html inside
console.dir(window.document);  // prints object. we prefer this for document objects

document.body.style.background = "orange";  //to dynamically update using js

let id = document.getElementById("myId");
console.dir(id);
let classes = document.getElementsByClassName("myClass");
console.dir(classes);
let tags = document.getElementsByTagName("p");  //gives all paragraphs
console.dir(tags);

let h = document.querySelector("p");  //returns only first element of type para(p)
h.innerText = h.innerText + " :)";  // concat innerText and given text
console.dir(h.innerText);

let bt = document.createElement("button");  //create element
bt.id = "btn";
bt.innerText = "click me!";
bt.style.background = "green"
console.log(bt);
let para = document.querySelector("body");
para.append(bt);  //add element


// Event
console.log("------Event-----");
let btn = document.querySelector("#btn");
btn.onclick = () => {
    console.log("Button clicked!");
}
btn.ondblclick = () => {
    console.log("Button double clicked!");
}

let btn1 = document.querySelector("#fact");  //fetching by id
const handler = () => {console.log("Event Listener handler callback!");};
btn1.addEventListener("click", handler);  //if theres a click on Get a Fact button, call handler function


// Classes & Objects
console.log("------Classes & Objects-----");
const employeeTax = {
    calcTax() {
        console.log("tax rate is 10%");
    }
};

const karanArjun = {
    age: 25,
    salary: 50000
}
karanArjun.__proto__ = employeeTax;  //adding employee obj as a prototype to KaranArjun object. becoz we don't want to rewrite the code, so we set it as prototype
console.log(karanArjun);


// Async
console.log("------Async-----");


// API
const URL = "https://cat-fact.herokuapp.com/facts";
let res = fetch(URL);  //fetch is used mostly for GET requests - sync way
console.log(res);

const getFacts = async () => {   //async way
    let response = await fetch(URL);
    console.log(response.status);
    let data = await response.json();  //gives proper body
    console.log(data);
    console.log(data[0].text);
};
getFacts();