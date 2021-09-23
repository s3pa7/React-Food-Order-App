import React from 'react';
import MealsSummery from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";




const Meals = () =>{
    return (
        <React.Fragment>
            <MealsSummery/>
            <AvailableMeals/>

        </React.Fragment>
    )
}

export default Meals;