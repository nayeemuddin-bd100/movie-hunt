/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_URL, MOVIE_DETAILS } from '../../Api_Config';
import './MovieDetails.css';

function DetailsCard() {
    const [details, setDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                axios.get(MOVIE_DETAILS(id)).then((response) => setDetails(response.data));
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, [id]);

    const {
        popularity,
        release_date,
        tagline,
        original_title,
        backdrop_path,
        overview,
        spoken_languages,
        vote_average,
    } = details;

    return (
        <div className="movie-card">
            <div className="container ">
                {backdrop_path ? (
                    <img
                        src={`${IMAGE_URL}w1280/${backdrop_path}`}
                        alt="cover"
                        className="cover d-none d-sm-block aa"
                    />
                ) : (
                    <img
                        src={`${process.env.PUBLIC_URL}/assests/images/movie-time-poster.jpg`}
                        alt="cover"
                        className="cover d-none d-sm-block aa"
                    />
                )}

                <div className="hero">
                    <div className="details">
                        <h4 className="title1"> {original_title} </h4>

                        <div className="title2"> {tagline || original_title} </div>

                        <fieldset className="rating">
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
                            <input type="radio" id="star4half" name="rating" value="4 and a half" />
                            <label
                                className="half"
                                htmlFor="star4half"
                                title="Pretty good - 4.5 stars"
                            />
                            <input type="radio" id="star4" name="rating" value="4" checked />
                            <label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
                            <input type="radio" id="star3half" name="rating" value="3 and a half" />
                            <label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                            <input type="radio" id="star2half" name="rating" value="2 and a half" />
                            <label
                                className="half"
                                htmlFor="star2half"
                                title="Kinda bad - 2.5 stars"
                            />
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
                            <input type="radio" id="star1half" name="rating" value="1 and a half" />
                            <label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
                            <input type="radio" id="star1" name="rating" value="1" />
                            <label
                                className="full"
                                htmlFor="star1"
                                title="Sucks big time - 1 star"
                            />
                            <input type="radio" id="starhalf" name="rating" value="half" />
                            <label
                                className="half"
                                htmlFor="starhalf"
                                title="Sucks big time - 0.5 stars"
                            />
                        </fieldset>

                        <span className="likes">109 likes</span>
                    </div>
                </div>

                <div className="description">
                    <div className="column1 d-none d-sm-block aa">
                        <div style={{ color: 'white' }}>
                            <p className="mb-0">Release Date: {release_date}</p>
                            <p className="mb-0">popularity: {popularity}</p>
                            <p className="mb-0">
                                Language:
                                {spoken_languages &&
                                    spoken_languages.map((language) => (
                                        <span>{`${language.english_name} `}</span>
                                    ))}
                            </p>
                            <p className="mb-0">
                                Imdb Rating:
                                <strong style={{ color: 'yellow' }}> {vote_average} </strong>
                            </p>
                        </div>
                    </div>

                    <div className="column2">
                        <p>
                            {overview}
                            <div className="d-sm-none mt-5 aa">
                                <div>
                                    <p className="mb-0">Release Date: {release_date}</p>
                                    <p className="mb-0">popularity: {popularity}</p>
                                    <p className="mb-0">
                                        Language:
                                        {spoken_languages &&
                                            spoken_languages.map((language) => (
                                                <span>{`${language.english_name} `}</span>
                                            ))}
                                    </p>
                                    <p className="mb-0">
                                        Imdb Rating:
                                        <strong style={{ color: 'yellow' }}>{vote_average}</strong>
                                    </p>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsCard;
