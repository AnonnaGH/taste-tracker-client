import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div>
            <div className=' row mx-auto '>
                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <div>
                        <h1 className='display-2 bw-bold text-start'>

                            <span className='text-primary'>Page not found</span>
                        </h1>
                        <Link to='/'>
                            <button className='btn details-btn'>Back To Home</button>
                        </Link>

                    </div>


                </div>
                <div className='col-md-6'>


                    <img className='img-fluid' src='https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1902.jpg?w=826&t=st=1681134446~exp=1681135046~hmac=65081a045d64f753b8a752be1f0042cd87fde1efdde518224561a1b57f5ccb2d' alt="" />
                </div>


            </div>


        </div>
    );
};

export default Errorpage;