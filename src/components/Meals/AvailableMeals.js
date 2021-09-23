import React, {useEffect, useState }from 'react';

import styled from './AvailableMeals.module.css';
import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from '../hooks/use-http';



const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchTasks } = useHttp();

    useEffect(() => {
        const transformMeals = (mealsObj) => {
            debugger;
            const mealsData = [];
            for (const mealKey in mealsObj) {
                mealsData.push({ id: mealsObj[mealKey].id,
                    name: mealsObj[mealKey].name,
                    description: mealsObj[mealKey].description,
                    price:mealsObj[mealKey].price });
            }
            debugger;
            setMeals(mealsData);
            console.log(meals);

        };
        fetchTasks(
            { url: 'http://127.0.0.1/react-food-order-app/getMeals.php' },
            transformMeals
        );
    }, [fetchTasks]);

   /* const taskAddHandler = (task) => {
        setMeals((prevTasks) => prevTasks.concat(task));
    };
*/
   if(error){
      return <section>
          <p>{error}</p>
      </section>
   }
    console.log(meals);
    debugger;
    const mealsList = meals.map(meal =>
        <MealItem loading={isLoading}
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}>

        </MealItem>);


    return (
        <section className={styled.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>


    );

}

export default AvailableMeals;