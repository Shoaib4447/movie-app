import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["London", "Paris", "New YorK", "Tokyo", "San Francisco"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading='Cites'
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
