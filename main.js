// console.log("test")

/*console.log("test");
console.log("test2");*/

// ****************Variable**************

// var name;
// name = "Woody";

// console.log(name);

// let name;

// name = "Woody";

// console.log(name);

// const name = "Woody";

// console.log(name)

// let name = "Woody",
//   sirname = "Taecha",
//   age = 5;

// {
//   var yo = "Woody";
// }

// console.log(yo);
// function sayj() {
//   var yo = "Woody";
// }

// console.log(yo);

// Case sensitive

// console.log("test" === "test");

// Number

// let number = 4;
// let numberFloat = 4.3;

// console.log(typeof numberFloat);

// String

// "Woody"; //double quote
// "Woody";

// const place = "the sea";

// console.log(`Woody is going to ${place}`);

// let isDone = true;

// let isMore = 5 > 4;

// console.log(isMore);

// const nothing = null;

// console.log(nothing);

// let test = undefined;

// let test;

// console.log(typeof test === "undefined");

// console.log(typeof 5 === "number");

// ****************String conversion**************

// const num = 5;

// console.log(typeof num);
// console.log(typeof String(num));
// console.log(typeof ("" + num));
// console.log(typeof `${num}`);

// let x = undefined;

// console.log(String(x));

// ****************Number conversion**************

// let a = 5;
// let b = undefined;
// let c = "7";
// let d = "";

// console.log(Math.max(a, b, c, false));

// console.log(Math.min("8", 3, d));

// ****************Boolean conversion**************

// console.log(Boolean());

// Operator

// let num = 2;

// num++;

// console.log(num);

// String concat

// const a = 2;

// const b = "Hello";

// console.log(a + b);

// console.log("azzzz" > "azzz")

// console.log("1" != 1);

// console.log(null === undefined);

// Logical Operator

// if (1 > 0) console.log("1 is more than 0");

// let year = prompt("ปีใดที่ ES 2015 ได้ออกสู่สาธารณะ");

// if (year === "2015") {
//   alert("You are right");
// } else if (Number(year) > 2015) {
//   alert("A little to far");
// } else if (Number(year) < 2015) {
//   alert("A little too low");
// } else {
//   alert("value is invalid");
// }

// let message;

// let age = prompt("How old are you");

// let message = age >= 18 ? "you are adult" : "you are teen";

// if (age >= 18) {
//   message = "You are adult";
// } else {
//   message = "You are teen";
// }

// alert(message);

// const entered = prompt("Enter your contact or cancel");

// const contact = entered ?? "Newbie";

// console.log(contact);

// switch (entered) {
//   case "1111":
//     console.log("Hello 1111");
//     break;
//   case "2222":
//     console.log("Hello 2222");
//     break;
//   default:
//     console.log("None");
// }

// let a = "" || 0;

// console.log(a);

// let b = null && 1;
// console.log(null)

// Loop

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   alert(i);
// }

// console.log("done");

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   alert(i);
// }

// console.log("done");

// Function

// let message = "Hello everyone";

// function showMessage() {
//   let message = "Hello again";
//   alert(message);
// }

// showMessage();

// alert(message);

// Parameter

// function showMessage(from, text = "no text") {
//   return from + ": " + text;

//   //   alert(from + ": " + text);
// }

// let sentense = showMessage("John");

// alert(sentense);

// let sum = (a) => a * 2;

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert("You agreed");
// }

// function showCancel() {
//   alert("You cenceled the execution");
// }

// ask("Do you agree", showOk, showCancel);

// window.confirm("Are you confirm");

// Object

// let user = {
//   name: "John",
//   age: 30,
// };

// alert(user.name);

// user.address = "Thailand";

// user["isMarried"] = true;

// delete user.name;

// alert(user["name"]);

// const username = "codecamp";
// const email = "cc@gamil.com";

// const user = {
//   username,
//   email,
// };

// // console.log("birthDate" in user);

// for (let key in user) {
//   console.log(user[key]);
// }

// Store by ref

// let a = "Hello";

// let b = a;

// // console.log(b);

// b = "Hello2";

// console.log(b);
// console.log(a);

// let user = {
//   name: "John",
// };

// let admin = user;

// admin.name = "Doe";

// // console.log(user);
// // console.log(admin);

// console.log(user === admin);

// let user = {
//   name: "John",
//   age: 30,
//   sayHi: function () {
//     alert(this.name);
//   },
//   //   address: {
//   //     province: "Bangkok",
//   //   },
// };

