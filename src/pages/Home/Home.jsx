import React from 'react';
import heroImg from '../../assets/hero-img.png';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="  mx-auto">
                        <h1 className='text-success'>Experience the <span className='fw-bold brand-color-text'>bold and exotic tastes</span> of India with every bite of its cuisine.</h1>
                        <p className='h4'>Taste the cultural diversity of Indian in every dish</p>
                        <button className='btn btn-color'>Explore more!</button>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img className='img-fluid' src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;