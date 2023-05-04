import React, { useState } from 'react';
import './RecipeCard.css'
import { BsFillSuitHeartFill } from "react-icons/bs";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const RecipeCard = ({ recipe }) => {
    const { name, ingredients, method, image, rating } = recipe;
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        setIsDisabled(true);


    };

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
                    <hr />
                    <div className='d-flex  justify-content-between mt-3'>

                        <div className='flex-grow-1 d-flex align-items-center'>
                            <Rating style={{ maxWidth: 180 }}
                                value={Math.round(rating || 0)} readOnly />
                            <span>{rating}</span>
                        </div>
                        <button onClick={handleClick} disabled={isDisabled} className='btn btn-color'><BsFillSuitHeartFill /> </button>
                    </div>
                </div>
            </div>
            <hr />



        </div>
    );
};

export default RecipeCard;