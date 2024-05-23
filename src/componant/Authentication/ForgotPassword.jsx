import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import './ForgotPassword.css';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || email === null) {
            toast.warning('Please enter your email');
            return;
        }

        if (newPassword === '' || newPassword === null) {
            toast.warning('Please enter your new password');
            return;
        }

        axios.get('http://localhost:5000/users')
            .then(res => {
                const user = res.data.find(user => user.email === email);

                if (!user) {
                    toast.error("Email not found");
                } else {
                    axios.patch(`http://localhost:5000/users/${user.id}`, { password: newPassword })
                        .then(() => {
                            toast.success("Password updated successfully");
                            navigate('/login');
                        })
                        .catch(err => {
                            toast.error('Failed to update password: ' + err.message);
                        });
                }
            })
            .catch(err => {
                toast.error('Password reset failed due to: ' + err.message);
            });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="forgot-password-form">
            <div className="inner-from">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <div className="input-with-icon">
                            <Email style={{ color: "black", fontSize: "20px" }} className="icon" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-with-icon">
                            <Lock style={{ color: "black", fontSize: "20px" }} className="icon" />
                            <input
                               type={showPassword ? 'text' : 'password'} 
                                id="new-password"
                                name="new-password"
                                placeholder='New Password'
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
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
                            <span>Remembered? <a onClick={() => navigate('/login')} style={{color:"rgb(21, 255, 0)"}}>Login</a></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;


// is password wale input ke ander eye icon lagao jis per click karne per password show ho jaye
