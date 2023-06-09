import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRecipe } from '../../services/recipeService';
import { Recipe } from '../../types/Recipe';


const RecipeDetails: React.FC = () => {
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const { id } = useParams();


    useEffect(() => {
        const fetchRecipe = async () => {
            if (id) {
                const data = await getRecipe(parseInt(id, 10));
                setRecipe(data);
                console.log(data)
            }
        };
        console.log('trecipe', recipe?.title)
        fetchRecipe();
    }, [id]);



    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1> <Link to={`/recipes/edit-recipe/${recipe.id}`}><button>Edit</button></Link>
            <p>Author: {recipe.author ? `${recipe.author.name} (ID: ${recipe.author.id})` : 'Unknown'}</p>
            <h3>Products:</h3>
            <ul>
                {recipe.products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>


            <Link to={`/`}><button>Back</button></Link>
        </div>
    );
};

export default RecipeDetails;
