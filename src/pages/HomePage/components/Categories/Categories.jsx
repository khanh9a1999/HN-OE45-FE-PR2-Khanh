import React from 'react';
import styles from './Categories.module.sass'
import ArrowDropRightFillIcon from 'remixicon-react/ArrowDropRightFillIcon'
import {useTranslation} from 'react-i18next'

function Categories() {

    const { t } = useTranslation()

    const listCategories = ['Electronic', 'Computer', 'Relux', 'Game', 'Food', 'Decor']

    return (
        <div className={styles["categories"]}>
            <h2>{t("Categories")}: </h2>
            <ul className={styles["list-categories"]}>
                {
                    listCategories.map( (item, index) => {
                        return (
                            <li key={index} className={styles["item-categories"]}>
                                <ArrowDropRightFillIcon />
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Categories;
