import { Fragment, useRef, useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
import { Button, Input, Modal, Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './UserDataSection.css'
import { Breadcrumbs, Typography } from '@mui/material';
import { Home, ShoppingCart } from '@mui/icons-material';
import { PulseLoader } from 'react-spinners';
import UserSectionTable from './UserSectionTable';
const UserSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFromUserName, setSearchFromUserName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [loading, setLoading] = useState(true)


  setTimeout(() => {
    setLoading(false)
  }, 2000);

  const navigate = useNavigate();


  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#myTable' });
    doc.save('table_data.pdf');
  };





  const [data] = useState(
    [
      { sno: '1', name: 'Tiger Nixon', id: '	#101', SponserID: '61', UserWalletAddress: '	$320,800', SponserWalletAddress: 'male', time: '21:37', wallet: '$2125', joindate: '2023/02/12', Date: '2023/04/12', },
      { sno: '2', name: 'Tiger Nixon', id: '	#101', SponserID: '61', UserWalletAddress: '	$320,800', SponserWalletAddress: 'male', time: '21:37', wallet: '$2125', joindate: '2023/02/12', Date: '2023/04/12', },
      { sno: '3', name: 'Tiger Nixon', id: '	#101', SponserID: '61', UserWalletAddress: '	$320,800', SponserWalletAddress: 'male', time: '21:37', wallet: '$2125', joindate: '2023/02/12', Date: '2023/04/12', },
      { sno: '4', name: 'Tiger Nixon', id: '	#101', SponserID: '61', UserWalletAddress: '	$320,800', SponserWalletAddress: 'male', time: '21:37', wallet: '$2125', joindate: '2023/02/12', Date: '2023/04/12', },
      { sno: '5', name: 'Tiger Nixon', id: '	#101', SponserID: '61', UserWalletAddress: '	$320,800', SponserWalletAddress: 'male', time: '21:37', wallet: '$2125', joindate: '2023/02/12', Date: '2023/04/12', },
    ]
  )
  //  WalletAddress: 'New York',


  const filteredData = data.filter((row) => {
    const rowDate = new Date(row.Date);
    const fromDateObj = fromDate ? new Date(fromDate) : null;
    const toDateObj = toDate ? new Date(toDate) : null;

    const statusFilter =
      selectedStatus === '' ? true : row.status.toLowerCase() === selectedStatus.toLowerCase();

    return (
      statusFilter &&
      rowDate >= (fromDateObj || rowDate) &&
      rowDate <= (toDateObj || rowDate) &&
      row.Date.toLowerCase().includes(searchTerm.toLowerCase()) &&
      row.name.toLowerCase().includes(searchFromUserName.toLowerCase())
    );
  });

  const tableRef = useRef(null);

  const copyTable = () => {
    const range = document.createRange();
    range.selectNode(tableRef.current);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  };

  const handlePrint = () => {
    window.print();
  };

  const downloadTableAsCSV = () => {
    const table = document.getElementById('myTable');

    if (!table) {
      console.error('Table not found');
      return;
    }

    const rows = table.querySelectorAll('tr');
    const csvData = [];

    rows.forEach((row) => {
      const rowData = [];
      const cells = row.querySelectorAll('td, th');

      cells.forEach((cell) => {
        rowData.push(cell.innerText);
      });

      csvData.push(rowData.join(','));
    });

    const csvContent = csvData.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'table_data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setSearchFromUserName('');
    setSelectedStatus('');
    setFromDate('');
    setToDate('');
  };



  return (
    <Fragment>
      <div className="mb-6">
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
            User Section
          </Typography>

        </Breadcrumbs>
      </div>

      {
        loading ? (
          <div className="loading_spinner_container">
            <PulseLoader color="#36d7b7" size={30} className="loading_spinner" />
          </div>
        ) : (

          <Container fluid={true}>

            <div className="Slot_main_container">
              <div className="slot_box">
                <div className="cart_box">
                  <ShoppingCart className="shake-on-hover" sx={{ color: 'lightgreen', fontSize: '30px' }} />
                </div>
                <div className="purchase_money">
                  <h1> $40 </h1>
                  <Button color='success'>Purchase</Button>
                </div>
              </div>
              <div className="slot_box">
                <div className="cart_box">
                  <ShoppingCart className="shake-on-hover" sx={{ color: 'lightgreen', fontSize: '30px' }} />
                </div>
                <div className="purchase_money">
                  <h1> $40 </h1>
                  <Button color='success'>Purchase</Button>
                </div>
              </div>
              <div className="slot_box">
                <div className="cart_box">
                  <ShoppingCart className="shake-on-hover" sx={{ color: 'lightgreen', fontSize: '30px' }} />
                </div>
                <div className="purchase_money">
                  <h1> $40 </h1>
                  <Button color='success'>Purchase</Button>
                </div>
              </div>

              <div className="slot_box">
                <div className="cart_box">
                  <ShoppingCart className="shake-on-hover" sx={{ color: 'lightgreen', fontSize: '30px' }} />
                </div>
                <div className="purchase_money">
                  <h1> $40 </h1>
                  <Button color='success'>Purchase</Button>
                </div>
              </div>
              <div className="slot_box">
                <div className="cart_box">
                  <ShoppingCart className="shake-on-hover" sx={{ color: 'lightgreen', fontSize: '30px' }} />
                </div>
                <div className="purchase_money">
                  <h1> $40 </h1>
                  <Button color='success'>Purchase</Button>
                </div>
              </div>
              <div className="slot_box">
                <div className="cart_box">
                  <ShoppingCart className="shake-on-hover" sx={{ color: 'lightgreen', fontSize: '30px' }} />
                </div>
                <div className="purchase_money">
                  <h1> $40 </h1>
                  <Button color='success'>Purchase</Button>
                </div>
              </div>
              <div className="slot_box">
                <div className="cart_box">
                  <ShoppingCart className="shake-on-hover" sx={{ color: 'lightgreen', fontSize: '30px' }} />
                </div>
                <div className="purchase_money">
                  <h1> $40 </h1>
                  <Button color='success'>Purchase</Button>
                </div>
              </div>

              <div className="slot_box">
                <div className="cart_box">
                  <ShoppingCart className="shake-on-hover" sx={{ color: 'lightgreen', fontSize: '30px' }} />
                </div>
                <div className="purchase_money">
                  <h1> $40 </h1>
                  <Button color='success'>Purchase</Button>
                </div>
              </div>
            </div>

            {/* <div className='search-and-button d-flex mt-4' style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                Search From User Name:-
                <Input
                  type='text'
                  style={{ width: '200px' }}
                  placeholder='Enter From User Name'
                  value={searchFromUserName}
                  onChange={(e) => setSearchFromUserName(e.target.value)}
                />
              </div>
              <div className='buttons d-flex'>
                <button onClick={downloadTableAsCSV}>CSV</button>
                <button onClick={downloadTableAsCSV}>Excel</button>
                <button onClick={generatePDF}>PDF</button>
                <button onClick={handlePrint}>Print</button>
              </div>


            </div>
            <hr />
            <div className='table-responsive'>
              <div className='card'>
                <div className='card-body'>
                  <div className='card-title' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 className='mb-0 '>All User</h4>
                    <div className='date-inputs' style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#96979A' }}>
                      from:-
                      <Input type='date' onChange={(e) => setFromDate(e.target.value)} />
                      To:-
                      <Input type='date' onChange={(e) => setToDate(e.target.value)} />
                    </div>
                  </div>
                  <hr />
                  <div className='table-responsive'>
                    <table id='myTable' className='table table-striped table-bordered' style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th>S.NO</th>
                          <th> User Name</th>
                          <th> User ID</th>
                          <th>User Wallet Address</th>
                          <th>Sponser ID</th>
                          <th>Sponser Wallet Address</th>
                          <th>Joinin Date</th>
                          <th >Date & Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((row, index) => (
                          <tr key={index}>
                            <td>{row.sno}</td>
                            <td>{row.name}</td>
                            <td>{row.id}</td>
                            <td>{row.UserWalletAddress}</td>
                            <td>{row.SponserWalletAddress}</td>
                            <td>{row.SponserID}</td>
                           
                            <td>{row.joindate}</td>
                            <td>{row.Date}</td>
                           
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {selectedWallet && (
                    <Modal isOpen={true} toggle={() => setSelectedWallet(null)}>
                      <div className='modal-header'>
                        <h5 className='modal-title'>Wallet Details</h5>
                        <button type='button' className='close' onClick={() => setSelectedWallet(null)}>
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div className='modal-body'>
                        <p>Details for Wallet: {selectedWallet}</p>
                      </div>
                      <div className='modal-footer'>
                        <Button color='secondary' onClick={() => setSelectedWallet(null)}>
                          Close
                        </Button>
                      </div>
                    </Modal>
                  )}

                </div>
              </div>
            </div> */}
            <div  className='mt-10'>
              <UserSectionTable/>
            </div>
          </Container>
        )
      }
    </Fragment>
  );
};

export default UserSection;
