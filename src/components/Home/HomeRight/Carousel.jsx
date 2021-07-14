import React from 'react';

function Carousel() {
    //     .carousel.item {
    //         height: 300px;
    //     }

    // .carousel-item img {
    //         position: absolute;
    //         top: 0;
    //         left: 0;
    //         min - height: 300px;
    //     }
    return (
        <div className="slider mt-4">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner" style={{ height: '300px' }}>
                    <div className="carousel-item active " data-bs-interval="1000">
                        <img
                            src={`${process.env.PUBLIC_URL}/assests/images/carousel-1.webp`}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img
                            src={`${process.env.PUBLIC_URL}/assests/images/carousel-2.jpg`}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img
                            src={`${process.env.PUBLIC_URL}/assests/images/carousel-3.jpg`}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
