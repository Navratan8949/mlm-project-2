import { useState } from 'react';
import './Dashboard.css';
import CountUp from 'react-countup';

import { Breadcrumbs, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import TableData from '../../data-table/TableData';

const DataTable = () => {
  const navigate = useNavigate('');
  const [loading, setLoading] = useState(true);

  // Simulating loading delay
  setTimeout(() => {
    setLoading(false);
  }, 1500); // Change delay as per your requirement

  return (
    <div className='dashboard_main_div'>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography
          onClick={() => navigate('/')}
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          color="inherit"
        >
          <Home sx={{ mr: 0.5 }} fontSize="medium" />
          DashBoard
        </Typography>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          Breadcrumb
        </Typography>
      </Breadcrumbs>
      {loading ? (
        <div className="loading_spinner_container">
          <PulseLoader color="#36d7b7" size={30} className="loading_spinner" />
        </div>
      ) : (

        <div>

          <div className="dashboard_row-1_inner">
            <div className="counter_number_div_1">
              <h2>Team Income</h2>
              <div className="counter_number">
                + $<CountUp start={0} end={+540.45} duration={5}></CountUp>
              </div>
            </div>
            <div className="counter_number_div_2">
              <h2>Refferal Income</h2>
              <div className="counter_number">
                + $<CountUp start={+200} end={+320.00} duration={5}></CountUp>
              </div>
            </div>
            <div className="counter_number_div_3">
              <h2>Group Income</h2>
              <div className="counter_number">
                + $<CountUp start={+100} end={+740.89} duration={5}></CountUp>
              </div>
            </div>
            <div className="counter_number_div_4">
              <h2>Total Income</h2>
              <div className="counter_number">
                + $<CountUp start={+1200} end={+5499.99} duration={5}></CountUp>
              </div>
            </div>
          </div>
          <div className=' pt-10 '>
            <TableData />
          </div>
        </div>

      )}
    </div>
  );
};

export default DataTable;