// // let clone = {};

// // for (let key in user) {
// //   clone[key] = user[key];
// // }

// const admin = {};

// Object.assign(admin, user);

// console.log(user === admin);

// user.sayHi = function () {
//   alert(this.name);
// };

// console.log(user?.address?.province);

// const num = 255;

// console.log(num.toString());

// const float = 3.4444;

// console.log(Math.trunc(float));

// console.log(isFinite("Hello"));

// 'I\'m a hero'

// const message = "friendHello my friend";

// console.log(message.charAt(4));

// const idx = message.indexOf("friend", 6);

// console.log(idx);

// console.log(message.includes("myyy"));

// console.log(message.startsWith("friend"));

// const subStr = message.slice(0, 6);

// console.log(subStr);

// console.log(message.substring(6, 2));

// console.log("a" > "A");

// console.log("azzzz" > "azzz");

// console.log(1 == "1");

// console.log(1 === "1");

// console.log(null == undefined);

// console.log(null === undefined);

// Conditional

// let year = prompt("In which year was ECMA-2015 published");

// if (year === "2015") {
//   alert("You are right");
// } else if (year > 2015) {
//   alert("Too late");
// } else if (year < 2015) {
//   alert("Too early");
// } else {
//   alert("Invalid value");
// }

// let message;

// let age = prompt("How old are you");

// if (age >= 18) {
//   message = "You are adult";
// } else {
//   message = "You are teen";
// }

// let message = age >= 18 ? "You are adult" : "You are teen";

// alert(message);

// Nullish coalescing

// let entered = prompt("Enter contact person or press cancel");

// let contactPerson =
//   entered !== null && entered !== undefined ? entered : "Unknown";

// let contactPerson = entered ?? "Unknown";

// alert(contactPerson);

// let age = Number(prompt("How old are you"));

// if (age === 34) {
//   alert("too young");
// } else if (age === 35) {
//   alert("Exactly");
// } else if (age === 36) {
//   alert("too old");
// } else {
//   alert("Not close");
// }

// let age = prompt("How old are you");

// switch (age) {
//   case "34":
//     alert("Too young");
//   // break;
//   case "35":
//     alert("exactly");
//   // break;
//   case "36":
//     alert("Too old");
//   // break;

//   default:
//     alert("not close");
// }

// let num = prompt("Enter you number");

// switch (num) {
//   case "1":
//   case "2":
//     alert("too low");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     alert("exeactly");
//     break;
// }

// let a = 1 || 2 || 0;

// console.log(a);

// let a = null || 2 || 7;

// console.log(a);

// let a = "" || undefined || 0;

// console.log(a);

// let a = "" && undefined && 0;

// console.log(a);

// let a = 2 && undefined && 7;

// console.log(a);

// let a = "code" && 1 && 2;

// console.log(a);

// Loop

// let i = 0;

// while (i < 3) {
//   console.log(i);
//   //   i++;
//   i = i + 1;
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     continue;
//   }
//   console.log(i);
// }

// let userName = "John";

// Functoin declaration

// function showMessage(from, text = "no text") {
//   alert(from + " " + text);
// }

// showMessage("John", "Hello");

// function sum(a, b) {
//   return a + b;
// }

// let total = sum(5, 10);

// alert(total);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   }

//   return false;
// }

// const isAdult = checkAge(13);

// alert(isAdult);

// function sayHello() {
//   alert("Hello");
//   return;
// }

// const text = sayHello();

// alert(text);

// const sayHello = function () {
//   alert("Hello");
// };

// sayHello();

// const sum = function (a, b) {
//   return a + b;
// };

// const total = sum(5, 10);

// alert(total);

// sayHi("John");

// function sayHi(name) {
//   alert("Hello" + name);
// }

// const sayHi = function (name) {
//   alert("Hello" + name);
// };

// sayHi("John");

// const sum = (a, b) => a + b;

// const multiply = (a, b) => a * b;

// let calcBMI = (weight, height) => {
//   const heightSqure = height ** 2;

//   const bmi = weight / heightSqure;

//   return bmi;
// };

// const myBMI = calcBMI(75, 178);

// alert(myBMI);

// Callback

// function ask(question, yes, no) {
//   const isConfirm = prompt(question);

//   if (isConfirm === "yes") {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   alert("You agreed");
// }

// function showCancel() {
//   alert("You say no");
// }

