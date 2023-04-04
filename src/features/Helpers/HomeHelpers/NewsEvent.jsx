// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './homehelper.module.css'
import img from './assets/Rectangle.png'
const data = [
    {
        id: 1,
        title: 'event',
        content:
            'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
        img: img,
    },
    {
        id: 2,
        title: 'news',
        content:
            'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
        img: img,
    },
    {
        id: 3,
        title: 'news',
        content:
            'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
        img: img,
    },
];

const NewsEvent = () => {
    
    const renderedData = data.map((item) => {
        return (
            <div className={styles.NewsEvent_item} key={item.id}>
                <div className={styles.NewsEvent_item_img}>
                    <img src={item.img} alt="new" />    
                </div>
                <div className={styles.NewsEvent_item_content}>
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                    <Link>Read more</Link>
                </div>
            </div>
        )
    })

    return (
    <div className={styles.NewsEvent}>
        {renderedData}
    </div>
  )
}

export default NewsEvent