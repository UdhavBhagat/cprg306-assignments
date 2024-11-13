"use client"

import React, { useState, useEffect } from 'react';


const fetchMealIdeas = async (ingredient) => {
    const response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ ingredient }) {

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        if (meals) {
            const mealArray = meals.map(meal => meal.strMeal);
            setMeals([...mealArray]);
            console.log(mealArray);
        } else {
            setMeals([]);
        }
        
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas</h1>
            <p>Select an item to see meal ideas</p>
            <ul>
            { meals.length > 0 ? meals.map((meal) => (
                <li key={meal} className="list-none bg-slate-900 m-2 p-2 max-w-sm text-white">{meal}</li> 
            )) : <p>No Meals found for {ingredient}</p>}
            </ul>
        </div>
    )
}