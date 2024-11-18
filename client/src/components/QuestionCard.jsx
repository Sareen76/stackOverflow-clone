import React from 'react';
import styles from './component.module.css';

const QuestionCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
            <div className={styles.description}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nisi accusamus eligendi, voluptas sint impedit nobis, ullam voluptates illum quis eius at ut.</p>
            </div>

                <ul  className={styles.techList}>
                    <li><a href="#">C++</a></li>
                    <li><a href="#">Pyhton</a></li>
                    <li><a href="#">Kotlin</a></li>
                    <li><a href="#">Solidity</a></li>
                </ul>

            <div className={styles.socials}>
                    <ul className={styles.popularityList}>
                        <li><i className="fa-solid fa-play" style={{color: "orange"}}></i><span className={styles.count}> 7</span></li>
                        <li><i className="fa-regular fa-comments"></i><span className={styles.count}> 7</span></li>
                        <li><i className="fa-regular fa-eye"></i><span className={styles.count}> 8</span></li>
                    </ul>

                <div className={styles.timeStamp}>
                    <p>asked 55 secons ago : <span className={styles.highlight}>veyron</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QuestionCard