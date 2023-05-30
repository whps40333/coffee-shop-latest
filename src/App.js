import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
