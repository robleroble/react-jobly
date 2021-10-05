import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Companies from "./Components/Companies";
import CompanyPage from "./Components/CompanyPage";
import Jobs from "./Components/Jobs";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import UserContext from "./Components/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute"
import JoblyApi from "./JoblyApi";
import jwt from "jsonwebtoken";
import LoaderSpinner from "./Components/LoaderSpinner";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(() => {
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  // func that updates the currentUser with token info
  async function getCurrentUser() {
    if (token) {
      try {
        // get username from token
        let { username } = jwt.decode(token);
        // store token on JoblyApi class
        JoblyApi.token = token;
        // get user info from username
        let currUser = await JoblyApi.getUser(username);
        setCurrentUser(currUser);
      } catch (err) {
        console.error("App not loading user info", err);
        setCurrentUser(null);
      }
    }
    setInfoLoaded(true);
  }

  async function register(registerData) {
    try {
      // returns token
      let token = await JoblyApi.register(registerData);
      console.log(token);
      // setting the token should trigger func to find currUser
      setToken(token);
      localStorage.setItem("token", token)
      return { registeredUser: true };
    } catch (err) {
      console.error("register failed", err);
      return { registeredUser: false, err };
    }
  }

  async function login(loginData) {
    try {
      // returns token
      let token = await JoblyApi.login(loginData);
      // sets token in state which triggers useEffect func to get currentUser
      setToken(token);
      localStorage.setItem("token", token)
      return { loggedInUser: true };
    } catch (err) {
      console.error("login failed", err);
      return { loggedInUser: false, err };
    }
  }

  async function logout() {
    setToken(null);
    setCurrentUser(null);
    localStorage.clear();
  }

  if (!infoLoaded) return <LoaderSpinner />;

  return (
    <div className="App d-flex flex-column">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <NavBar logout={logout} />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <ProtectedRoute exact path="/companies">
              <Companies />
            </ProtectedRoute>
            <ProtectedRoute path="/companies/:id">
              <CompanyPage />
            </ProtectedRoute>
            <ProtectedRoute exact path="/jobs">
              <Jobs />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login login={login} />
            </Route>
            <Route exact path="/signup">
              <Signup register={register} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
