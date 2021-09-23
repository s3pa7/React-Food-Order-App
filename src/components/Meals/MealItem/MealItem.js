import {useContext} from  'react';

import styled from './MealItem.module.css'
import MealItemForm from './MealItemForm.js';

import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
    debugger;
    const  cartCtx  = useContext(CartContext);
    //const price = `$${props.price.toFixed(2)}`
    let  price = parseFloat(props.price);
    price = price.toFixed(2);

    const addCartHandler = (amount) =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }



    return (
            <li className={styled.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={styled.description}>{props.description}</div>
                    <div className={styled.price}>
                        {price}
                    </div>
                </div>
                <div>
                    <MealItemForm onAddToCart={addCartHandler}/>
                </div>

            </li>

    )
}
export default MealItem;