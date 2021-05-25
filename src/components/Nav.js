import React from 'react';
import "./styles/Nav.css";

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__contents">
                <img className="nav__logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt=""/>

                <img className="nav__avatar" src="https://imgix.bustle.com/uploads/image/2021/2/26/0347f0f7-978f-47a1-90fa-8cbf80201d6e-avatar-the-last-air-bender-netflix.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress" alt=""/>
            </div>
        </div>
    );
};

export default Nav;
