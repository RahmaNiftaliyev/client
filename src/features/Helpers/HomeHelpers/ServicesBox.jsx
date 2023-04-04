// @ts-nocheck
import React from 'react'
import styles from './homehelper.module.css'
import ServicesImg from './assets/services.svg'
const ServicesBox = () => {
  return (
      <div className={`${styles.ServicesBox}`}>
          <h3>Top Coins Today</h3>
          <p>
              Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel
              est, at euismod libero.
          </p>
            <div className={`${styles.ServicesBox_box}`}>
                <img src={ServicesImg} alt="Services Img" />
                <div className={`${styles.ServicesBox_content}`}>
                    <div className={`${styles.Services_card}`}></div>
                    <div className={`${styles.Services_card}`}></div>
                </div>
            </div>
      </div>
  );
}

export default ServicesBox