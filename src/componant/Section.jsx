import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PeopleIcon from '@mui/icons-material/People';
// import { Navigate, useNavigate } from "react-router-dom";

export default function Section() {
  const [open, setOpen] = React.useState(false);
  // const navigate = useNavigate()
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ paddingBlock: '0px' }}>
      <ListItemButton onClick={handleClick} sx={{ height: '45px' }}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>

        <ListItemText primary="Deposite " />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="All Deposite" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="
              Approved Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="
              Pending Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reject Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reject Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reject Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reject Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reject Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reject Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reject Deposite"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reject Deposite"
            />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}