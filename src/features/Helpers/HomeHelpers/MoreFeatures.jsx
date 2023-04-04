// @ts-nocheck
import React from 'react';
import styles from './homehelper.module.css';
import Img1 from './assets/moreFeatures1.svg';
import Img2 from './assets/moreFeatures2.svg';
const MoreFeatures = () => {
    return (
        <div className={`${styles.MoreFeatures}`}>
            <div className={`${styles.MoreFeatures_box}`}>
                <div className={`${styles.MoreFeatures_content}`}>
                    <h3>Nam sollicitudin dignissim nunc</h3>
                    <p>
                        Cras convallis lacus orci, tristique tincidunt magna consequat in.
                        In vel pulvinar est.
                    </p>
                </div>
                <div className={`${styles.MoreFeatures_img}`}>
                    <img src={Img1} alt="Fetures" />
                </div>
            </div>
            <div className={`${styles.MoreFeatures_box}`}>
                <div className={`${styles.MoreFeatures_img}`}>
                    <img src={Img2} alt="Fetures" />
                </div>
                <div className={`${styles.MoreFeatures_content}`}>
                    <h3>Fusce placerat enim et odio</h3>
                    <p>
                        Quisque lacinia purus ut libero facilisis, at vulputate sem
                        maximus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MoreFeatures;
