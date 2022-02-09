import i18next from 'i18next'

export const getLocalStorage = (localItem) => {
    return JSON.parse(localStorage.getItem(localItem))
}

export const handleAddToCartLocal = (item, localCartItems) => {
    if (localCartItems) {
        const itemExist = localCartItems.find(elm => elm.id === item.id)
        if (itemExist) {
            const newCartLocal = localCartItems.map(cart => {
                if (cart.id === item.id) {
                    return {...cart, quantity: Number(itemExist.quantity) + item.quantity}
                }
                return cart
            })
            localStorage.setItem('local-cart', JSON.stringify(newCartLocal))
        } else {
            localStorage.setItem('local-cart', JSON.stringify([...localCartItems, {...item, quantity: 1}]))
        }
    } else {
        localStorage.setItem('local-cart', JSON.stringify([{...item, quantity: 1}]))
    }
}

export const getAddCartMessage = (item) => {
    return `${i18next.t('Added')} ${item.quantity} ${item.name} ${i18next.t('to the cart!')}`
}

export const getTotalCart = (arr = []) => {
    return arr ? arr.reduce((total, cart) => total + (cart.price*cart.quantity), 0) : 0
}

export const getTotalCartVAT = (total, vat) => {
    return (total * vat / 100) + total
}
