import React, {useState} from 'react';
import styles from './header.module.sass'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import CloseLineIcon from 'remixicon-react/CloseLineIcon'
import ShoppingCart2LineIcon from 'remixicon-react/ShoppingCart2LineIcon'
import GlobalLineIcon from 'remixicon-react/GlobalLineIcon'
import {useTranslation} from 'react-i18next'

function Header() {

    const { t, i18n } = useTranslation()
    const [language, setLanguage] = useState("en")

    function changeLanguage(){
        if(language === "en"){
            i18n.changeLanguage("vi")
            setLanguage("vi")
        }else{
            i18n.changeLanguage("en")
            setLanguage("en")
        }
    }

    return (
        <header className="header">
            <div className={styles["header-container"]}>
                <img className={styles["logo"]} src={Logo} alt="logo" />
                <GlobalLineIcon className={styles["change-language"]}
                    onClick={changeLanguage}
                    size={32}
                />
                <div className={styles["header-search"]}>
                    <SearchLineIcon className={styles["search-icon"]} size={32} />
                    <input 
                        type="text"
                        placeholder="Search a Products"
                    />
                    <CloseLineIcon className={styles["close-icon"]} size={32} />
                </div>
                <div className={styles["account"]}>
                    <Link className={styles["sign-in"]} to="/signin">{t("Sign in")}</Link>
                    <Link className={styles["register"]} to="/register">{t("Register")}</Link>
                    <Link className={styles["cart"]} to="/cart">
                        <ShoppingCart2LineIcon className={styles["cart-icon"]} />
                        {t("Cart")}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
