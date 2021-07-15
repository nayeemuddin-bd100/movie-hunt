/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './MovieDetails.css';

function DetailsCard() {
    return (
        <div className="movie-card">
            <div className="container ">
                <a href="#">
                    <img
                        src={`${process.env.PUBLIC_URL}/assests/images/movie-time-poster.jpg`}
                        // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg"
                        alt="cover"
                        className="cover d-none d-sm-block aa"
                    />
                </a>

                <div className="hero">
                    <div className="details">
                        <h4 className="title1">The Hobbit</h4>

                        <div className="title2">The Battle of the Five Armies </div>

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
                            <p className="mb-0">Release Date: 12.2.2020</p>
                            <p className="mb-0">popularity: 123123.21</p>
                            <p className="mb-0">Language: English</p>
                            <p className="mb-0">
                                Imdb Rating: <strong style={{ color: 'yellow' }}> 7.3</strong>
                            </p>
                        </div>
                    </div>

                    <div className="column2">
                        <p>
                            Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of
                            Erebor from the fearsome dragon Smaug. Approached out of the blue by the
                            wizard Gandalf the Grey, Bilbo finds himself joining a company of
                            thirteen dwarves led by the legendary warrior, Thorin Oakenshield. Their
                            journey will take them into the Wild; through...{' '}
                            <div className="d-sm-none mt-5 aa">
                                <div>
                                    <p className="mb-0">Release Date: 12.2.2020</p>
                                    <p className="mb-0">popularity: 123123.21</p>
                                    <p className="mb-0">Language: English</p>
                                </div>
                            </div>
                        </p>

                        <div className="avatars">
                            <a href="#" data-tooltip="Person 1" data-placement="top">
                                <img
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png"
                                    alt="avatar1"
                                />
                            </a>

                            <a href="#" data-tooltip="Person 2" data-placement="top">
                                <img
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png"
                                    alt="avatar2"
                                />
                            </a>

                            <a href="#" data-tooltip="Person 3" data-placement="top">
                                <img
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png"
                                    alt="avatar3"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsCard;
