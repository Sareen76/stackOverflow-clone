import React, { useState } from "react";
import styles from "./component.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";



const NavbarCollapse = () => {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return location.pathname === path ? `${styles.active}`: "";
  }

  return (
    <div className={styles.NavbarCollapse}>
      <div className={styles.container}>
        <ul className={styles.NavbarList}>

          <li>
            <a className={` ${getLinkStyle('/')} main ${styles.heading}`} href="/">
            <i className="fa-solid fa-house"></i>
              <label htmlFor="home">Home</label>
            </a>
            <ul className={styles.NavbarSubList}>
              {/* No list */}
              </ul>
          </li>

          <li>
            <a className={styles.heading} href="#">
              <i className="fa-solid fa-earth-americas"></i>
              <label htmlFor="public">PUBLIC</label>
            </a>

            <ul className={styles.NavbarSubList}>
              <li >
                <a href="/questions" className={` ${getLinkStyle('/questions')} main`}>
                  <label htmlFor="question">Questions</label>
                </a>
              </li>  
              <li >
                <a href="#" className={` ${getLinkStyle('/tags')} main`}>
                  <label htmlFor="tags">Tags</label>
                </a>
              </li>
              <li>
                <a href="#" className={` ${getLinkStyle('/users')} main`}>
                  <label htmlFor="users">Users</label>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className={styles.heading} href="#">
              <i className="fa-solid fa-grip-vertical"></i>
              <label htmlFor="collectives">COLLECTIVES</label>
            </a>
            <ul className={styles.NavbarSubList}>
              <li>
                <a href="#" className={` ${getLinkStyle('/exploreJobs')} main`}>
                  <label htmlFor="exploreJobs">Explore Jobs</label>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className={styles.heading} href="#">
              <i className="fa-solid fa-briefcase"></i>
              <label htmlFor="findJobs">FIND JOBS</label>
            </a>
            <ul className={styles.NavbarSubList}>
              <li>
                <a href="#" className={` ${getLinkStyle('/jobs')} main`}>
                  <label htmlFor="jobs">Jobs</label>
                </a>
              </li>
              <li>
                <a href="#" className={` ${getLinkStyle('/companies')} main`}>
                  <label htmlFor="companies">Companies</label>
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className={styles.heading} href="#">
              <i className="fa-solid fa-users"></i>
              <label htmlFor="teams">TEAMS</label>
            </a>
            <ul className={styles.NavbarSubList}>
              <li>
                <a href="/#" className={` ${getLinkStyle('/createTeam')} main`}>
                  <label htmlFor="createTeam">+ Create a Team</label>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarCollapse;
