import React, {useState} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import LoginScreen from "./components/LoginScreen";


function App() {
    const [user, setUser] = useState(null);
  return (
    <div className="app">
        <Router>
            {!user ? (
                    <LoginScreen />
                ) : (
                <Switch>

                    <Route path="/">
                        <HomeScreen />
                    </Route>

                </Switch>

                )}
        </Router>
    </div>
        );

    }

export default App;
