import React from 'react';
import heroImg from '../../assets/hero-img.png';
import './Home.css'
import Chef from './chef';
import PostSection from './PostSection';
import AskQuesSection from './AskQuesSection';

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="  mx-auto">
                        <p className='text-success fs-1 '>Experience the <span className='fw-bold brand-color-text'>bold and exotic tastes</span> of India with every bite of its cuisine.</p>
                        <p className='h4 mb-3 '>Taste the cultural diversity of Indian in every dish</p>
                        <button className='btn btn-color'>Explore more!</button>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img className='img-fluid' src={heroImg} alt="" />
                </div>
            </div>

            <div className="row">
                <Chef></Chef>
            </div>

            <PostSection></PostSection>
            <AskQuesSection></AskQuesSection>
        </div>
    );
};

export default Home;