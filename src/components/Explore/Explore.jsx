import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import SearchBar from '../Home/HomeRight/SearchBar';
import TestCard from '../Home/HomeRight/TestCard';
import Nav from '../Navigation/Nav';
import './Explore.css';

function Explore() {
    const { data, initialData } = useContext(GlobalContext);
    return (
        <div className="main-container">
            <div className="main-section">
                <Nav />
                <div className=" home__right col-12 px-4 py-5">
                    <SearchBar />

                    <div className="explore text-center mt-2 py-5">
                        <div className="wrapper cardItem">
                            {data.length > 0
                                ? data.map((movie) => (
                                      <TestCard
                                          key={movie.id}
                                          movieName={movie.original_title}
                                          imgId={movie.backdrop_path}
                                          id={movie.id}
                                      />
                                  ))
                                : initialData.map((movie) => (
                                      <TestCard
                                          key={movie.id}
                                          movieName={movie.original_title}
                                          imgId={movie.backdrop_path}
                                          id={movie.id}
                                      />
                                  ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
