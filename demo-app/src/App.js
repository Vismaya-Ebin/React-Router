import "./App.css";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Susmitha from "./components/Home";
import Sherly from "./components/About";

function App() {
  function Users() {
    return <h2>Users</h2>;
  }
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        {/* <li><Link to="/us">US</Link></li> */}
      </ul>
      <Switch>
        <Route exact path="/">
          <Susmitha />
        </Route>
        <Route path="/us">
          <Redirect to="/about" />
        
        </Route>
        <Route path="/xyz">
          <Redirect to="/about" />
        
        </Route>
        <Route path="/about">
          <Sherly />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/**">
          <h2>Wrong end point</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
