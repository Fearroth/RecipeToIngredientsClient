

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../../services/recipeService';
import { Recipe } from '../../types/Recipe';
import RecipeListItem from '../RecipeListItem/RecipeListItem';

const RecipeList: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getAllRecipes();
            setRecipes(data);
        };

        fetchRecipes();
    }, []);

    return (
        <div>

            <h1>Recipes</h1>
            <Link to={`recipes/create-recipe/`}>Add New Recipe</Link>
            <ul>
                {recipes.map((recipe) => (
                    <RecipeListItem key={recipe.id} recipe={recipe} />
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
