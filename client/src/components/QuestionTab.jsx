import styles from './component.module.css';

const QuestionTab = ({isActive, setIsActive}) => {

    const setActive = (active) => {
        setIsActive(active);
    }

    return (
        <div className={styles.questionTab}>
            <div className={styles.container}>
                <h1 className='heading'>
                    Top Question
                </h1>

                <div className={styles.typeSelection}>
                    <ul className={styles.typeList}>
                        <li><a className={`${isActive == 'interesting' ? styles.active : ""}`} id='interesting' onClick={() => setActive('interesting')}>Interesting</a></li>
                        <li><a className={`${isActive == 'bountled' ? styles.active : ""}`} id='bountled' onClick={() => setActive('bountled')}>Bountled</a></li>
                        <li><a className={`${isActive == 'hot' ? styles.active : ""}`} id='hot' onClick={() => setActive('hot')}>Hot</a></li>
                        <li><a className={`${isActive == 'week' ? styles.active : ""}`} id='week' onClick={() => setActive('week')}>Week</a></li>
                        <li><a className={`${isActive == 'month' ? styles.active : ""}`} id='month' onClick={() => setActive('month')}>Month</a></li>
                    </ul>

                    <button className='askQuestion'>ASK QUESTION</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionTab