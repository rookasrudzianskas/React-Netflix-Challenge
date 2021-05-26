import React, {useEffect, useState} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import {auth} from "./firebase";


function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                // logged in
                console.log("LOGGED IN")
            } else {
                // logged out
            }
        });

        return unsubscribe;

    }, []);

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
