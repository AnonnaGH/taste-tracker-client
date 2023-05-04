import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div className=' row mx-auto '>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <div>
                        <h1 className='display-2 bw-bold text-start'>

                            <span className='text-primary fw-bold text-success'>Page not found</span>
                        </h1>
                        <Link to='/'>
                            <button className='btn details-btn'>Back To Home</button>
                        </Link>

                    </div>


                </div>
                <div className='col-md-6'>


                    <img className='img-fluid' src='https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7901.jpg?w=2000' alt="" />
                </div>


            </div>


        </div>
    );
};

export default Errorpage;