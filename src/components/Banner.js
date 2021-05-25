import React from 'react';
import "./styles/Banner.css";

const Banner = () => {

    const truncate = (string, n) => {
        return string?.length > n  ? string.substring(0, n -1) + "...." : string;
    }
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
                    {truncate('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dignissimos eaque labore laudantium minima quia quis rerum sequi sint tempoantium dignissimos eaque labore laudantium minima quia quis rerum sequi sint temporeantium dignissimos eaque labore laudantium minima quia quis rerum sequi sint temporeantium dignissimos eaque labore laudantium minima quia quis rerum sequi sint temporere.', 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />

        </header>
    );
};

export default Banner;
