import React from 'react';
import styles from '../Pagination.module.sass'

function NumberedList({currentPage, totalPages, handlePageChange}) {
    let current = currentPage,
    lastPage = totalPages,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

    for (let i = 1; i <= lastPage; i++) {
        if (i == 1 || i == lastPage || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return (
        <>
            {
                rangeWithDots.map((item) => (
                    <button
                      onClick={() => handlePageChange(item)}
                      className={item === currentPage ? styles.active : "non-active"}
                      key={item}
                    >
                      {item}
                    </button>
                ))
            }
        </>
    )
}

export default NumberedList;
