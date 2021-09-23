import React , {useContext , useState} from  'react';

import Modal from '../UI/Modal/Modal'
import  styled from './Cart.module.css';

import CartContext  from '../../store/cart-context'
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting , setIsSubmitting] = useState(false)
    const [didSumbit , setDidSubmit] = useState(false)
    const cartCtx = useContext(CartContext);

    const  totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);

    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const orderHandler = () => {
        setIsCheckout(true);

    }

    const submitOrderHandler = async (userData) => {
        console.log(userData);
        setIsSubmitting(true);
         await fetch('http://127.0.0.1/react-food-order-app/setOrder.php' , {
            method: 'POST',
            body: JSON.stringify({
                    user: userData,
                    orderItem:cartCtx.items
                })

        })
        setIsSubmitting(false);
        setIsSubmitting(true);
        cartCtx.clearCart();

    }


    const modalActions =   <div className={styled.actions}>
        <button className={styled['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={styled.button} onClick={orderHandler}>Order</button>}
    </div>;

    const isSubmittingModalContent = <p> Sending order data...</p>

    const didSubmitModalContent = <p> Successfuly sent the order</p>
    const  cartItems =
        <ul className={styled['cart-items']}>
            {cartCtx.items.map((item) =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}>
                </CartItem>)}</ul>;

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={styled.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
            {!isCheckout && modalActions}
        </React.Fragment>
    )




    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSumbit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSumbit && didSubmitModalContent}

        </Modal>

    )


}

export default Cart;