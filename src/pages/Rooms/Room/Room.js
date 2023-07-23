import React from 'react';

const Room = ({ room }) => {
    const { type, bed, bath, image, Internet, price } = room
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className='h-8 ml-4 -mt-4 bg-yellow-400 w-32 rounded text-center font-bold text-white'><p>${price}</p></div>
            <div className="card-body">
                <h2 className="card-title">{type}</h2>
                <div className="flex flex-col w-full lg:flex-row">
                    <p className="grid flex-grow  card  rounded-box place-items-center font-semibold">{bed} Bed</p>
                    <div className="divider lg:divider-horizontal"></div>
                    <p className="grid flex-grow card rounded-box place-items-center font-semibold">{bath} Bath</p>
                    <div className="divider lg:divider-horizontal bg-dark"></div>
                    <p className="grid flex-grow card rounded-box place-items-center font-semibold">
                        {Internet}</p>
                </div>
                <div className="card-actions justify-start mt-4">
                    <button className="btn bg-yellow-400 font-bold hover:bg-yellow-600">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Room;