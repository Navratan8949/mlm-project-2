// // import { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const Profile = () => {
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const userEmail = localStorage.getItem('userEmail');

// //     if (userEmail) {
// //       // Fetch user data from the backend
// //       axios.get(`http://localhost:5000/users/${userEmail}`)
// //         .then(res => {
// //           setUser(res.data);
// //         })
// //         .catch(err => {
// //           setError(err.message);
// //           console.error('Error fetching user data:', err);
// //         });
// //     } else {
// //       setError('User email not found in localStorage');
// //     }
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Profile</h2>
// //       {error ? (
// //         <p>Error: {error}</p>
// //       ) : (
// //         user && (
// //           <div>
// //             <p>Name: {user.name}</p>
// //             <p>Email: {user.email}</p>
// //           </div>
// //         )
// //       )}
// //     </div>
// //   );
// // };

// // export default Profile;





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


import { useState, useEffect } from 'react';
import axios from 'axios';
import { Breadcrumbs, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';

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
    setLoading(false)
  }, 1500);

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
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Profile;
