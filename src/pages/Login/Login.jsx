import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';





const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


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
                form.reset();
                navigate(from), { replace: true };



            })
            .catch(error => {
                console.log(error)
            })




    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from), { replace: true };

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
                <div className='mt-3 text-center'>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary"> <FaGoogle /> Sign in With Google</button>
                    <button className="btn btn-dark ms-3"> <FaGithub /> Sign in With GitHub</button>
                </div>
                <p className='mt-4'>Not a member? <Link to="/register" className="text-success fw-bold ">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;