import React from 'react';
import styles from './Products.module.sass'
import ListCheckIcon from 'remixicon-react/ListCheckIcon'
import GridLineIcon from 'remixicon-react/GridLineIcon'
import clsx from 'clsx'
import ProductItem from '../../../../components/ProductItem/ProductItem'
import {useTranslation} from 'react-i18next'

function Products() {

    const { t } = useTranslation()

    const listProducts = [
        {
            images: "Pr1.png",
            price: 50,
            desc: "Eligibe for Shipping To Mars or somewhere elses",
            rating: 1
        },
        {
            images: "Pr2.png",
            price: 30,
            desc: "Eligibe for Shipping To Mars or somewhere elses",
            rating: 3
        },
        {
            images: "Pr3.png",
            price: 40,
            desc: "Eligibe for Shipping To Mars or somewhere elses",
            rating: 2
        },
        {
            images: "Pr1.png",
            price: 15,
            desc: "Eligibe for Shipping To Mars or somewhere elses",
            rating: 5
        },
        {
            images: "Pr2.png",
            price: 35,
            desc: "Eligibe for Shipping To Mars or somewhere elses",
            rating: 4
        },
        {
            images: "Pr3.png",
            price: 60,
            desc: "Eligibe for Shipping To Mars or somewhere elses",
            rating: 2
        }
    ]

    return (
        <div className={styles["products"]}>
            <div className={styles["utilities-products"]}>
                <select className={styles["sort-price"]}>
                    <option value="default">{t("Default")}</option> 
                    <option value="esc">{t("Price ESC")}</option>
                    <option value="desc">{t("Price DESC")}</option>
                </select>
                <div className={styles["opt-products"]}>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="products-list" id="show-all" />
                        <label className={clsx(styles["sort-listproduct"], "btn btn-outline-primary")} htmlFor="show-all">{t("Show all")}</label>

                        <input type="radio" className="btn-check" name="products-list" id="sale-off" />
                        <label className={clsx(styles["sort-listproduct"], "btn btn-outline-primary")} htmlFor="sale-off">{t("Sale off")}</label>

                        <input type="radio" className="btn-check" name="products-list" id="features" />
                        <label className={clsx(styles["sort-listproduct"], "btn btn-outline-primary")} htmlFor="features">{t("Features")}</label>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className="btn-check" name="list-types" id="list-products" />
                        <label className={clsx(styles["type-list"], "btn btn-outline-primary")} htmlFor="list-products">
                            <ListCheckIcon />
                        </label>

                        <input type="radio" className="btn-check" name="list-types" id="grid-products" />
                        <label className={clsx(styles["type-list"], "btn btn-outline-primary")} htmlFor="grid-products">
                            <GridLineIcon />
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles["related-search"]}>
                <h2>Related:</h2>
                <span className={styles["item-related"]}>steam game</span>
                <span className={styles["item-related"]}>plan tree</span>
                <span className={styles["item-related"]}>david backben</span>
            </div>
            <div className={styles["list-products"]}>
                {
                    listProducts.map((item, index) => (
                        <ProductItem
                            item={item}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Products;
