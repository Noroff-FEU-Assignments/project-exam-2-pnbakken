import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/auth-context";
import PageRoutes from "./Pages/Page-Routes";

import "./style/style.scss";

/**
 *
 * @returns Just Post App
 *
 *
 *
 *
 */

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <PageRoutes />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
