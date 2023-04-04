// @ts-nocheck
import React from 'react';
import styles from './homehelper.module.css';
const data = [
    {
        id: 1,
        title: 'Business Solution',
        content: 'Interdum et malesuada ac ante…',
    },
    {
        id: 2,
        title: 'Free project quote',
        content: 'Interdum et malesuada ac ante…',
    },
    {
        id: 3,
        title: 'Nulla lobortis nunc',
        content: 'Interdum et malesuada ac ante…',
    },
];

const HeroPagination = () => {
    const renderData = data.map((item) => {
        return (
            <div className={`${styles.hero_pagination_item}`} key={item.id}>
                <div className={`${styles.line}`}></div>
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            </div>
        );
    });
    return <div className={`${styles.HeroPagination}`}>{renderData}</div>;
};

export default HeroPagination;
