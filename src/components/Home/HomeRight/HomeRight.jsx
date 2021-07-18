import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import Carousel from './Carousel';
import MovieMenu from './MovieMenu';
import SearchBar from './SearchBar';
import TestCard from './TestCard';

function HomeRight() {
    const { initialData } = useContext(GlobalContext);
    const specificData = initialData.slice(8, 16);

    // eslint-disable-next-line no-unreachable
    return (
        <div className="home__right col-12 col-md-9 px-4 py-5">
            <SearchBar />
            <Carousel />

            <div className="movie-menu row">
                <MovieMenu value="upcoming" />
                <MovieMenu value="toprated" />
            </div>
            <div className="explore text-center mt-2 py-5">
                <div className="wrapper cardItem">
                    {specificData.map((movie) => (
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
    );
}

export default HomeRight;
