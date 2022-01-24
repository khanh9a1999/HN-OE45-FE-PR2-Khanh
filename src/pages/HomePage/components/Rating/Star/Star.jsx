import React from 'react';
import styles from '../Rating.module.sass'
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarLineIcon from 'remixicon-react/StarLineIcon'

function Star({num}) {
    return (
        <div className={styles["rating-star"]}>
            {
                [1,2,3,4,5].map( (item, index) => {
                    if(item <= num) {
                        return (
                            <StarFillIcon key={index} />
                        )
                    }else {
                        return (
                            <StarLineIcon key={index} />
                        )
                    }
                })
            }
        </div>
    );
}

export default Star;
