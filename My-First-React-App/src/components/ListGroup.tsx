function ListGroup() {
  const teams = [
    "Golden State Warriors",
    "Miami Heat",
    "Los Angeles Lakers",
    "Portland Trail Blazers",
    "Boston Celtics",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {teams.map((team) => (
          <li key={team}>{team}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
