// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// function sayHello(){
//   // for (var i = 0; i<5 ;i++){ //var is only use for the same function
//   //   console.log(i)
//   // }
//   // console.log(i);
//   for (let i = 0; i<5 ;i++){
//     console.log(i)
//   }
//   //console.log(i);
// }

// sayHello();


// const person = {
//   name: "moon",
//   walk() {
//     console.log(this);
//   }
  
// };

// person.walk();
// const walk = person.walk.bind(person);
// walk();
// person.name = ''

// const targetMember = 'name';
// person[targetMember.value] = "mahidulmoon";

//ES5
// const square1 = function(number) {
//   return number * number
// }

//ES6 modern js
// const square2 = (number) => {
//   return number * number
// }

//ES6 modern in short line of code 
// const square3 = number => number*number ; 

// console.log(square1(5));
// console.log(square2(5));
// console.log(square3(5))


const colors = ['red','blue','green']

//old mapping
const item = colors.map(function(color){
  return '<li>'+ color +'</li>';
});

//modern maping with arrow function

const items = colors.map(color => '<li>'+ color +'</li>');


const address = {
  street: '',
  city: '',
  country: ''
};

const { street,city,country } = address;


const first = [1,2,3]
const last = [3,4,5]

const combined = [...first,...last]
console.log(combined);

const second = {name:'mahidul'}
const lastt = {city: 'ctg'}
const combine = {...second,...lastt, location: 'Bangladesh'}
console.log(combine)