// @ts-nocheck
import React from 'react';
import styles from './common.module.css';
import { footerData, socialData } from './footerData';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerList = footerData.map((item) => {
        return (
            <div className={`${styles.footer_list_box}`} key={item.id}>
                <h5>{item.title}</h5>
                {item.hasSubmenu &&
                Array.isArray(item.links) &&
                item.links.some((link) => link.name) ? (
                    <ul>
                        {item.links.map((link) => {
                            return (
                                <li key={link.name} className={`${styles.footer_link_route}`}>
                                    <Link to={link.link}>{link.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                ) : null}
            </div>
        );
    });
    const iconList = socialData.map((item) => {
        return (
            <div className={`${styles.footer_social_icon}`} key={item.id}>
                {<item.icon />}
            </div>
        );
    });

    return (
        <div className={`${styles.footer_container}`}>
            <div className={`${styles.footer_content}`}>
                <h4 className={`${styles.footer_icon}`}>DevDoctor{"'"}s</h4>
                <p>
                    Don{"'"}t let failure hold you back – try DevDoctor{"'"}s and succeed
                </p>
                <span>© Skyrev Theme 2021</span>
            </div>
            <div className={`${styles.footer_list}`}>
                {footerList}
            </div>
            <div className={`${styles.footer_social}`}>
                    <h5>Follow Us</h5>
                    <div className={`${styles.footer_icon_box}`}>{iconList}</div>
            </div>
        </div>
    );
};

export default Footer;
