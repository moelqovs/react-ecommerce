import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';



export const CarWidget = () => {

    return(
        <>
        <FontAwesomeIcon icon={faCartShopping} />
            <div id='ItemCount' className='ItemCount'>
                0
            </div>
        </>
    );
}