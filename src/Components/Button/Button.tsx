import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Controllers/store";
import {reserveProdAC} from "../../Controllers/card-reducer";
import styles from "./Button.module.css";    
import {Image} from "./images/Image";
import {Description} from "./Description/Description";


export const Button = () => {
    let startValue = useSelector<AppStateType, number>(state => state.card.startValue);
    let reserveValue = useSelector<AppStateType, number>(state => state.card.reserveValue);
    let title = useSelector<AppStateType, string>(state => state.card.title);
    let price = useSelector<AppStateType, number>(state => state.card.price);

    const dispatch = useDispatch();
    const reserveProduct = () => {
        if (startValue > 0) dispatch(reserveProdAC());
    }
    
    return (
        <div>
            <button className={styles.button} onClick={reserveProduct}>
                <Image/>
                <Description startValue={startValue} price={price} title={title}/>
            </button>
        </div>
    )
}