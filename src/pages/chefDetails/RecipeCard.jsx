import React from 'react';
import './RecipeCard.css'

const RecipeCard = ({ recipe }) => {
    const { name, ingredients, method, image, rating } = recipe;

    return (
        <div>
            <div className="row alert alert-success mt-5">
                <div className="col-md-6 p-0">
                    <img className='img-fluid h-100 p-4 ' src={image} alt="" />
                </div>
                <div className="col-md-6  ">
                    <h1 className='text-center'>{name}</h1>
                    <div className='d-flex align-items-center'>
                        <div>
                            <div className='mt-' >
                                <p className='fw-bold brand-color-bg text-white p-3'>Ingredients</p>
                                <ul>
                                    {ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div >
                                <p className='brand-color-bg text-white p-3 fw-bold'>Method</p>
                                <p>{method}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* <div className="card">
                
            </div>
           
            <div className='row '>
                <div className='d-flex justify-content-evenly'>
                    <div className="col-md-6">
                        
                    </div>
                    <div className="col-md-6">
                       
                    </div>
                </div>

            </div> */}


        </div>
    );
};

export default RecipeCard;