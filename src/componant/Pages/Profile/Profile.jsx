import { useState, useEffect } from 'react';
import axios from 'axios';
import { Breadcrumbs, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { Button, User } from '@nextui-org/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Profile.css';
import { toast } from 'react-toastify';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('user')).email;

    if (userEmail) {
      axios.get(`/users?email=${userEmail}`)
        .then(res => {
          if (res.data.length > 0) {
            setUser(res.data[0]);
          } else {
            setError('User not found');
          }
        })
        .catch(err => {
          setError(err.message);
        });
    } else {
      setError('User email not found in localStorage');
    }
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const formik = useFormik({
    initialValues: {
      username: '',
      file: null,
      email: '',
      address: '',
      userId: '',
      sponsorId: '',
      mobileNumber: '',
      joinDate: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      file: Yup.mixed().required('File is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      address: Yup.string().required('Address is required'),
      userId: Yup.string().required('User ID is required'),
      sponsorId: Yup.string().required('Sponsor ID is required'),
      mobileNumber: Yup.string().required('Mobile number is required'),
      joinDate: Yup.date().required('Joining date is required')
    }),
    onSubmit: values => {
      console.log('Form data', values);
      toast.success('Form Submited')
    }
  });

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography
          onClick={() => navigate('/')}
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', justifyContent: 'center' }}
          color="inherit"
        >
          <Home sx={{ mr: 0.5 }} fontSize="medium" />
          DashBoard
        </Typography>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          Profile
        </Typography>
      </Breadcrumbs>
      {loading ? (
        <div className="loading_spinner_container">
          <PulseLoader color="#36d7b7" size={30} className="loading_spinner" />
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        user && (
          <div>
            <div className="profile_main_container">
              <div className="left_profile_container">
                <h1>Profile</h1>
                <div className="blank_underline"></div>
                <User
                  className='User_Profile_div'
                  name={(<h2 style={{ fontSize: '20px' }}>{user.name}</h2>)}
                  description="Product Designer"
                />
              </div>
              <div className="right_profile_container">
                <h1>Edit Profile</h1>
                <div className="blank_underline"></div>
                <form onSubmit={formik.handleSubmit} >
                  <div className="profile_inputs_container">
                    <div className="profil_inputs_left_container_div">
                      <div className="mb-3 input_profile_edit">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          className="form-control"
                          style={{ color: 'rgb(190, 191, 194)' }}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.username}
                          required
                        />
                        {formik.touched.username && formik.errors.username ? (
                          <div style={{ color: 'red' }}>{formik.errors.username}</div>
                        ) : null}
                      </div>
                      <div className="mb-3 input_profile_edit">
                        <label htmlFor="file">Choose File</label>
                        <div>
                          <input
                            type="file"
                            id="file"
                            name="file"
                            className="input-file-label"
                            onChange={(event) => {
                              formik.setFieldValue("file", event.currentTarget.files[0]);
                            }}
                            required
                          />
                        </div>
                        {formik.touched.file && formik.errors.file ? (
                          <div style={{ color: 'red' }}>{formik.errors.file}</div>
                        ) : null}
                      </div>
                      <div className="mb-3 input_profile_edit">
                        <label className="form-label" htmlFor="email">Email ID</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-control"
                          style={{ color: 'rgb(190, 191, 194)' }}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          required
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div style={{ color: 'red' }}>{formik.errors.email}</div>
                        ) : null}
                      </div>
                      <div className="mb-3 input_profile_edit">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input
                          id="address"
                          name="address"
                          type="text"
                          className="form-control"
                          style={{ color: 'rgb(190, 191, 194)' }}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.address}
                          required
                        />
                        {formik.touched.address && formik.errors.address ? (
                          <div style={{ color: 'red' }}>{formik.errors.address}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="profil_inputs_right_container_div">
                      <div className="mb-3 input_profile_edit">
                        <label className="form-label" htmlFor="userId">User ID</label>
                        <input
                          id="userId"
                          name="userId"
                          type="text"
                          className="form-control"
                          style={{ color: 'rgb(190, 191, 194)' }}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.userId}
                          required
                        />
                        {formik.touched.userId && formik.errors.userId ? (
                          <div style={{ color: 'red' }}>{formik.errors.userId}</div>
                        ) : null}
                      </div>
                      <div className="mb-3 input_profile_edit">
                        <label className="form-label" htmlFor="sponsorId">Sponsor ID</label>
                        <input
                          id="sponsorId"
                          name="sponsorId"
                          type="text"
                          className="form-control"
                          style={{ color: 'rgb(190, 191, 194)' }}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.sponsorId}
                          required
                        />
                        {formik.touched.sponsorId && formik.errors.sponsorId ? (
                          <div style={{ color: 'red' }}>{formik.errors.sponsorId}</div>
                        ) : null}
                      </div>
                      <div className="mb-3 input_profile_edit">
                        <label className="form-label" htmlFor="mobileNumber">Mobile Number</label>
                        <input
                          id="mobileNumber"
                          name="mobileNumber"
                          type="text"
                          className="form-control"
                          style={{ color: 'rgb(190, 191, 194)' }}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.mobileNumber}
                          required
                        />
                        {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                          <div style={{ color: 'red' }}>{formik.errors.mobileNumber}</div>
                        ) : null}
                      </div>
                      <div className="mb-3 input_profile_edit">
                        <label className="form-label" htmlFor="joinDate">Joining Date</label>
                        <input
                          id="joinDate"
                          name="joinDate"
                          type="date"
                          className="form-control"
                          style={{ color: 'rgb(190, 191, 194)' }}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.joinDate}
                          required
                        />
                        {formik.touched.joinDate && formik.errors.joinDate ? (
                          <div style={{ color: 'red' }}>{formik.errors.joinDate}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="blank_underline mt-5"></div>
                  <div className="Profile_edit_buttons">
                    <Button className='edit_button' color='success' type="button">Edit</Button>
                    <Button className='edit_button' color='danger' type='submit'>Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Profile;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const userEmail = localStorage.getItem('userEmail');

//     if (userEmail) {
//       // Fetch user data from the backend
//       axios.get(`http://localhost:5000/users/${userEmail}`)
//         .then(res => {
//           setUser(res.data);
//         })
//         .catch(err => {
//           setError(err.message);
//           console.error('Error fetching user data:', err);
//         });
//     } else {
//       setError('User email not found in localStorage');
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Profile</h2>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         user && (
//           <div>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default Profile;





// import { Breadcrumbs, Typography } from '@mui/material';
// import { Home } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { PulseLoader } from 'react-spinners';
// const Profile = ({ user }) => {

//   const navigate = useNavigate('')
//   const [loading, setLoading]= useState(true)

//   setTimeout(() => {
//     setLoading(false)
//   }, 1500);

//   return (
//     <div>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Typography
//           onClick={() => navigate('/')}
//           underline="hover"
//           sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', justifyContent:'center' }}
//           color="inherit"

//         >
//           <Home sx={{ mr: 0.5 }} fontSize="medium" />
//           DashBoard
//         </Typography>
//         <Typography
//           sx={{ display: 'flex', alignItems: 'center' }}
//           color="text.primary"
//         >
//           Profile
//         </Typography>
//       </Breadcrumbs>
// {
//   loading ? (
//     <div className="loading_spinner_container">
//           <PulseLoader color="#36d7b7" size={30} className="loading_spinner" />
//         </div>
//   ) : (

//     <h2>Welcome, {user.name}</h2>
//   )
// }

//     </div>
//   );
// };

// export default Profile;