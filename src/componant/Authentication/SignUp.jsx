import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';
import { toast } from "react-toastify";
import { Email, Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      axios.get('http://localhost:5000/users')
        .then(res => {
          const userExists = res.data.find(user => user.email === email);
          if (userExists) {
            toast.error("User already exists");
          } else {
            // Prepare user data
            const userData = {
              name: name,
              email: email,
              password: password
            };

            // Send user data to backend
            axios.post('http://localhost:5000/users', userData)
              .then(res => {
                toast.success("Registration successful");
                navigate('/login');
              })
              .catch(err => {
                toast.error('Registration failed due to: ' + err.message);
              });
          }
        })
        .catch(err => {
          toast.error('Registration failed due to: ' + err.message);
        });
    }
  }

  const validate = () => {
    let isValid = true;

    if (name === '' || name === null) {
      isValid = false;
      toast.warning('Please enter name');
    }

    if (email === '' || email === null) {
      isValid = false;
      toast.warning('Please enter email');
    }

    if (password === '' || password === null) {
      isValid = false;
      toast.warning('Please enter password');
    }

    if (confirmPassword === '' || confirmPassword === null) {
      isValid = false;
      toast.warning('Please confirm your password');
    }

    if (password !== confirmPassword) {
      isValid = false;
      toast.error('Passwords do not match');
    }

    return isValid;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <div className="SignUp-form">
      <div className="inner-from">
        <h1>Register</h1>
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
                {showPassword ? <VisibilityOff sx={{ color: 'black', fontSize: '20px' }} /> : <Visibility sx={{ color: 'black', fontSize: '20px' }} />}
              </div>
            </div>
            <div className="input-with-icon">
              <Lock style={{ color: "black", fontSize: "20px" }} className="icon" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-password"
                name="confirm-password"
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='password-input'
              />
              <div
                type="button"
                className="toggle-password"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <VisibilityOff sx={{ color: 'black', fontSize: '20px' }} /> : <Visibility sx={{ color: 'black', fontSize: '20px' }} />}
              </div>
            </div>

            <div className="input-with-icon">
              <Person style={{ color: "black", fontSize: "20px" }} className="icon" />
              <input
                 type="text"
                 id="name"
                 name="name"
                 placeholder='Name'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
              />
            </div>
            

            <div className='buttons'>
              <button type='submit'>Submit</button>
              <span>Have an Account ? <a className='For_sign_up' onClick={() => navigate('/Login')}>Login</a></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
