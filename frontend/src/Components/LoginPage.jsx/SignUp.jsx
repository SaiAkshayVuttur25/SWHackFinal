import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SignIn.css';

const SignUp = ({ setlogin }) => {
    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    const adddata = (e) => {
        const { name, value } = e.target;

        setUdata(() => ({
            ...udata,
            [name]: value
        }));
    };

    const handleSignUp = () => {
        setlogin(false); // Close sign-up modal on success or cancel
    };

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="/Book_Store.png" alt="logo" />
                </div>
                <div className="sign_form">
                    <form method="POST" onSubmit={(e) => e.preventDefault()}>
                        <h1>Sign-Up</h1>
                        <div className="form_data">
                            <label htmlFor="fname">Your name</label>
                            <input
                                type="text"
                                onChange={adddata}
                                value={udata.fname}
                                name="fname"
                                id="fname"
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                onChange={adddata}
                                value={udata.email}
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input
                                type="text"
                                onChange={adddata}
                                value={udata.mobile}
                                name="mobile"
                                id="mobile"
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                onChange={adddata}
                                value={udata.password}
                                name="password"
                                placeholder="At least 6 char"
                                id="password"
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="cpassword">Password Again</label>
                            <input
                                type="password"
                                onChange={adddata}
                                value={udata.cpassword}
                                name="cpassword"
                                id="cpassword"
                            />
                        </div>
                        <button
                            className="signin_btn"
                            onClick={handleSignUp}
                        >
                            Continue
                        </button>

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Signin</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
