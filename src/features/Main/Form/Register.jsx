// @ts-nocheck
import React from 'react';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import styles from './contactus.module.css';
import registireImg from './assets/Register.svg';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const Register = () => {
    return (
        <div className={`${styles.Register_form}`}>
            <Navigation />
            <div className={`${styles.form_container}`}>
                <div className={`${styles.form_box}`}>
                    <h3>Create Your Account</h3>
                    <div className={`${styles.signin_button_box}`}>
                        <button className={`${styles.signin_button_facebook}`}>
                            <FaFacebook />
                            FaceBook
                        </button>
                        <button className={`${styles.signin_button_github}`}>
                            <FaGithub />
                            GitHub
                        </button>
                        <button className={`${styles.signin_button_google}`}>
                            <FaGoogle />
                            Google
                        </button>
                    </div>
                    <div className={`${styles.signin_or_email}`}>
                        <p>Or register with email</p>
                    </div>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="text" name="email" placeholder="Email" />
                        <div className={`${styles.input_box}`}>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <input
                                type="password"
                                name="confirm_password"
                                placeholder="Repeat Password"
                            />
                        </div>
                        <div className={`${styles.finished_box}`}>
                            <div className={`${styles.checkBox}`}>
                                <input type="checkbox" name="checkbox" />
                                <label htmlFor="checkbox">
                                    I agree to the terms and conditions
                                </label>
                            </div>

                            <button type="submit" className={`${styles.contine_button}`}>
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
                <div className={`${styles.form_content}`}>
                    <h3>Lorem ipsum dolor sit</h3>
                    <p>consectetur adipiscing elit. Suspendisse sed urna in.</p>
                    <img src={registireImg} alt="register" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
