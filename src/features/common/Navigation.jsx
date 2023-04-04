// @ts-nocheck
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './common.module.css';

const Navigation = () => {
    return (
        <div className={`${styles.nav_container}`}>
            <div className={`${styles.nav_box}`}>
                <h1>
                    <Link to='/'>DevDoctor{"'"}s</Link>
                </h1>
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li>
                        <Link>Help</Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.sign_box}`}>
                <button className={`${styles.login_button}`}>Login</button>
                <button className={`${styles.register_button}`}>
                    <Link to="/register">Register</Link>
                </button>
            </div>
        </div>
    );
};

export default Navigation;