// ask("Are you agree", showOk, showCancel);

// {
//   let message = "Hello";
// }

// {
//   let message = "Yo";
// }

// for (let i = 0; i < 3; i++) {
// //   console.log(i);
// }

// console.log(i);

// function sayHi() {
//   if (true) {
//     var pharse = "Hello";
//   }
//   console.log(pharse);
// }

// sayHi();

// console.log(pharse);

// console.log(window);

// let user = {
//   "first-name": "John",
//   age: 30,
// };

// let user = {
//   name: "John",
//   age: 30,
// };

// console.log(user);

// Access property value by . or []

// console.log(user.name);
// console.log(user["name"]);

// const myName = "name";
// user.myName
// console.log(user[myName]);

// Add new property

// user.address = "Thailand";
// user.address = {
//   subDistrict: "Wangmai",
//   district: "Phathumwan",
//   province: "Bangkok",
//   country: "Thailand",
// };

// user["isMarried"] = true;

// console.log(user.isMarried);

// user.isMarried = false;

// console.log(user.isMarried);

// delete user.isMarried;

// console.log(user.isMarried);

// Object property shorthand

// const username = "Codecamp";
// const email = "cc@gmail.com";

// // const user = {
// //   username: username,
// //   email: email,
// // };

// const user = {
//   username,
//   email,
// };

// console.log(user);

// in operator
// const username = "Codecamp";
// const email = "cc@gmail.com";

// const user = {
//   username,
//   email,
//   //   address: undefined,
// };

// // console.log("username" in user);

// console.log(user.address);

// console.log("address" in user);

// Loop trhough object

// for(let i = 0; i < 10; i++) {}

// const user = {
//   username: "Codecamp",
//   email: "cc@gmail.com",
// };

// for (let key in user) {
//   //   console.log(key);
//   console.log(user[key]);
// }

// Copied by reference

// let message = "Hello";

// let phase = message;

// console.log(message);
// console.log(phase);

// phase = "Codecamp";

// console.log(message);
// console.log(phase);

// let user = {
//   name: "John",
// };

// let admin = user;

// console.log(user);
// console.log(admin);

// admin.name = "Doe";

// console.log(user);
// console.log(admin);

// console.log(user === admin);

// let user1 = {};
// let user2 = {};

// console.log(user1 === user2);

// CLone object

// let user = {
//   name: "John",
//   age: 25,
//   address: "Thailand",
// };

// let user2 = {
//   name: "Doe",
//   isMarried: true,
// };

// // let clonedUser = {};

// // for (let key in user) {
// //   clonedUser[key] = user[key];
// // }

// // console.log(clonedUser);
// // console.log(user);

// // clonedUser.name = "Doe";

// // console.log(clonedUser);
// // console.log(user);

// // Object.assign(clonedUser, user, user2);

// // console.log(clonedUser);

// let clonedUser = { ...user, ...user2 };

// console.log(clonedUser);

// let user = {
//   name: "John",
//   age: 30,
//   sayHi: function () {
//     alert("Hello");
//   },
// };

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     alert("Hello");
//   },
// };

// user.sayHi();
// let user = {
//   name: "John",
//   age: 30,
// };

// function greeting() {
//   alert("Hello");
// }

// user.sayHi = greeting;

// user.sayHi();

// Optional chaining

// let user = {
//   name: "John",
//   age: 30,
//   //   address: {
//   //     province: "Bangkok",
//   //     postal: 10400,
//   //   },
// };

// console.log(user.address?.district?.detail);

// Number

// const num = 255;

// toString

// console.log(num.toString());
// console.log(num.toString(2));
// console.log(num.toString(16));

// Math.round

// console.log(Math.floor(3.123));
// console.log(Math.ceil(3.123));
// console.log(Math.round(3.5));
// console.log(Math.trunc(3.533));

// console.log(Math.ceil(3.1));
// console.log(Math.ceil(-1.2));

// console.log(Math.round(3.1));
// console.log(Math.round(3.6));
// console.log(Math.round(-1.1));
// console.log(Math.round(-1.6));
// console.log(Math.round(-1.5));
// console.log(Math.round(1.5));

// console.log(Math.trunc(3.1));
// console.log(Math.trunc(3.6));
// console.log(Math.trunc(-1.1));
// console.log(Math.trunc(-1.6));

// toFixed

// const sum = 0.1 + 0.2;

// console.log(sum);

// console.log(sum.toFixed(5));

