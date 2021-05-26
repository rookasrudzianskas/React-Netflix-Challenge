import React, {useState} from 'react';
import "./styles/LoginScreen.css";
import SignUpScreen from "../screens/SignUpScreen";

const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);
    console.log(signIn)
    return (
        <div className="loginScreen">
            <div className="loginScree__background">
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" className="loginScreen__logo" alt=""/>
                <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In</button>

                <div className="loginScreen__gradient" />
            </div>

            {signIn ? (
                <SignUpScreen />
            ) : (

            <div className="loginScreen__body">
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>

                    <h2>Watch anywhere. Cancel at any time.</h2>

                    <h3>Ready to watch? Enter your email to create ir restart your membership.</h3>

                    <div className="loginScreen__input">
                        <form action="">
                            <input type="email" placeholder="Email address..." />
                            <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">GET STARTED</button>
                        </form>
                    </div>
                </>
            </div>
            )}
        </div>
    );
};

export default LoginScreen;
