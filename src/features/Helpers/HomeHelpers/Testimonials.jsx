// @ts-nocheck
import React from 'react';
import styles from './homehelper.module.css';
import TestimonialsImg from './assets/TestimonialsProfil.svg';
const Testimonials = () => {
    return (
        <div className={`${styles.Testimonials}`}>
            <h3>What our members said?</h3>
            <p>Nam sollicitudin dignissim nunc, cursus ullamcorper.</p>
            <div className={`${styles.Testimonials_caruse}`}>
                <div className={`${styles.Testimonials_carusel_profile}`}>
                    <img src={TestimonialsImg} alt="Testimonials Img" />
                </div>
                <p>
                    Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
                    sed. Vestibulum sit amet tortor sit amet libero lobortis semper at et
                    odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices.
                </p>
            </div>
            <div className={`${styles.rectangle1}`}></div>
            <div className={`${styles.rectangle2}`}></div>
        </div>
    );
};

export default Testimonials;
