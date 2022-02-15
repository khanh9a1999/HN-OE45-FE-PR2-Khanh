import React from 'react';
import { useTranslation } from 'react-i18next'
import styles from './ConfirmPayment.module.sass'
import { Form, Button } from 'react-bootstrap'
import FormGroup from '../../components/FormGroup/FormGroup';
import { getLocalStorage } from '../../helper/helper'
import Cart from '../Cart/Cart'
import { useDispatch } from 'react-redux'
import { AddOrderToDbJson, setCartsLength, setValueInputPayment } from '../../store/slices/CartSlice'
import { useNavigate } from 'react-router-dom'
import { setNotification } from '../../store/slices/NotificationSlice'

function ConfirmPayment() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const localPaymentInfo = getLocalStorage('local-payment-info')
    const localCartItems = getLocalStorage('local-cart')
    const { fullName, email, phone, address, message } = localPaymentInfo[0]

    const handlePayment = () => {
        dispatch(AddOrderToDbJson({
            localPaymentInfo,
            localCartItems
        }))
        dispatch(setNotification({type: 'success', message: t('Your order has been successfully placed')}))
        navigate('/')
        localStorage.removeItem('local-cart')
        dispatch(setCartsLength(0))
        dispatch(setValueInputPayment({
            fullName,
            email,
            phone,
            address
        }))
    }

    return (
        <>
            <Cart />
            <section className={styles['form-confirm-payments']}>
                <h2 className={styles['form-title']}>{t('Confirm delivery information')}</h2>
                <Form className={styles['form-input']}>
                    <FormGroup 
                        label={t('Full name')}
                        disabled='disabled'
                        value={fullName}
                    />
                    <FormGroup 
                        label={t('Email address')}
                        disabled='disabled'
                        value={email}
                    />         
                    <FormGroup 
                        label={t('Phone number')}
                        disabled='disabled'
                        value={phone}
                    />     
                    <FormGroup 
                        label={t('Delivery address')}
                        disabled='disabled'
                        value={address}
                    />         
                    <FormGroup 
                        label={t('Message')}
                        disabled='disabled'
                        value={message}
                    /> 
                    <Button variant="outline-primary" type="submit" size="lg" onClick={handlePayment}>{t('Submit')}</Button>
                </Form>
            </section>
        </>
    );
}

export default ConfirmPayment;
