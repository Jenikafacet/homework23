import React from "react";
import styles from './tariff.module.css';

function Tariff(props) {
    const { theme, title, price, speed, onClick } = props;

    return (
        <div className={theme.tariffbox} onClick={onClick}>
            <h4 className={theme.tariff__title}>Безлимитный {title}</h4>
            <div className={theme.tariff__pricebox}>
                <p className={styles.tariff__currency}>руб</p>
                <p className={styles.tariff__price}>{price}</p>
                <p>/мес</p>
            </div>
            <p className={styles.tariff__speed}>до {speed} Мбит/сек</p>
            <p className={styles.tariff__text}>Объем включенного трафика не ограничен</p>
        </div>
    );
}

export default Tariff;