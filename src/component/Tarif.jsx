import React from "react";
import styles from './tarif.module.css';

function Tarif(props) {
    const theme = props.theme;
    return (
        <div className={theme.tarifbox}>
            <h4 className={theme.tarif__title}>Безлимитный {props.title}</h4>
            <div className={theme.tarif__pricebox}>
                <p className={styles.tarif__currency}>руб</p>
                <p className={styles.tarif__price}>{props.price}</p>
                <p>/мес</p>
            </div>
            <p className={styles.tarif__speed}>до {props.speed} Мбит/сек</p>
            <p className={styles.tarif__text}>Объем включенного трафика не ограничен</p>
        </div>
    );
}

export default Tarif;