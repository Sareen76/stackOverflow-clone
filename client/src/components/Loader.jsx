import React, { useState, useEffect } from 'react';
import styles from './component.module.css'; // Assuming CSS modules

const Loader = () => {
  const [toggleMode, setToggleMode] = useState(false);

  useEffect(() => {
    // Start a repeated toggle
    const interval = setInterval(() => {
      setToggleMode((prev) => !prev); // Toggle the state
    }, 500); // Adjust the interval (in milliseconds) as needed

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loading}>
      <div className={styles.toggle}>
        <a className={toggleMode ? styles.activehamburger : styles.hamburger}>
          <div className="topLines">
            <div className={`line ${styles.line1}`}></div>
            <div className={`line ${styles.line1_2}`}></div>
            <div className={`line ${styles.line1_3}`}></div>
          </div>
          <div className={`line ${styles.line2}`}></div>
          <div className={`line ${styles.line3}`}></div>
          <div className={styles.underBox}></div>
        </a>
      </div>
    </div>
  );
};

export default Loader;
