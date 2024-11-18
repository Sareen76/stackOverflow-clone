import React, { useEffect, useState } from 'react';

import QuestionCard from "../components/QuestionCard"
import QuestionTab from "../components/QuestionTab"

import styles from './_pages.module.css'

const Questions = () => {
  const [isActive, setIsActive] = useState("interesting");


  return (
    <div className={styles.questionContainer}>
      <QuestionTab isActive={isActive} setIsActive={setIsActive} />
      <QuestionCard/>
    </div>
  )
}

export default Questions