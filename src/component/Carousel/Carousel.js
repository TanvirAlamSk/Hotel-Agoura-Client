import React from 'react';
import "./Carousel.css"

const Carousel = () => {
    return (
        <div className=''>
            <div className="carousel text-center  w-full">
                <div id="item1" className="carousel-item carosel1 relative  w-full">
                    <div className='mt-60 w-full m-auto  font-bold '>
                        <div className="divider text-white">
                            <div className='luxury flex justify-center items-center'>
                                <span className='h-0.5 w-10 bg-orange-400 '></span>
                                <span className='mx-3 text-lg'>LUXURY LIVING</span>
                                <span className='h-0.5 w-10 bg-orange-400'></span>
                            </div>
                        </div>

                        <h2 className='text-6xl text-white'>Discover A Brand <br></br>Luxurious Hotel</h2>
                        <div className='mt-6'>

                            <button className='bg-orange-500 text-white mr-2 px-10 py-4 rounded-sm font-semibold'>OUR ROOMS</button>
                            <button className='bg-white px-10 py-4  font-semibold rounded-sm'>BOOK A ROOM</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item2" className="btn btn-circle">❮</a>
                        <a href="#item2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative carosel2 w-full">
                    <div className='mt-60 w-full m-auto text-center '>
                        <div className='luxury flex justify-center items-center'>
                            <span className='h-0.5 w-10 bg-orange-400 '></span>
                            <span className='mx-3 text-lg text-white font-semibold'>LUXURY LIVING</span>
                            <span className='h-0.5 w-10 bg-orange-400'></span>
                        </div>
                        <h2 className='text-6xl font-bold text-center  text-white'>Discover A Brand <br></br>Luxurious Hotel</h2>
                        <div className='mt-6'>

                            <button className='bg-orange-500 text-white mr-2 px-10 py-4 rounded-sm font-semibold'>OUR ROOMS</button>
                            <button className='bg-white px-10 py-4  font-semibold rounded-sm'>BOOK A ROOM</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#item1" className="btn btn-circle">❮</a>
                        <a href="#item1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Carousel;