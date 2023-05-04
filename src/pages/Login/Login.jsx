import React from 'react';
import './Login.css'





const Login = () => {
    return (
        <div className='row login-bg'>

            <h1 className='text-center mt-4'>Login Please</h1>

            <div className="col-md-6 mx-auto border p-4 mt-4 border-success border-2 rounded mb-4">
                <form className='pt-4'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-success w-100  text-center">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;