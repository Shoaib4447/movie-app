import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible === true && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          This is an Alert
        </Alert>
      )}
      <Button color='info' onClick={() => setAlertVisible(true)}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
