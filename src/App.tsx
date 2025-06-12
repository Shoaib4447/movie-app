import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["London", "Paris", "New YorK", "Tokyo", "San Francisco"];

  return (
    <div>
      <ListGroup items={items} heading='Cites' />
    </div>
  );
}

export default App;
