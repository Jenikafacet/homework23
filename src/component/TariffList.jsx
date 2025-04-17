import React, { useState } from 'react';
import Tariff from './Tariff';
import styles from './tariffList.module.css';
import themeA from "./theme-a.module.css";
import themeB from "./theme-b.module.css";
import themeC from "./theme-c.module.css";

function TariffList() {

    const tariffList = [{id: 1, title: 300, price: 300, speed: 10, theme: themeA, theme2: themeC},
        {id: 2, title: 450, price: 450, speed: 50, theme: themeA, theme2: themeC},
        {id: 3, title: 550, price: 550, speed: 100, theme: themeB, theme2: themeC},
        {id: 4, title: 1000, price: 1000, speed: 200, theme: themeA, theme2: themeC}
    ];

    const [activeId, setActiveId] = useState(null);

    const handleClick = (id) => {
        setActiveId(id);
    };

    return (
        <React.Fragment>
            <div className={styles.tarifflist}>
                {tariffList.map((item)=> {
                    return <Tariff 
                        onClick={() => handleClick(item.id)} 
                        key={item.id} 
                        title={item.title} 
                        price={item.price} 
                        speed={item.speed}
                        theme={ activeId === item.id
                            ? item.theme2
                            : item.theme
                        }
                    />
                })}
            </div>
        </React.Fragment>
    );
}

export default TariffList;