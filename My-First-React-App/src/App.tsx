import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Golden State Warriors",
    "Miami Heat",
    "Los Angeles Lakers",
    "Portland Trail Blazers",
    "Boston Celtics",
  ];

  return <div><ListGroup items={items} heading="Basketball Teams"/></div>;
}

export default App;