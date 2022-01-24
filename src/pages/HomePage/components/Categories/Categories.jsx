import React from 'react';
import styles from './Categories.module.sass'
import ArrowDropRightFillIcon from 'remixicon-react/ArrowDropRightFillIcon'

function Categories() {

    const listCategories = ['Electronic', 'Computer', 'Relux', 'Game', 'Food', 'Decor']

    return (
        <div className={styles["categories"]}>
            <h2>Categories: </h2>
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
