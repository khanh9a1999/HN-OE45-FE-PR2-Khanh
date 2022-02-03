import React, { useEffect, useState } from 'react';
import styles from './Products.module.sass'
import ListCheckIcon from 'remixicon-react/ListCheckIcon'
import GridLineIcon from 'remixicon-react/GridLineIcon'
import clsx from 'clsx'
import ProductItemGridView from '../../../../components/ProductItemGridView/ProductItemGridView'
import ProductItemListView from '../../../../components/ProductItemListView/ProductItemListView' 
import Pagination from '../../../../components/Pagination/Pagination'
import { useTranslation } from 'react-i18next'
import { getAllProducts, setFilter, getPagination, setCurrentPage } from '../../../../store/slices/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

function Products() {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const VIEW_MODES = [
        {
            value: 'grid',
            icon: GridLineIcon,
        },
        {
            value: 'list',
            icon: ListCheckIcon,
        },
    ];
    const PRODUCTS_LIST = ['Show all', 'Sale off', 'Features']
    const { listAllProducts, isLoading } = useSelector( state => state.products.allProducts)
    const filter = useSelector( state => state.products.filter)
    const [viewMode, setViewMode] = useState(VIEW_MODES[0].value);
    const [productsList, setProductsList] = useState(PRODUCTS_LIST[0])    

    useEffect(() => {
        dispatch(getAllProducts(filter))
        dispatch(getPagination({
            ...filter,
            _page: '',
            _limit: ''
        }))
    },[filter, dispatch])

    function ListView() {
        return (
            <div className={styles["list-view"]}>
                { 
                    isLoading ? <h1>Loading...</h1> : listAllProducts.map((item, index) => (
                                                        <ProductItemGridView
                                                            item={item}
                                                            key={index}
                                                        />
                                                    ))
                }
            </div>
        )
    }

    function GridView() {
        return (
            <div className={styles["grid-view"]}>
                {
                    isLoading ? <h1>Loading...</h1> : listAllProducts.map((item, index) => (
                        <ProductItemListView
                            item={item}
                            key={index}
                        />
                    ))
                }
            </div>
        )
    }

    function handleSortByProductsList(item) {
        if (item === "Show all") {
            dispatch(setFilter({
                _page: 1,
                _limit: 2
            }))
            setProductsList(item)
        } else {
            dispatch(setFilter({
                ...filter,
                _page: 1,
                label_like: item
            }))
            setProductsList(item)
        }
        dispatch(setCurrentPage(1))
    }

    return (
        <div className={styles["products"]}>
            <div className={styles["utilities-products"]}>
                <select className={styles["sort-price"]}>
                    <option value="default">{t("Default")}</option> 
                    <option value="esc">{t("Price ESC")}</option>
                    <option value="desc">{t("Price DESC")}</option>
                </select>
                <div className={styles["opt-products"]}>
                    {
                        PRODUCTS_LIST.map( item => (
                            <button className={clsx(
                                styles["button"],
                                item === productsList && styles.active
                              )}
                              onClick={() => handleSortByProductsList(item)}
                            >
                                {item}
                            </button>
                        ))
                    }
                    {
                        VIEW_MODES.map(({ value, icon: Icon }) => (
                            <button className={clsx(
                                styles["button"],
                                value === viewMode && styles.active
                              )}
                              onClick={() => setViewMode(value)}
                            >
                                <Icon />
                            </button>
                         ))
                    }
                </div>
            </div>
            <div className={styles["related-search"]}>
                <h2>Related:</h2>
                <span className={styles["item-related"]}>steam game</span>
                <span className={styles["item-related"]}>plan tree</span>
                <span className={styles["item-related"]}>david backben</span>
            </div>
            {
                (viewMode === 'grid') ? <ListView /> : <GridView />
            }
            <Pagination />
        </div>
    );
}

export default Products;
