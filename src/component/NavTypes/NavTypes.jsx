import React from 'react';
import styles from './navtypes.module.sass'
import ShirtLineIcon from 'remixicon-react/ShirtLineIcon'
import HeadphoneLineIcon from 'remixicon-react/HeadphoneLineIcon'
import Cake2LineIcon from 'remixicon-react/Cake2LineIcon'
import SteamFillIcon from 'remixicon-react/SteamFillIcon'
import PlantLineIcon from 'remixicon-react/PlantLineIcon'
import XboxFillIcon from 'remixicon-react/XboxFillIcon'
import MouseLineIcon from 'remixicon-react/MouseLineIcon'
import GamepadLineIcon from 'remixicon-react/GamepadLineIcon'
import MacbookLineIcon from 'remixicon-react/MacbookLineIcon'
import BookLineIcon from 'remixicon-react/BookLineIcon'

function NavTypes() {
    return (
        <nav className={styles["nav-types"]}>
            <ul className={styles["list-types"]}>
                <li className={styles["item-types"]}>
                    <ShirtLineIcon />
                    Clothing Shoes
                </li>
                <li className={styles["item-types"]}>
                    <HeadphoneLineIcon />
                    Music
                </li>
                <li className={styles["item-types"]}>
                    <Cake2LineIcon />
                    Cake
                </li>
                <li className={styles["item-types"]}>
                    <SteamFillIcon />
                    Steam
                </li>
                <li className={styles["item-types"]}>
                    <PlantLineIcon />
                    Plan
                </li>
                <li className={styles["item-types"]}>
                    <XboxFillIcon />
                    Xbox
                </li>
                <li className={styles["item-types"]}>
                    <MouseLineIcon />
                    Mouse
                </li>
                <li className={styles["item-types"]}>
                    <GamepadLineIcon />
                    Gamepad
                </li>
                <li className={styles["item-types"]}>
                    <MacbookLineIcon />
                    Macbook
                </li>
                <li className={styles["item-types"]}>
                    <BookLineIcon />
                    Book
                </li>
            </ul>
        </nav>
    );
}

export default NavTypes;
