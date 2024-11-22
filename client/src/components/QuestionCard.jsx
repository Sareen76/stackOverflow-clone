import React from 'react';
import styles from './component.module.css';

const QuestionCard = ({ index, item }) => {

    const timeElapsed = (timeMs) => {
        // Convert milliseconds to seconds, minutes, hours, etc.
        const time = timeMs / 1000; // Convert milliseconds to seconds

        if (time < 60) return `${Math.floor(time)} secs`;
        else if (time < 3600) return `${Math.floor(time / 60)} min${time < 120 ? '' : 's'}`;
        else if (time < 86400) return `${Math.floor(time / 3600)} hr${time < 7200 ? '' : 's'}`;
        else if (time < 2628000) return `${Math.floor(time / 86400)} day${time < 172800 ? '' : 's'}`;
        else if (time < 31536000) return `${Math.floor(time / 2628000)} month${time < 5256000 ? '' : 's'}`;
        else return `${Math.floor(time / 31536000)} year${time < 63072000 ? '' : 's'}`;
    };

    const timeDiffernce = (creationDate) => {
        const creationDateTime = new Date(creationDate * 1000); // Multiply by 1000 to convert to milliseconds
        const currentDateTime = new Date();
        const timeDifference = currentDateTime - creationDateTime;

        return timeElapsed(timeDifference);
    }

    return (
        <div className={styles.card} key={index}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <p>{item.title}</p>
                </div>

                <ul className={styles.techList}>
                    {
                        item.tags.map((value, i) => {
                            return (
                                <li key={i} className={styles.tags}>
                                    <a href="#">
                                        {value}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className={styles.socials}>
                    <ul className={styles.popularityList}>
                        <li><i className="fa-solid fa-play" style={{ color: "orange" }}></i><span className={styles.count} title='votes'> {item.score >= 0 ? item.score : 0 }</span></li>
                        <li><i className="fa-regular fa-comments"></i><span className={styles.count} title='answers'> {item.answer_count}</span></li>
                        <li><i className="fa-regular fa-eye"></i><span className={styles.count} title='views'> {item.view_count}</span></li>
                    </ul>

                    <div className={styles.timeStamp}>
                        <p>asked {timeDiffernce(item.creation_date)} ago : <span className={styles.highlight}>{item.owner.display_name}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard