import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddBake from './AddBake';
import Location from './Location';
import ObjectPath from './ObjectPath';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addBake">
              <AddBake />
            </Route>
            <Route path="/objectPath">
              <ObjectPath />
            </Route>
            <Route path="/locations">
              <Location />
            </Route>          
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;