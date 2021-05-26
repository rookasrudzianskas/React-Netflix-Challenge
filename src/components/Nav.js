import React, {useEffect, useState} from 'react';
import "./styles/Nav.css";
import {useHistory} from "react-router-dom";

const Nav = () => {

    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img onClick={() => history.push("/")} className="nav__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt=""/>

                <img onClick={() => history.push("/profile")} className="nav__avatar" src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png" alt=""/>
            </div>
        </div>
    );
};

export default Nav;
