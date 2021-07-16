import React from "react";
import styles from "./Description.module.css";    


export const Description = (props: any) => {

    return (
        <div className={styles.description}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.price}>$ {props.price}</span>
            <span className={styles.startValue}>{props.startValue} Bowls available</span>
        </div>
    )
}