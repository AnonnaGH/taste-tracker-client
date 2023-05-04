import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {

    const { id } = useParams();
    const chefRecipe = useLoaderData();


    return (
        <div>
            <div>
                <h1>chaf detsils</h1>
                <img
                    className="img-fluid rounded-start"
                    src={chefRecipe?.selectedChef?.picture}
                    alt=""
                />
            </div>
            <div>
                {chefRecipe?.selectedRecipe?.map((recipe) => (
                    <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
                ))}
            </div>
        </div>
    );
};

export default ChefDetails;