// isFinit

// console.log(isFinite("dkfjdkjf"));
// console.log(isFinite(""));
// console.log(isFinite(null));
// console.log(isFinite(undefined));
// console.log(isFinite(Infinity));
// console.log(isFinite(-Infinity));
// console.log(isFinite(NaN));

// isNaN

// console.log(isNaN(null));
// console.log(isNaN(undefined));
// console.log(isNaN("10"));
// console.log(isNaN(""));
// console.log(isNaN("Hello"));

// Math.random

// console.log(Math.random());

// Math.max / Math.min

// console.log(Math.max(4, 8, 9, 8));
// console.log(Math.min(4, 8, 9, 8, 20, 30, 10, 1));

// String

// const text = "Codecamp";

// console.log(text.length);

// Access charactor

// console.log(text[2]);
// console.log(text.charAt(2));

// console.log(text[20]);
// console.log(text.charAt(20));

// for (let char of text) {
//   console.log(char);
// }

// แปลง string ให้เป็นตัวใหญ่ หรือตัวเล็ก

// const text = "Codecamp";

// const input = prompt("Enter codecamp");

// // console.log(text.toLowerCase());
// if (text.toUpperCase() === input.toUpperCase()) {
//   alert("Good");
// }

// indexOf

// const sentense = "Widget with id";

// console.log(sentense.indexOf("with", 11));

// console.log(sentense.lastIndexOf("with"));

// include

// console.log(sentense.includes("Widget", 7));

// startWith

// console.log(sentense.startsWith("idg"));
// console.log(sentense.endsWith("h id"));

// slice

// const sentense = "abcde";

// console.log(sentense.slice(0,2));

// substring

// console.log(sentense.substring(0, 2));
// console.log(sentense.substring(2, 0));

// substr

// console.log(sentense.substr(0, 3));

// console.log(typeof []);

// const fruits = ["Apple", "Orange", "Plum"];

// const number = [1, 2, 3];

// const myobj = [
//   { id: 1, name: "Woody" },
//   { id: 2, name: "John" },
// ];

// const fruits1 = new Array("Apple", "Orange");

// console.log(fruits1);

// console.log(fruits.length);

// fruits[0] = "Mango";

// console.log(fruits);

// fruits[3] = "Pear";

// console.log(fruits);

// const fruits2 = fruits;

// console.log(fruits);
// console.log(fruits2);

// fruits2[1] = "Mango";

// console.log(fruits);
// console.log(fruits2);

// for loop
// const fruits = ["Apple", "Orange", "Plum"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let item of fruits) {
//   console.log(item);
// }

// for (let index in fruits) {
//   console.log(fruits[index]);
// }

// fruits.forEach((item, index, array) => {
//   console.log(array);
// });

// Add remove

// push pop unshift shift

// const fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits.push("Pear"));

// console.log(fruits);

// console.log(fruits.pop());

// console.log(fruits);

// console.log(fruits.unshift("Pear"));

// console.log(fruits);

// console.log(fruits.shift());

// console.log(fruits);

// splice

// const fruits = ["Apple", "Orange", "Plum"];

// // const newFruits = ["Pear", "Mango", "Pomelo", "Grava"];

// // console.log(fruits.splice(1, 1, "Pear", "Mango"));
// // // console.log(fruits.splice(1, 1, ...newFruits));

// // console.log(fruits);

// // slice

// // console.log(fruits.slice(0, 2));

// // console.log(fruits);

// // console.log(fruits.slice());

// // console.log(fruits === fruits.slice());

// // concat

// const arr = [1, 2];
// const arr2 = [3, 4];

// // console.log(arr.concat([3, 4], 5, 6, [7, 8], "test"));

// // console.log(arr);

// const clonedArr = [...arr, ...arr2];

// console.log(clonedArr);

// Searching

// const fruits = ["Apple", "Orange", "Plum", null, NaN];

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Doe" },
// ];

// console.log(fruits.indexOf("Orange"));
// console.log(fruits.indexOf("Orange"));

// console.log(fruits.lastIndexOf("Orange"));

// console.log(fruits.includes("Mango"));

// find findIndex

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Doe" },
//   { id: 3, name: "Donut" },
// ];

// // // console.log(users.find((item, index, array) => item.name === "Jame"));

// // // console.log(users.findIndex((item) => item.name === "Doe"));

// // const targetIndex = users.findIndex((item) => item.name === "Doe");

