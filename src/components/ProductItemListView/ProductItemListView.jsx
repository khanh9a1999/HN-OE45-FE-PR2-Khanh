import React from 'react';
import styles from './ProductItemListView.module.sass'
import LuggageCartLineIcon from 'remixicon-react/LuggageCartLineIcon'
import Star from '../Star/Star'
import {useTranslation} from 'react-i18next'
import { getLocalStorage, handleAddToCartLocal, getAddCartMessage } from '../../helper/helper'
import { setNotification } from '../../store/slices/NotificationSlice'
import { setCartsLength } from '../../store/slices/ProductSlice';
import { useDispatch } from 'react-redux'

function ProductItemListView({item}) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const localCart = getLocalStorage('local-cart')

    function handleAddToCart(item) {
        const newCartItem = { ...item, quantity: 1 }
        const message = getAddCartMessage(newCartItem)
        handleAddToCartLocal(newCartItem, localCart)
        let newCartsLength = JSON.parse(localStorage.getItem('local-cart')).length
        dispatch(setNotification({type: 'success', message}))
        dispatch(setCartsLength(newCartsLength))
    }

    return (
        <div className={styles["item-products"]}>
            <img src={`./assets/images/${item.image}`} alt="img" />
            <div className={styles["product-preview"]}>
                <span className={styles["product-name"]}>{item.name}</span>
                <span className={styles["product-price"]}>{item.price}$</span>
                <p className={styles["product-desc"]}>{item.desc}</p>
                <div className="d-flex align-items-center gap-5">
                    <div className={styles["product-rating"]}>
                        <Star 
                            num={item.rating}
                        />
                    </div>
                    <button className={styles["add-cart"]} onClick={() => handleAddToCart(item)}>
                        <LuggageCartLineIcon />
                        {t("Add to cart")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItemListView;
