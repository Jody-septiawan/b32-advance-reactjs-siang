import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import DetailUser from "./pages/DetailUser";
// import component here

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        {/* change route for page about, profile, and user:id to private route */}
      </Routes>
    </Router>
  );
}

export default App;