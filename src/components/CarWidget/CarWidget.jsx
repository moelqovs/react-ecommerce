import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



export const CarWidget = () => {
    const { totalQuantity } = useContext (CartContext)

    console.log(totalQuantity)

    return(
        <>
            <Link to='/cart' className='cartWidget'>
                <FontAwesomeIcon icon={faCartShopping} />
                <span> { totalQuantity() || '' } </span>
            </Link>
        </>
    );
}


