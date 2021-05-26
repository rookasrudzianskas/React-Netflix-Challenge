import React from 'react';
import "./ProfileScreen.css";
import Nav from "../components/Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userReducer";
import {auth} from "../firebase";
import PlanScreen from "./PlanScreen";
const ProfileScreen = () => {

    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav />

            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png" alt=""/>

                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>

                        <div className="profileScreen__plans">
                            <h3>Plans</h3>

                            <PlanScreen />
                            <button  onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;
