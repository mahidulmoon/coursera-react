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


const person = {
  name: "moon",
  walk() {
    console.log(this);
  }
  
};

person.walk();
const walk = person.walk.bind(person);
walk();
// person.name = ''

// const targetMember = 'name';
// person[targetMember.value] = "mahidulmoon";