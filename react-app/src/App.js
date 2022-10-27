import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style/style.scss";
import Home from "./Pages/home";
import { AuthProvider } from "./Context/auth-context";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
