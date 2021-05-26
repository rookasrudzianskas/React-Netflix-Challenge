import React, {useEffect, useState} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userReducer";
import ProfileScreen from "./screens/ProfileScreen";


function App() {
    // we get the sign in user data if the yser is signed in in here
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                // logged in
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                })
                );

            } else {
                // logged out
                dispatch(logout())
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

                    <Route path="/profile">
                        <ProfileScreen />
                    </Route>

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
