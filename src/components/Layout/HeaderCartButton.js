import React, {useContext ,useEffect, useState} from  'react';

import styled from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";

import CartContex from '../../store/cart-context'


const HeaderCartButton = (props) => {
    const [btnIsHighlighten , setBtnIsHighlighted] = useState(false);
    const cartCtx =  useContext(CartContex);

    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber ,item) => {
        return curNumber + item.amount;

    }, 0);

    const bntClasses = `${styled.button} ${btnIsHighlighten ? styled.bump : ''}`;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);

        },300);

        return () => {
            clearTimeout(timer);
        }

    },[items])

    return (

            <button className={bntClasses} onClick={props.onClick}>
                <span className={styled.icon}>
                    <CartIcon/>
                </span>
                <span>
                    Your Cart
                </span>
                <span className={styled.badge}>
                    {numberOfCartItems}
                </span>

            </button>


    );
}

export default HeaderCartButton;