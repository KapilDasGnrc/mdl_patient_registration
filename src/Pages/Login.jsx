import React, { useState } from 'react'
import useAuthContext from '../Context/AuthContext';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, errors } = useAuthContext();


    const handleSubmit = async (event) => {
        event.preventDefault();

        login({ email, password });
    }

    console.log('Login')

    return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <form className="form-group" onSubmit={handleSubmit}>
                            <div className="card-header">
                                <h5>User Login Form</h5>
                            </div>
                            <div className="card-body">
                                {
                                    errors.message && <h4 className='text-danger'>{errors.message}</h4>
                                }
                                <div className="form-group">
                                    <label for="my-input-email">Email:</label>
                                    <input id="my-input-email"
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {
                                        errors.email &&
                                        <div className="text-danger">{errors.email}</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <label for="my-input-pass">Password</label>
                                    <input id="my-input-pass"
                                        className="form-control"
                                        type="text"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {
                                        errors.password &&
                                        <div className="text-danger">{errors.password}</div>
                                    }
                                </div>
                            </div>
                            <div className="card-footer text-right">
                                <button className='btn btn-primary' type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Login