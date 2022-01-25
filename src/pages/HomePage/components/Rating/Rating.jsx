import React from 'react';
import styles from './Rating.module.sass'
import Star from './Star/Star'
import clsx from 'clsx'

function Rating() {
    return (
        <div className={clsx(styles["rating"], "d-flex", "flex-column")}>
            <h2>Rating:</h2>
            {
                [1,2,3,4,5].map( (num, index) => (
                    <Star 
                        key={index}
                        num={num}
                    />
                ))
            }
        </div>
    );
}

export default Rating;
