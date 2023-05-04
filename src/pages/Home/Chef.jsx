import React, { useEffect, useState } from 'react';
import './Chef.css'
import { Link } from 'react-router-dom';

const Chef = () => {
    const [chef, setChef] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/chef")
            .then((res) => res.json())
            .then((data) => setChef(data))
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className="container ">
            <h1 className="text-center mt-4">Indian Chef</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {chef.map((chef) => (
                    <div className="col" key={chef.id}
                        chef={chef}>
                        <div className="card h-100">
                            <img className='img-fluid chef-img' src={chef.picture} alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-center ">{chef.name}</h5>
                                <p> Experiences: {chef.experience} years</p>
                                <p> Recipes: {chef.recipes}</p>
                                <p>Likes: {chef.likes}</p>
                            </div>
                            <Link to={`/chef/${chef.id}`}> <button className='btn btn-color w-100'>View Recipes</button></Link>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chef;