import React from 'react';
import "./styles/LoginScreen.css";

const LoginScreen = () => {
    return (
        <div className="loginScreen">
            <div className="loginScree__background">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" className="loginScreen__logo" alt=""/>
                <button className="loginScreen__button">Sign In</button>

                <div className="loginScreen__gradient" />
            </div>

            <div className="loginScreen__body">
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                </>
            </div>
        </div>
    );
};

export default LoginScreen;
