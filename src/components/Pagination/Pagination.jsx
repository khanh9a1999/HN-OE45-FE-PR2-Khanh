import React from 'react';
import styles from './Pagination.module.sass'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setCurrentPage } from '../../store/slices/ProductSlice'
import { useTranslation } from 'react-i18next';
import NumberedList from './NumberedList/NumberedList';

function Pagination() {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const pagination = useSelector( state => state.products.pagination)
    const filter = useSelector( state => state.products.filter)
    const currentPage = useSelector( state => state.products.currentPage)
    const { _limit, _totalRows } = pagination
    const totalPages = Math.ceil(_totalRows / _limit)

    function handlePageChange(newPage) {
        dispatch(setCurrentPage(newPage));
        dispatch(setFilter({
            ...filter,
            _page: newPage
        }))
    }

    return (
        <div className={styles.pagination}>
            <button
                disabled={ currentPage <= 1 }
                onClick={() => handlePageChange(currentPage - 1)}
            >
                {t("Prev")}
            </button>
            <NumberedList
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
            <button
                disabled={ currentPage >= totalPages }
                onClick={() => handlePageChange(currentPage + 1)}
            >
                {t("Next")}
            </button>
        </div>
    );
}

export default Pagination;
