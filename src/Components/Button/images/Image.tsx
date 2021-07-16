import React from "react";
import img from "./image.png";
import styles from "./Image.module.css";

export const Image = () => {

    return (
        <div className={styles.image}>
            <img src={img} alt={"icon"}></img>
        </div>
    )
}