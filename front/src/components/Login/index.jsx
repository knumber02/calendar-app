import React from "react";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import * as styles from "./styles.css";

let style = {
    button: {
        variant:"contained",
        backgroundColor: "#0C0",
    }
}
const LoginPage = () => (
       <div className={styles.body}>
        <div className={styles.container}>
            <h1 className={styles.title}>Calendar & Map App !!!</h1>
            <h2>Welcome to My Final Project!</h2>
            <p>Please log in or sign up</p>
            <Button style={style.button} ><Link to="/calendar">Log in</Link></Button>
            {/* <Link to="/sign in"><Button>Sing up</Button></Link> */}
         </div>
        </div>
);
export default LoginPage
