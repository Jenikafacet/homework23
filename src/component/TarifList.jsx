import React from 'react';
import Tarif from './Tarif';
import styles from './tarifList.module.css';
import themeA from "./theme-a.module.css";
import themeB from "./theme-b.module.css";

function TarifList() {
    return (
        <React.Fragment>
            <div className={styles.tariflist}>
                <Tarif theme={themeA}
                    title='300'
                    price='300'
                    speed='10'
                />
                <Tarif theme={themeA}
                    title='450'
                    price='450'
                    speed='50'
                />
                <Tarif theme={themeB}
                    title='550'
                    price='550'
                    speed='100'
                />
                <Tarif theme={themeA}
                    title='1000'
                    price='1000'
                    speed='200'
                />
            </div>
        </React.Fragment>
    );
}

export default TarifList;