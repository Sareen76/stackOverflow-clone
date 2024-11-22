import logo from '../assets/logo-stackoverflow.svg';
import styles from './component.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch , faAward} from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';


// Imported the use Toggle
import { useToggle } from '../context/context.jsx';


const Navbar = ({setSearch, setIsSearch}) => {

  // const [toggleMode, setToggleMode] = useState(false);
  const { toggleMode, toggle } = useToggle();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsSearch(true);
    }
  }

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
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search your answer here...' onKeyDown={handleKeyDown} />
            <FontAwesomeIcon icon={faSearch} className={styles.faSearch} onClick={() => setIsSearch(true)} />
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
            <FontAwesomeIcon icon={faAward} className={styles.social} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFileLines} className={styles.social}/>
            </li>
            <li>
              <img
                src={"data:image/jpeg;base64,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"}
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