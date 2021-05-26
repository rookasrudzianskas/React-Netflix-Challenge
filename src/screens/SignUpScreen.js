import React from 'react';
import "./SignUpScreen.css";

const SignUpScreen = () => {
    return (
        <div className="signupScreen__body">
            <form action="">
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button type="submit">Sign In</button>
                        </form>
        </div>

    );
};

export default SignUpScreen;