// // users.splice(targetIndex, 1, { id: 2, name: "Donut" });

// // console.log(users);

// // Filter

// // const userStartWithDO = users.filter((item) => {
// //   return item.name.startsWith("Do");
// // });
// const group1 = users.filter((item) => {
//   return item.id < 3;
// });

// console.log(group1);

// const friends = [4, 8, 2];

// const result = friends.map((item, index, array) => {
//   let multiply = item * 2;

//   return multiply;
// });

// console.log(result);

// const friends = ["Biblo", "Gandalf", "Nazgal"];

// const result = friends.map((el) => el.length);

// console.log(result);

// const friends = [4, 8, 2];

// Sort

// const array = [2, 15, 1];

// // array.sort((a, b) => {
// //   //   if (a > b) return 1;
// //   //   if (a === b) return 0;
// //   //   if (a < b) return -1;

// //   return a - b;
// // });

// array.sort();

// console.log(array);

// Split Join -> Str -> Array -> Str

// let names = "Bangkok, Tak, Nan";

// // 78/265 ถนนช่องนนทรี แขวงบางรัก
// //

// let nameArray = names.split(", ");

// const convertName = nameArray.map((el) => el + "ian");

// let nameStr = convertName.join(", ");

// console.log(nameStr);

// Reduce

// let arr = [2, 3, 5, 7, 11];

// let result = arr.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(result);

// let arr = [
//   { name: "John", gender: "Male" },
//   { name: "Doe", gender: "Female" },
//   { name: "Woody", gender: "Male" },
// ];

// // obj {Male: 2, Female: 1}

// const result = arr.reduce((acc, curr) => {
//   if (acc[curr.gender]) {
//     acc[curr.gender] = acc[curr.gender] + 1;
//   } else {
//     acc[curr.gender] = 1;
//   }

//   return acc;
// }, {});

// console.log(result);

// let user = {
//   name: "John",
//   age: 27,
//   address: { province: "Bangkok", country: "Thailand" },
// };

// const keys = Object.keys(user);

// for (let key of Object.keys(user)) {
//   if (key === "name") {
//     user[key] = "Doe";
//   }
// }

// console.log(user);

// console.log(Object.values(user));

// console.log(Object.entries(user));

// const map = new Map();

// console.log(map);

// map.set("name", "John");
// map.set(true, "boolean");

// console.log(map);

// console.log(map.get("name"));

// let map = new Map([
//   ["1", "str1"],
//   [true, "boolean"],
// ]);

// console.log(map.get("1"));

// const obj = { name: "John", age: 23 };

// const entries = Object.entries(obj);

// const map = new Map(entries);

// // console.log(map);

// const mapEntry = map.entries();

// const objFromMap = Object.fromEntries(mapEntry);

// console.log(objFromMap);

// const mapKeys = map.entries();

// for (let key of mapKeys) {
//   console.log(key);
// }

// const map = new Map();

// map.set("name", "Thomas");
// map.set("age", 31);

// map.set("name", "Dan");

// map.delete("age");

// // console.log(map.has("birthDate"));

// // console.log(map.size);

// map.clear();

// console.log(map);

// Lab2

// const arr = [
//   ["email", "codeisfun@example.com"],
//   ["isActive", true],
// ];

// const map = new Map(arr);

// console.log(map);

// const arr = [1, 2, 3, 1, 1, 2, 3];

// const set = new Set(arr);

// set.delete(1);

// console.log(set);

// console.log(Array.from(set));

// Lab3

// const arr = ["Thailand", "Japan"];

// const set = new Set(arr);

// console.log(set);

// set.add("Thailand").add("Japan").add("India");
// set.add("Japan");
// set.add("Thailand");
// set.add("China");
// set.add("India");
// set.add("Thailand");
// set.add("China");
// set.add("Singapore");
// set.add("Japan");

// set.delete("India");

// console.log(set.size);

// console.log(Array.from(set));

// const arr = ["Dog", "Giraffe", "Bear"];

// const set = new Set(arr);

// console.log(set);

// const values = [1, 4, 8, 2, 1, 3, 3, 8];

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// console.log(unique(values));

// const user1 = {
//   name: "John",
//   sayHi() {
//     console.log(this.name);
//   },
// };

// class User {
//   name = "";
//   age = null;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`My name is ${this.name}, I am ${this.age} years old`);
//   }
// }

// const user1 = new User("John", 30);

// console.log(user1.sayHi());

