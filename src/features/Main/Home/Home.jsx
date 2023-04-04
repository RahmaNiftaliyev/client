// @ts-nocheck
import React from 'react';
import Footer from '../../common/Footer';
import Navigation from '../../common/Navigation';
import styles from './home.module.css';
import Hero from '../../Helpers/HomeHelpers/Hero';
import MainFeatures from '../../Helpers/HomeHelpers/MainFeatures';
import MoreFeatures from '../../Helpers/HomeHelpers/MoreFeatures';
import ServicesBox from '../../Helpers/HomeHelpers/ServicesBox';
import Testimonials from '../../Helpers/HomeHelpers/Testimonials';
import NewsEvent from '../../Helpers/HomeHelpers/NewsEvent';
const Home = () => {
    return (
        <div className={`${styles.home_container}`}>
            <Navigation />
            <Hero />
            <MainFeatures />
            <MoreFeatures />
            <ServicesBox />
            <Testimonials/>
            <NewsEvent />
            <Footer />
        </div>
    );
};

export default Home;
