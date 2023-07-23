import React from 'react';
import about1 from "../../assetes/img/about-1.jpg"
import about2 from "../../assetes/img/about-2.jpg"
import about3 from "../../assetes/img/about-3.jpg"
import about4 from "../../assetes/img/about-4.jpg"

const FourImage = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row lg:justify-center w-full'>
                <img src={about1} className='w-48 h-48 lg:m-4 lg:mt-12'></img>
                <img src={about2} className='w-60 h-60'></img>
            </div>
            <div className='flex flex-col lg:flex-row justify-center mt-1'>
                <img src={about3} className='w-32 h-32 lg:ml-12'></img>
                <img src={about4} className='w-52 h-52  lg:ml-4'></img>
            </div>
        </div>
    );
};

export default FourImage;