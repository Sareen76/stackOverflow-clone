import styles from './component.module.css';

const QuestionTab = ({isActive, setIsActive}) => {

    const setActive = (active) => {
        setIsActive(active);
    }

    return (
        <div className={styles.questionTab}>
            <div className={styles.container}>
                <h1 className={styles.heading}>
                    Top Question
                </h1>

                <div className={styles.typeSelection}>
                    <ul className={styles.typeList}>
                        <li><a className={`${isActive == 'Votes' ? styles.active : ""}`} id='interesting' onClick={() => setActive('Votes')}>Interesting</a></li>
                        <li><a className={`${isActive == 'Bounties' ? styles.active : ""}`} id='Bounties' onClick={() => setActive('Bounties')}>Bountied</a></li>
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