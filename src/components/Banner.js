import React from 'react';
import "./styles/Banner.css";

const Banner = () => {
    return (
        <header style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://videotapenews.com/wp-content/uploads/2020/07/avatar-the-last-airbender-netflix-show.jpg)`,
            backgroundPosition: 'center center',
        }} className="banner">


            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    This is a test description
                </h1>
            </div>

            <div className="banner--fadeBottom" />

        </header>
    );
};

export default Banner;
