// @ts-nocheck
import React from 'react'
import styles from './homehelper.module.css'
import MainFeaturesSvg from './assets/main_features.svg'
const MainFeatures = () => {
  return (
    <div className={`${styles.MainFeatures}`}>
    <img src={MainFeaturesSvg} alt="main_features"/>
    </div>
  )
}

export default MainFeatures