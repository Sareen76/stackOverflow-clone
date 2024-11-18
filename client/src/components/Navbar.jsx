import logo from '../assets/logo-stackoverflow.svg';
import styles from './component.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faCommentAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';


// Imported the use Toggle
import { useToggle } from '../context/context.jsx';


const Navbar = () => {

  // const [toggleMode, setToggleMode] = useState(false);
  const { toggleMode, toggle } = useToggle();

  return (
    <div className={styles.Navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
          <div className={styles.toggle} onClick={toggle}>
            <a className={`${toggleMode ? styles.activehamburger : styles.hamburger}`}>
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

        <div className={styles.searchbar}>
          <div className={styles.search_Content_wrapper}>
            <input type="text" placeholder='Search your answer here...' />
            <FontAwesomeIcon icon={faSearch} className={styles.faSearch} />
          </div>
          <div className="product">
            <button>Products</button>
          </div>
        </div>

        <div className={styles.socialProfile}>
          <ul className={styles.socialList}>
            <li>
              <FontAwesomeIcon icon={faMessage} className={styles.social} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTrashAlt} className={styles.social} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFileLines} className={styles.social} style={{}} />
            </li>
            <li>
              <img
                src={"https://via.placeholder.com/40"}
                alt="Profile"
              // style="border-radius: 50%; width: 40px; height: 40px;"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar