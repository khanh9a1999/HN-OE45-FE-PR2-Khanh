import React from 'react';
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarLineIcon from 'remixicon-react/StarLineIcon'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter, setCurrentPage } from '../../store/slices/ProductSlice' 

function Star({num, size = 20}) {

    const dispatch = useDispatch()
    const filter = useSelector( state => state.products.filter)

    function handleFilterStar() {
        dispatch(setFilter({
            ...filter,
            _page: 1,
            rating_like: num
        }))
        dispatch(setCurrentPage(1))
    } 

    return (
        <>
            {
                [...Array(5).keys()].map((item, index) => {
                    if(item < num) {
                        return (
                            <StarFillIcon key={index} size={size} onClick={handleFilterStar} />
                        )
                    } else {
                        return (
                            <StarLineIcon key={index} size={size} onClick={handleFilterStar} />
                        )
                    }
                })
            }
        </>
    );
}

export default Star;
