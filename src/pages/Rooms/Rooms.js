import React, { useEffect, useState } from 'react';
import Room from './Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch("room.json")
            .then((responce) => responce.json())
            .then((data) => setRooms(data))
    }, [])
    return (
        <div className='mt-12 px-20'>
            <div className='luxury flex justify-center items-center'>
                <span className='h-0.5 w-10 bg-orange-400 '></span>
                <span className='mx-3 text-lg text-orange-400 font-semibold'>
                    OUR ROOMS
                </span>
                <span className='h-0.5 w-10 bg-orange-400'></span>
            </div>
            <div className='w-full m-auto flex justify-center items-center mb-16'>
                <h2 className='text-5xl font-bold mt-4'>Explore Our <span className='text-orange-500'>ROOMS</span></h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    rooms.map((room) => <Room key={room.id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;