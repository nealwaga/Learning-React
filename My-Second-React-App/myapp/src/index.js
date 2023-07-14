import React from 'react';
import ReactDOM from 'react-dom';


// Component to be extracted
function MenuItems (props) {
  const item = props.item;
  return <li key={item.toString()}> {item} </li>;
}

// Component that will return an unordered list
function Navmenu(props) {
  const list = props.menuitems;
  const updatedList = list.map((listItems) => {
      return <MenuItems key={listItems.toString()} item={listItems} />;
  });

  return <ul>{updatedList}</ul>;
}

const menuitems = [1, 2, 3, 4, 5, 6];


ReactDOM.render (
  <Navmenu menuitems = {menuitems} />,
  document.getElementById("root")
);