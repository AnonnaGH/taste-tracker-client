import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {

    const { id } = useParams();
    const chefRecipe = useLoaderData();


    return (
        <div>
            <div>
                <h1 className='text-center text-success alert alert-success mt-3'>Chef Details</h1>
                <div className='row my-4'>
                    <div className='col-md-4 text-center'>
                        <img
                            className="img-fluid rounded-start"
                            src={chefRecipe?.selectedChef?.picture}
                            alt=""
                        />

                    </div>
                    <div className="col-md-8 pe-5">
                        <div className="card-body">
                            <h3 className="card-title mb-3 text-success alert alert-success">{chefRecipe?.selectedChef?.name}</h3>
                            <p>{chefRecipe?.selectedChef?.bio}</p>
                            <hr />
                            <p className='fw-bold'> Recipes: {chefRecipe?.selectedChef?.recipes} recipes</p>
                            <p className='fw-bold'>Experience: {chefRecipe?.selectedChef?.experience} Years</p>
                            <p className='fw-bold'> Likes: {chefRecipe?.selectedChef?.likes}</p>
                        </div>
                    </div>
                </div>
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