import { useState } from "react";

function ListGroup() {
  let teams = [
    "Golden State Warriors",
    "Miami Heat",
    "Los Angeles Lakers",
    "Portland Trail Blazers",
    "Boston Celtics",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  

  return (
    <>
      <h1>List</h1>

      {teams.length == 0 && <p>No teams found</p>}

      <ul className="list-group">
        {teams.map((team, index) => (
          <li
            className={ selectedIndex == index ? 'list-group-item active' : 'list-group-item'}
            key={team}
            onClick={() => {setSelectedIndex(index);} }
          >
            {team}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
