import "./App.css";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      {/* Passing text as a prop is ok but what if we want to pass HTML then we use children */}

      {/* <Alert text='This is alert from app component' /> */}
      <Alert>
        Hello <span className='bg-danger'>World</span>
      </Alert>
    </div>
  );
}

export default App;
