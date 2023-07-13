import React from 'react';
import ReactDOM from 'react-dom';


let i = 1;
const element = <h1>{ (i == 1) ? "Hello World!" : "Goodbye World!" }</h1>;


// const element2 = <div>
//                   <h1>This is Heading 1</h1>
//                   <h2>This is Heading 2</h2>
//                   <h3>This is Heading 3</h3>
//                 </div>;

ReactDOM.render (
  element,
  document.getElementById("root")
);