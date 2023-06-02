import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Golden State Warriors",
    "Miami Heat",
    "Los Angeles Lakers",
    "Portland Trail Blazers",
    "Boston Celtics",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading="Basketball Teams" onSelectItem={handleSelectItem}/></div>;
}

export default App;