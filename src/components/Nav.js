import React, {useEffect, useState} from 'react';
import "./styles/Nav.css";

const Nav = () => {

    const [show, handleShow] = useState(false);

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
                <img className="nav__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt=""/>

                <img className="nav__avatar" src="https://imgix.bustle.com/uploads/image/2021/2/26/0347f0f7-978f-47a1-90fa-8cbf80201d6e-avatar-the-last-air-bender-netflix.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress" alt=""/>
            </div>
        </div>
    );
};

export default Nav;
