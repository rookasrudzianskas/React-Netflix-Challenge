import React, {useEffect, useState} from 'react';
import "./styles/Banner.css";
import axios from "../axios";
import requests from "../Requests";

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // makes  a request
            // for original ones
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                /// and the sets, from request data and results, the one, which is corresponding to the random number!
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    ]
            );
            return request;
        }
        fetchData();

    }, []);

    // console.log(movie)

    const truncate = (string, n) => {
        return string?.length > n  ? string.substring(0, n -1) + "...." : string;
    }
    return (
        <header style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center',
        }} className="banner">


            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name || "Cool Movie"}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />

        </header>
    );
};

export default Banner;
