import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';

const PostSection = () => {
    return (
        <div className="row mt-5">
            <div className="col-md-6 d-flex justify-content-center align-items-center post-section-bg">
                <div className="  mx-auto">
                    <h1 className='my-4'>

                        <span><FaQuoteLeft /></span> Discover the Flavorful and Diverse World of Indian Cuisine <span><FaQuoteRight /></span>
                    </h1>
                    <p className='fs-4 post-section-text'>Indian cuisine is a flavorful and diverse culinary experience known for its aromatic spices and unique blend of sweet, savory, and spicy flavors. With each state and community having its own distinct style of cooking, some of the most popular dishes include butter chicken, biryani, samosas, and chaat. Vegetarian and vegan options are also widely available. Indian food is about sharing and enjoying the experience with family and friends.</p>

                </div>
            </div>
            <div className="col-md-6 text-center">
                <LazyLoad offset={50}>
                    <img className='img-fluid' src='https://static.vecteezy.com/system/resources/previews/002/882/415/original/vertical-poster-with-traditional-indian-meals-free-vector.jpg' alt=" indian cuisine image" />
                </LazyLoad>
            </div>
        </div>
    );
};

export default PostSection;