// @ts-nocheck
import React from 'react';
import styles from './homehelper.module.css';
import HeroSvg from './assets/hero_svg.svg';
import HeroPagination from './HeroPagination';
const Hero = () => {
    return (
        <div className={`${styles.hero}`}>
            <div className={`${styles.hero_top_content}`}>
                <div className={`${styles.hero_content}`}>
                    <h1>Digital currency leads at market in the right amount.</h1>
                    <p>
                        Vestibulum faucibus eget erat eget pretium. Donec commodo
                        convallis suscipit orci.
                    </p>
                    <div className={`${styles.hero_button_box}`}>
                        <button type="button" className={`${styles.button_started}`}>
                            Get Started
                        </button>
                        <button type="button" className={`${styles.button_view}`}>
                            View Market
                        </button>
                    </div>
                </div>
                <div className={`${styles.hero_img}`}>
                    <img src={HeroSvg} alt="Hero Svg" />
                </div>
            </div>
            <HeroPagination />
        </div>
    );
};

export default Hero;
