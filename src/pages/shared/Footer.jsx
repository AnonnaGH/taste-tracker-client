import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="py-5">
                <div className="row bg-success p-4 text-white">
                    <div className="col-md-6">
                        <h5>Taste Tracker</h5>
                        <ul className="nav d-flex">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-4 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-4 text-white">Blog</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-4 text-white">Login</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-4 text-white">Register</a></li>

                        </ul>
                    </div>



                    <div className="col-md-6">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of whats new and exciting from us.</p>
                            <div className="d-flex w-100 gap-2">
                                <label className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-outline-light" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="justify-content-between  py-4 my-4 border-top">
                    <p className='text-center'>© 2021 Taste Tracker, Inc. All rights reserved. Created by <Link to='https://www.facebook.com/anonna.ferdausbd'>Anonna Ferdaus</Link></p>

                </div>
            </footer>
        </div>
    );
};

export default Footer;