import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from "./style.css"


class Navbar extends React.Component {
  
  render(){
    return(
      <ul className={styles.nav}>
        <li  href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet" className={styles.title}>Calendar & Map App</li>

        <li className={styles.pages} >
          <Link to="/" className={styles.calendar}　style={{textDecoration: "none"}}>Top</Link>
          <Link to="/calendar" className={styles.calendar} style={{textDecoration: "none"}}>Calendar</Link>
          <Link to="/maps" className={styles.map} style={{textDecoration: "none"}}>Map</Link>
        </li>
      </ul>
    )
  }
}

export default Navbar;