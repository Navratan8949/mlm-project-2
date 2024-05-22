import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AvTimerIcon from '@mui/icons-material/AvTimer';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
;
import IconButton from '@mui/material/IconButton';

import MoveUpIcon from '@mui/icons-material/MoveUp';

// import Navbar from './Navbar';

import {  useNavigate } from 'react-router-dom';


// import Dashboard from './DashBoard';
// import AllDeposite from '../Section-in-Sections/AllDeposite';
// import ApprovedDeposite from '../Section-in-Sections/ApprovedDeposite';
// import PendingDeposite from '../Section-in-Sections/PendingDeposite';
// import RejectDeposite from '../Section-in-Sections/RejectDeposite';
// import InvestmentHistory from '../Section-in-Sections/InvestmentHistory';
// import AdminInvestmentHistory from '../Section-in-Sections/AdminInvestmentHistory';
// import MyInvestment from '../Section-in-Sections/MyInvestment';
// import FundTransfers from '../Section-in-Sections/FundTransfers';
// import UserTransferHistroy from '../Section-in-Sections/UserTransferHistroy';
// import AdminTransferHistory from '../Section-in-Sections/AdminTransferHistory';
// import AllUser from '../Section-in-Sections/AllUser';
// import ActiveUser from '../Section-in-Sections/ActiveUser';
// import InActiveUser from '../Section-in-Sections/In-ActiveUser';
// import BlockUser from '../Section-in-Sections/BlockUser';
// import MyDirectTeam from '../Section-in-Sections/MyDirectTeam';
// import ROIIncome from '../Section-in-Sections/ROI-Income';
// import LevelIncome from '../Section-in-Sections/Level-Income';
// import TotalIncome from '../Section-in-Sections/Total-Income';
// import RewardIncome from '../Section-in-Sections/Reward-Income';
// import WalletHistory from '../Section-in-Sections/Wallet-History';
// import SendRequest from '../Section-in-Sections/Send-Request';
// import Transation from '../Sections/Transaction';
// import Profile from './Profile';
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";




const drawerWidth = 240;

function CssSidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ background: "black" }} />
      {/* <Divider /> */}
      <List
        sx={{
          color: "white",
          background: "#161616",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        {["Dashboard"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ height: '45px' }} onClick={() => navigate('/')}>
              <ListItemIcon>
                <AvTimerIcon sx={{ color: "#D8AF72" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List
        sx={{
          color: "white",
          background: "#161616",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        {["profile "].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ height: '45px' }} onClick={() => navigate('/Profile')} >
              <ListItemIcon>
                <ManageAccountsIcon sx={{ color: "#D8AF72" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      
      <List
        sx={{
          color: "white",
          background: "#161616",
          borderBottom: "1px solid #2E2A2A",
        }}
      >
        {["transction"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ height: '45px' }} onClick={() => navigate('/Transation')}>
              <ListItemIcon>
                <MoveUpIcon sx={{ color: "#D8AF72" }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Toolbar sx={{ background: "#2E2A2A" }} />
      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "black",
          width: {
            sm: `calc(100% - ${drawerWidth}px) },
          ml: { sm: ${drawerWidth}px`
          },
        }}
      >
        <Toolbar
          sx={{ borderBottom: '1px solid #fff', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{
              display: "flex",
            }}
          >

            <div style={{ display: "flex" }} className="lefticon">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="fristicon"
              >
                <h5 style={{ fontSize: '16px', fontFamilyL: 'Roboto, Helvetica, Arial, sans-serif' }}>Main Wallet</h5>
                <div className="frist-wallet">
                  <AccountBalanceWalletIcon
                    style={{ color: "rgb(216, 175, 114)" }}
                  />
                  <span style={{ color: '#D8AF72', marginLeft: '3px' }}>10</span>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="secondicon"
              >
                <h5 style={{ fontSize: '16px', fontFamilyL: 'Roboto, Helvetica, Arial, sans-serif' }}>Main Wallet</h5>
                <div className="second-wallet">
                  <AccountBalanceWalletIcon
                    style={{ color: "rgb(216, 175, 114)" }}
                  />
                  <span style={{ color: '#D8AF72', marginLeft: '3px' }}>100</span>
                </div>
              </div>
            </div>




          </Typography>
         


        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: ` calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#272727",

        }}
      >
        <Toolbar />
        <Typography>

          {props.outlet}
        </Typography>

      </Box>
    </Box>
  );
}

CssSidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default CssSidebar;