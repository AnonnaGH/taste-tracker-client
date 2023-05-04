import React from 'react';

const AskQuesSection = () => {
    return (
        <div className='container'>
            <div className="row bg-dark">
                <div className="col-md-6 p-4">
                    <img className='img-fluid ' src="https://www.pngmart.com/files/5/Indian-Food-PNG-Photos.png" />

                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center text-center">
                    <div>
                        <h1 className="text-danger">Have Any Quesiton ?</h1>
                        <h1 className="text-white">+88017333333</h1>
                        <button className='btn btn-success mb-5'>MAKE A CALL</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AskQuesSection;