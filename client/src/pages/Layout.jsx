import Navbar from "../components/Navbar"
import Feed from "../components/Feed"
import Blog from "../components/Blog"

import styles from "./_pages.module.css"; // Import the CSS Module
import NavbarCollapse from "../components/NavbarCollapse";
import { Outlet } from "react-router-dom";

import { useToggle } from '../context/context.jsx';


const Layout = () => {
const { toggleMode, toggle } = useToggle();

return (
    <div className="main">
        <div className="Navbar">
            <Navbar />
        </div>
        <div className={styles.container}>
            <div className={`${styles.NavbarCollapse} ${toggleMode ? styles.visible : ""}`}>
                <NavbarCollapse />
            </div>
            <div className="Feed">
                <Outlet />
            </div>
            <div className="Blo">
                <Blog />
            </div>
        </div>
        </div>
  )
}

export default Layout