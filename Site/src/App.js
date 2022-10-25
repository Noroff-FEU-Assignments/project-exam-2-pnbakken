import Layout from "./Components/Layout/main-layout";
import { BrowserRouter as Router } from "react-router-dom";

import "./style/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
