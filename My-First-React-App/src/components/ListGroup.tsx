import { MouseEvent } from "react";

function ListGroup() {
  let teams = [
    "Golden State Warriors",
    "Miami Heat",
    "Los Angeles Lakers",
    "Portland Trail Blazers",
    "Boston Celtics",
  ];

  // Event handler
  const handleClick = (event:MouseEvent) => console.log(event)

  return (
    <>
      <h1>List</h1>

      {teams.length == 0 && <p>No teams found</p>}

      <ul className="list-group">
        {teams.map((team, index) => (
          <li
            className="list-group-item"
            key={team}
            onClick={handleClick}
          >
            {team}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
