import React from 'react';
import FourImage from '../FourImage/FourImage';

const WelcomeSection = () => {
    return (
        <div className='flex flex-col lg:flex-row w-full mt-20 lg:px-28 '>
            <div className='w-1/2'>
                <div className=' flex  items-center'>
                    <p className='font-bold mr-2 text-orange-500'>ABOUT US</p>
                    <span className='h-0.5 w-10 bg-orange-400'></span>
                </div>
                <h2 className='text-5xl font-bold mt-4'>Welcome to<span className='text-orange-500'> Hotal AGOURA</span></h2>
                <div className=' flex w-full lg:pr-12 mt-10'>
                    <div className='border w-1/3 mr-3'>
                        <div className=' border text-center m-1 py-4'>
                            <h3 className='text-3xl font-bold'>1234</h3>
                            <p className='text-base-400'>Rooms</p>
                        </div>
                    </div>
                    <div className='border w-1/3 '>
                        <div className=' border text-center m-1 py-4'>
                            <h3 className='text-3xl font-bold'>1234</h3>
                            <p>Staffs</p>
                        </div>
                    </div>
                    <div className='border w-1/3 mx-3'>
                        <div className=' border text-center m-1 py-4'>
                            <h3 className='text-3xl font-bold'>1234</h3>
                            <p>Clients</p>
                        </div>
                    </div>
                </div>
                <button className='bg-yellow-500 text-white my-10 px-10 py-4 rounded-sm font-semibold'>EXPLORE MORE</button>
            </div>
            <div>
                <FourImage></FourImage>
            </div>
        </div>
    );
};

export default WelcomeSection;