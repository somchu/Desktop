import "./App.css";
import Alert from "../Alert/Alert";
function App() {
  return (
    <div className="wrapper">
      <Alert title="Item Not Added" type="error">
        <div>Your item are out of stock.</div>
      </Alert>
    </div>
  );
}

export default App;
