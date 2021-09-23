import React from 'react';
import styled from './Header.module.css';

import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {




    return (

        <React.Fragment>
            <header className={styled.header}>
                <h1>ReactMeal</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styled['main-image']}>
                <img  src={mealsImage} alt="A table full of delicious food!"/>
            </div>
        </React.Fragment>

    );



}
export default Header