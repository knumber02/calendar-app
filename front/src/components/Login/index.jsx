import React from "react";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import * as styles from "./styles.css";

const style = {
    button: {
        variant:"contained",
        backgroundColor: "#0C0",
        fontSize: "1.15em",
        '&:hover': {
            opacity: "50%",
        }
    },
}
const LoginPage = () => (
       <div className={styles.body}>
        <div className={styles.container}>
            <h1 className={styles.title}>Calendar & Map App !!!</h1>
            <h2>~Welcome to My Final Project!~</h2>
            <p className={styles.text}>Please push the below button.</p>
            <Button style={style.button} ><Link to="/calendar"　style={{textDecoration: "none"}}>START</Link></Button>
         </div>
        </div>
);
export default LoginPage
