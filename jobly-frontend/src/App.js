import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Companies from './Components/Companies';
import CompanyPage from './Components/CompanyPage';
import Jobs from './Components/Jobs';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/companies">
            <Companies />
          </Route>
          <Route path="/companies/:id">
            <CompanyPage />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
