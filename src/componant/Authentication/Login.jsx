import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { toast } from "react-toastify";
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {

            axios.get('/users')
                .then(res => {
                    const user = res.data.find(user => user.email === username);

                    if (!user) {
                        toast.error("Please enter a valid username");

                    } else if (user.password === password) {
                        toast.success("Success");
                        localStorage.setItem('user', JSON.stringify(user));
                        navigate('/');
                    } else {
                        toast.error("Please enter a valid password");

                    }
                })
                .catch(err => {
                    toast.error('Login failed due to: ' + err.message);
                });
        }
    }
    const validate = () => {
        let isValid = true;

        if (username === '' || username === null) {
            isValid = false;
            toast.warning('Please enter username');
        }

        if (password === '' || password === null) {
            isValid = false;
            toast.warning('Please enter password');
        }

        return isValid;
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="login-form">

            <div className="inner-from">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="input-with-icon">
                            <Email style={{ color: "black", fontSize: "20px" }} className="icon" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Email'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <h4 className='forget-password' onClick={() => navigate('/forgot-password')}>Forgot Password</h4>
                        <div className="input-with-icon">
                            <Lock style={{ color: "black", fontSize: "20px" }} className="icon" />
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                id="password"
                                name="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='password-input'
                            />
                            <div
                                type="button"
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <VisibilityOff sx={{ color: 'black', fontSize: '20px' }} /> : <Visibility sx={{ color: 'black', fontSize: '20px' }} />} {/* Toggle eye icon */}
                            </div>
                        </div>

                        <div className='buttons'>
                            <button type='submit'>Submit</button>
                            <span>Need an Account ? <a className='For_sign_up' onClick={() => navigate('/SignUp')}>Sign Up</a></span>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;



