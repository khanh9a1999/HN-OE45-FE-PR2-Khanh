import React from 'react';
import styles from './Rating.module.sass'
import Star from '../../../../components/Star/Star'
import clsx from 'clsx'
import {useTranslation} from 'react-i18next'

function Rating() {

    const { t } = useTranslation()

    return (
        <div className={clsx(styles["rating"], "d-flex", "flex-column")}>
            <h2>{t("Rating")}:</h2>
            {
                [1,2,3,4,5].map((num, index) => {
                    return (
                        <div className={styles["rating-star"]} key={index}>
                            <Star 
                                num={num}
                                size={24}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Rating;
