import React, { useEffect } from 'react';
import styles from './Categories.module.sass'
import ArrowDropRightFillIcon from 'remixicon-react/ArrowDropRightFillIcon'
import {useTranslation} from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import { getPostApi, setFilter, setCurrentPage } from '../../../../store/slices/ProductSlice'

function Categories() {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { categoriesList } = useSelector(state => state.products.categories)
    const filter = useSelector(state => state.products.filter)

    useEffect(() => {
        dispatch(getPostApi())
    },[])

    function handleFilterCategories(categories) {
        dispatch(setFilter({
            ...filter,
            _page: 1,
            categories_like: categories
        }))
        dispatch(setCurrentPage(1))
    }

    return (
        <div className={styles["categories"]}>
            <h2>{t("Categories")}: </h2>
            <ul className={styles["list-categories"]}>
                {
                    categoriesList.map( (item, index) => {
                        return (
                            <li key={index} className={styles["item-categories"]} onClick={() => handleFilterCategories(item)}>
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
