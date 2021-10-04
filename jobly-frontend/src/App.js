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
import JoblyApi from "./JoblyApi";
import jwt from "jsonwebtoken";
import LoaderSpinner from "./Components/LoaderSpinner";

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  ///////// springboard solution
  // const [infoLoaded, setInfoLoaded] = useState(false);

  // useEffect(
  //   function loadUserInfo() {
  //     console.debug("App useEffect loadUserInfo", "token=", token);

  //     async function getCurrentUser() {
  //       if (token) {
  //         try {
  //           let { username } = jwt.decode(token);
  //           // put the token on the Api class so it can use it to call the API.
  //           JoblyApi.token = token;
  //           let currentUser = await JoblyApi.getUser(username);
  //           setCurrentUser(currentUser);
  //           // setApplicationIds(new Set(currentUser.applications));
  //         } catch (err) {
  //           console.error("App loadUserInfo: problem loading", err);
  //           setCurrentUser(null);
  //         }
  //       }
  //       setInfoLoaded(true);
  //     }

  //     // set infoLoaded to false while async getCurrentUser runs; once the
  //     // data is fetched (or even if an error happens!), this will be set back
  //     // to false to control the spinner.
  //     setInfoLoaded(false);
  //     getCurrentUser();
  //   },
  //   [token]
  // );

  /////////////////////////

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
      return { loggedInUser: true };
    } catch (err) {
      console.error("login failed", err);
      return { loggedInUser: false, err };
    }
  }

  async function logout() {
    setToken(null);
    setCurrentUser(null);
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
