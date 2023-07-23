import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Carousel from '../../component/Carousel/Carousel';
import WelcomeSection from '../../component/WelcomeSection/WelcomeSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Carousel></Carousel>
            <WelcomeSection></WelcomeSection>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;