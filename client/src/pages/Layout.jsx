import Navbar from "../components/Navbar"
import Feed from "../components/Feed"
import Blog from "../components/Blog"

import styles from "./_pages.module.css"; // Import the CSS Module
import NavbarCollapse from "../components/NavbarCollapse";
import { Outlet } from "react-router-dom";

import { useToggle } from '../context/context.jsx';
import { useState } from "react";


const Layout = () => {
const { toggleMode, toggle } = useToggle();
const [search, setSearch] = useState("");
const [isSearch, setIsSearch] = useState(false);


return (
    <div className="main">
        <div className="Navbar">
            <Navbar setSearch={setSearch} setIsSearch={setIsSearch}/>
        </div>
        <div className={styles.container}>
            <div className={`${styles.NavbarCollapse} ${toggleMode ? styles.visible : ""}`}>
                <NavbarCollapse />
            </div>
            <div className="Feed">
                <Outlet context={{search, isSearch, setIsSearch}}/>
            </div>
            <div className="Blog">
                <Blog />
            </div>
        </div>
        </div>
  )
}

export default Layout