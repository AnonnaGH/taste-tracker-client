import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { name, ingredients, method, image, rating } = recipe;

    return (
        <div>
            <div className="card">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default RecipeCard;