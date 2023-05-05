import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');




    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('');

        if (password !== confirm) {
            setError('Your password did not match')
            return
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters or longer ')
            return
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser);

                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                });
                form.reset();
                Swal.fire(
                    'Success!',
                    'Your Account has been created!',
                    'success'
                )

            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className='row login-bg'>



            <div className="col-md-6 mx-auto border p-4 mt-4 border-success border-2 rounded mb-4">
                <form onSubmit={handleRegister} className='pt-4'>
                    <h1 className='text-center'>Register Please</h1>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input name='name' type="text" className="form-control" required />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image url</label>
                        <input name='photo' type="text" className="form-control" required />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" name="confirm" className="form-control" required />
                    </div>

                    <button type="submit" className="btn btn-success w-100  text-center">Register</button>
                    <p className="text-danger bg-light p-3">{error}</p>
                </form>

                <p className='mt-4'>Already a member? <Link to="/login" className="text-success fw-bold ">Login!</Link></p>
            </div>
        </div>
    );
};

export default Register;