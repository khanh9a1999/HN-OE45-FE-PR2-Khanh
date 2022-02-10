import React from 'react';
import styles from './Navtypes.module.sass'
import { setFilter, setCurrentPage } from '../../../../store/slices/ProductSlice' 
import { useSelector, useDispatch } from 'react-redux'

function NavTypes() {

    const dispatch = useDispatch()
    const filter = useSelector(state => state.products.filter)
    const { typesList } = useSelector(state => state.products.types)

    function handleFilterTypes(item) {
        dispatch(setFilter({
            ...filter,
            _page: 1,
            type_like: item
        }))
        dispatch(setCurrentPage(1))
    }

    return (
        <nav className={styles["nav-types"]}>
            <ul className={styles["list-types"]}>
                {
                    typesList.map( (item, index) => {
                        return (
                            <li className={styles["item-types"]} key={index} onClick={() => handleFilterTypes(item)}>
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
}

export default NavTypes;