// class Admin extends User {
//   updatePrice() {
//     console.log("Admin update price");
//   }

//   sayHi() {
//     console.log("Hi Admin");
//   }
// }

// const admin = new Admin("John", 40);

// const user = new User("Doe", 23);

// // admin.sayHi();

// admin.sayHi();

// user.updatePrice();

// class User {
//   name = "";
//   age = null;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`My name is ${this.name}, I am ${this.age} years old`);
//   }
// }

// // class Admin extends User {
// //   constructor(isAdmin, ...args) {
// //     super(...args);
// //     this.isAdmin = isAdmin;
// //   }
// // }
// class Admin extends User {
//   constructor(isAdmin, name, age) {
//     super(name, age);
//     this.isAdmin = isAdmin;
//   }

//   adminSayHi() {
//     console.log("Admin says");
//     super.sayHi();
//   }
// }

// // const user = new User("John", 30);

// const admin = new Admin(true, "John", 30);

// admin.adminSayHi();

// ES6

// Rest operator

// function sum(num1, num2, ...args) {
//   console.log(num1);
//   console.log(num2);
//   console.log(args);

//   return [num1, num2, ...args];
// }

// Spread systax
// console.log(sum(3, 4, 5, 3, 2, 1, 3, 4, 5, 4, 3, 3, 2, 2, 2));

// const array1 = [2, 3, 3, 3, 4, 4];

// const clonedArray1 = [7, ...array1, 4];

// const obj1 = { name: "John", age: 30 };

// const clonedObj1 = { ...obj1, name: "Doe" };

// console.log(clonedObj1);

// let str = "Hello";

// console.log([...str]);

// const set = new Set([3, 4, 2]);

// console.log([...set]);

// Destructuring

// let arr = ["John", "Doe"];

// // let firstName = arr[0];
// // let lastName = arr[1];

// let [firstName, lastName] = arr;

// console.log(firstName);
// console.log(lastName);

// let arr = ["John", "Doe", 27, "Male", "Thailand"];

// let [firstName, , age] = arr;

// console.log(firstName, age);

// const user = {
//   name: "John",
//   age: 30,
// };

// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
// }

// Rest + destructuring

// const arr = ["John", "Erik", "Michael", "Joshua"];

// const [name1, name2, ...rest] = arr;

// console.log(name1);
// console.log(name2);
// console.log(rest);

// default value

// const arr = ["John"];

// const [name = "Guest", surename = "Anonymous"] = arr;

// console.log(name);
// console.log(surename);

// Object destructuring

// let user = {
//   username: "john",
//   email: "john@gmail.com",
//   password: "1234",
// };

// const { email, username, password } = user;

// // console.log(username);
// // console.log(email);
// // console.log(password);

// const { username: myName, email, password } = user;

// console.log(myName);

// let user = {
//   username: "John",
//   password: "1234",
// };

// let { username, email: e = "guest@gmail.com", password } = user;

// console.log(e);

// Rest + destructuring -> Object

// let user = {
//   username: "john",
//   email: "john@gmail.com",
//   password: "1234",
// };

// const { username, ...rest } = user;

// console.log(rest);

// Nested desstrucring

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// let {
//   size: { width, height },
//   items: [item1, item2],
//   extra: isExtra,
// } = options;

// console.log(width);
// console.log(height);
// console.log(item1);
// console.log(item2);
// console.log(isExtra);

// let user = {
//   username: "john",
//   email: "john@gmail.com",
//   password: "1234",
// };

// function showName({ username, email, password }) {
//   console.log(`${username} ${email}`);
// }

// console.log("test1");

// // setTimeout(() => {
// //   console.log("test2");
// // }, 2000);
// const array = [2, 3, 4];

// array.map((el) => {
//   console.log(el);
// });

// console.log("test3");

// const { readFile } = require("fs");
// console.log("test1");
// readFile("hello.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("test3");

// Callback hell

// readFile("hello.txt", "utf-8", (err, data) => {
//   console.log(data);
//   readFile("hello2.txt", "utf-8", (err, data) => {
//     console.log(data);
//     readFile("hello3.txt", "utf-8", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// Promise

// const { readFile } = require("fs");

// const promise = new Promise((resolve, reject) => {
//   //   readFile("hello.txt", "utf-8", (err, data) => {
//   //     if (err) {
//   //       reject(err);
//   //     }
//   //     resolve(data);
//   //   });

