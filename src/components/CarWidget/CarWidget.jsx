import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



export const CarWidget = () => {
    const { totalQuantity } = useContext (CartContext)

    return(
        <>
        <Link to='/cart' className='cartWidget' style={{display: totalQuantity > 0 ? 'block': 'none'}}>
            <FontAwesomeIcon icon={faCartShopping} />
            {totalQuantity}
        </Link>
        </>
    );
}