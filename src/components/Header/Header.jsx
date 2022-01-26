import React, {useState} from 'react';
import styles from './Header.module.sass'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import SearchLineIcon from 'remixicon-react/SearchLineIcon'
import CloseLineIcon from 'remixicon-react/CloseLineIcon'
import ShoppingCart2LineIcon from 'remixicon-react/ShoppingCart2LineIcon'
import GlobalLineIcon from 'remixicon-react/GlobalLineIcon'
import {useTranslation} from 'react-i18next'
import MenuLineIcon from 'remixicon-react/MenuLineIcon'

function Header() {

    const { t, i18n } = useTranslation()
    const [language, setLanguage] = useState("en")
    const [toggle, setToggle] = useState(false)

    function changeLanguage() {
        if(language === "en") {
            i18n.changeLanguage("vi")
            setLanguage("vi")
        } else {
            i18n.changeLanguage("en")
            setLanguage("en")
        }
    }

    function handleToggleMenu() {
        setToggle(prevState => !prevState)
    }   

    return (
        <header className={styles["header"]}>
            <div className={styles["header-container"]}>
                <img className={styles["logo"]} src={Logo} alt="logo" />
                <div className={ toggle ? styles["toggle"] :  styles["tool-pc"] }>
                    <GlobalLineIcon className={styles["change-language"]}
                        onClick={changeLanguage}
                    />
                    <div className={styles["header-search"]}>
                        <SearchLineIcon className={styles["search-icon"]} />
                        <input 
                            type="text"
                            placeholder="Search a Products"
                        />
                        <CloseLineIcon className={styles["close-icon"]} />
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
                <MenuLineIcon onClick={handleToggleMenu} className={styles["menu-icon"]} />
            </div>
        </header>
    );
}

export default Header;