//   setTimeout(() => {
//     resolve("Hello codecamp");
//   }, 2000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//     return "Hello codecamp2";
//   })
//   .then((data) => console.log(data));

// function readFilePromise(filename) {
//   return new Promise((resolve, reject) => {
//     readFile(filename, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data);
//     });
//   });
// }

// readFilePromise("hello.txt")
//   .then((data) => {
//     console.log(data);
//     return readFilePromise("hello2.txt");
//   })
//   .then((data2) => {
//     console.log(data2);
//     return readFilePromise("hello3.txt");
//   })
//   .then((data3) => {
//     console.log(data3);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => {
//     readFilePromise("final.txt").then((data) => console.log(data));
//   });

// Promise.all

// const promise = new Promise((resolve, reject) => {
//   readFile("hello.txt", "utf-8", (err, data) => {
//     resolve(data);
//   });
// });
// const promise2 = new Promise((resolve, reject) => {
//   readFile("hello2.txt", "utf-8", (err, data) => {
//     resolve(data);
//   });
// });
// const promise3 = new Promise((resolve, reject) => {
//   readFile("hello3.txt", "utf-8", (err, data) => {
//     resolve(data);
//   });
// });

// Promise.all([promise, promise2, promise3]).then((data) => console.log(data));

// lab1

// const helloWorld = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello, Wolrd");
//   }, 1000);
// });

// helloWorld.then((data) => console.log(data));

// lab2

// const faultyPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error("Something went wrong"));
//   }, 2000);
// });

// faultyPromise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// lab3

// const promise = new Promise((resolve) => {
//   resolve(1);
// });

// promise
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   })
//   .then((num) => {
//     console.log(num);
//     return num + 1;
//   });

// lab4

// const promise1 = new Promise((resolve) => {
//   resolve("A");
// });
// const promise2 = new Promise((resolve) => {
//   resolve("B");
// });
// const promise3 = new Promise((resolve) => {
//   resolve("C");
// });

// Promise.all([promise1, promise2, promise3])
//   .then((data) => {
//     const result = data.join("");
//     return result;
//   })
//   .then((combined) => console.log(combined));

// Async await

// const { readFile } = require("fs");

// const promise = new Promise((resolve, reject) => {
//   readFile("hello5.txt", "utf-8", (err, data) => {
//     if (err) {
//       reject(err);
//     }
//     resolve(data);
//   });
// });

// // promise.then((data) => console.log(data)).catch((err) => console.log(err));

// // async function run () {

// // }

// const run = async () => {
//   try {
//     const data = await promise;
//     console.log(data);
//   } catch (err) {
//     // console.log("test");
//     console.log(err);
//   }
// };

// run();

// Lab 5

// const waitAndResolve = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Resolved");
//     }, 1000);
//   });
// };

// // const promise = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve("Resolved");
// //   }, 1000);
// // });

// const asyncAwaitExample = async () => {
//   const message = await waitAndResolve();
//   console.log(message);
// };

// asyncAwaitExample();

// lab 6

// const waitAndReject = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Failed....."));
//     }, 1000);
//   });
// };

// const handleRejection = async () => {
//   try {
//     await waitAndReject();
//   } catch (err) {
//     console.log(err);
//   }
// };

// handleRejection();

// lab 7

// const createPromise = (message, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, delay);
//   });
// };

// const sequentialCalls = async () => {
//   const result1 = await createPromise("First", 1000);
//   console.log(result1);
//   const result2 = await createPromise("Second", 2000);

//   console.log(result2);
//   const result3 = await createPromise("Third", 3000);
//   console.log(result3);
// };

// console.log("test1");
// sequentialCalls();
// console.log("test3");

// lab 8

// const createPromise = (message, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(message);
//     }, delay);
//   });
// };

// const parallelCalls = async () => {
//   const [first, second, third] = await Promise.all([
//     createPromise("First", 1000),
//     createPromise("Second", 2000),
//     createPromise("Third", 3000),
//   ]);

//   console.log(first, second, third);
// };

// parallelCalls();

// Example

// Api / connect databse

// Frontend -> Server // axios -> axios.get(...) -> Promise -> await axios.get(...)
// Server -> DB // ORM -> prisma -> prisma.user.findFirst(...) -> Promise -> await prisma.user.findFirst(...)

import { sayHi, sayHi2 } from "./user.js";
import helloqqq from "./user.js";

sayHi("John");
sayHi2("Doe");

helloqqq();


