import React, { useState } from 'react'
import useAuthContext from '../Context/AuthContext';


function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");


    const { register, errors } = useAuthContext();


    const handleSubmit = async (event) => {
        event.preventDefault();

        register({ name, email, password, password_confirmation });
    }

    return (
        <div className="row justify-content-center mt-2">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h5>Registration Form</h5>
                    </div>
                    <form className="form-group" method="get" onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-group">
                                <label for="my-input-pass">Name</label>
                                <input id="my-input-pass" className="form-control" type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {
                                    errors.name &&
                                    <div className="text-danger">{errors.name}</div>
                                }
                            </div>
                            <div className="form-group">
                                <label for="my-input-email">Email:</label>
                                <input id="my-input-email" className="form-control" type="email"
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
                                <input id="my-input-pass" className="form-control" type="text"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {
                                    errors.password &&
                                    <div className="text-danger">{errors.password}</div>
                                }
                            </div>
                            <div className="form-group">
                                <label for="my-input-pass">Password Confirmation </label>
                                <input id="my-input-pass" className="form-control" type="text"
                                    value={password_confirmation}
                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                />
                                 {
                                    errors.password_confirmation &&
                                    <div className="text-danger">{errors.password_confirmation}</div>
                                }
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button type="submit" className='btn btn-primary'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration