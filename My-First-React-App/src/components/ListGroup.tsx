function ListGroup() {
  let teams = [
    "Golden State Warriors",
    "Miami Heat",
    "Los Angeles Lakers",
    "Portland Trail Blazers",
    "Boston Celtics",
  ];
  teams = [];

  return (
    <>
      <h1>List</h1>
      
      {/* {teams.length == 0 ? <p>No teams found</p> : null} */}
      {teams.length == 0 && <p>No teams found</p>}

      <ul className="list-group">
        {teams.map((team) => (
          <li key={team}>{team}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
