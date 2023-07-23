import React, { useContext } from 'react';
import Header from '../../component/Header/Header';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password);
        console.log(name, email, password);
        event.target.reset()
    }
    return (
        <div>
            <Header></Header>
            <div className="main-container">
                <div className="form-container">
                    <div className="form-body">
                        <h2 className="title">Sign Up</h2>

                        <form onSubmit={handleSignup} className="the-form">

                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter your name" />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" />

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password" />

                            <input type="submit" value="Sign Up" />

                        </form>
                        <div className="_or">or</div>
                        <div className="social-login">
                            <ul>
                                <li className="google">
                                    <button className='google-link'>Google</button>
                                </li>
                                {/* <li className="fb">
                                    <button className='facebook-link'>Facebook</button>
                                </li> */}
                            </ul>
                        </div>

                        <div className="form-footer">
                            <div>
                                <span>Already have an account?</span> <Link className='toggle-link' to="/login">Log in</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;