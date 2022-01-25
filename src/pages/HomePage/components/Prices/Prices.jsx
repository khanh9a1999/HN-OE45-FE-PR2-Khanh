import React from 'react';
import styles from './Prices.module.sass'
import {useTranslation} from 'react-i18next'

function Prices() {

    const { t } = useTranslation()

    const listPricesRange = ['1$ - 5$', '5$ - 10$', '10$ - 15$', '15$ - 20$', '20$ - 30$']

    return (
        <div className={styles["prices"]}>
            <h2>{t("Price")}:</h2>
            <div className={styles["prices-range"]}>
                {
                    listPricesRange.map( (item, index) => {
                        return (
                            <span key={index}>{item}</span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Prices;
