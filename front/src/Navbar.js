import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from "./style.css"

class Navbar extends React.Component {
  render(){
    return(
      <ul className={styles.nav}>
        <li  href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet" className={styles.title}>Calendar & Map App</li>

        <li className={styles.pages}>
          <Link to="/" className={styles.calendar}>Calendar</Link>
          <Link to="/maps" className={styles.map}>Map</Link>
        </li>
      </ul>
    )
  }
}

export default Navbar;