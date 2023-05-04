import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';





const Login = () => {

    const { signIn } = useContext(AuthContext);


    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);



            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <div className='row login-bg'>



            <div className="col-md-6 mx-auto border p-4 mt-4 border-success border-2 rounded mb-4">
                <form onSubmit={handleLogin} className='pt-4'>
                    <h1 className='text-center'>Login Please</h1>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" required />
                    </div>

                    <button type="submit" className="btn btn-success w-100  text-center">Login</button>
                </form>
                <p className='mt-4'>Not a member? <Link to="/register" className="text-success fw-bold ">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;