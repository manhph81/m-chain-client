import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import CompanyIcon from '@material-ui/icons/Apartment';
import DistributionIcon from '@material-ui/icons/Commute';
import StoreIcon from '@material-ui/icons/Store';
import PersonPinIcon from  '@material-ui/icons/PersonPin';



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    margin: '0px 50px'
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = JSON.parse(localStorage.getItem('profile'))
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="start"  color="inherit" aria-label="menu" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
         <StyledMenuItem component={Link} to="/" >
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledMenuItem>

          {
            user?.result?.acType === 'Supplier' || user?.result?.acType === 'admin' ? 
              <StyledMenuItem component={Link} to="/Supplier" >
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Supplier" />
              </StyledMenuItem>
            : null 
          }
         
          {
            user?.result?.acType === 'Manufacturer' || user?.result?.acType === 'admin'? 
            <StyledMenuItem component={Link} to="/Manufacturer">
              <ListItemIcon>
                <CompanyIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Manufacturer"/>
            </StyledMenuItem>
            : null 
          }
          {
            user?.result?.acType === 'Distributor' || user?.result?.acType === 'admin'? 
              <StyledMenuItem component={Link} to="/Distributor">
                <ListItemIcon>
                  <DistributionIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Distributor" />
              </StyledMenuItem>
            : null 
          }
          {
            user?.result?.acType === 'Retailer' || user?.result?.acType === 'admin'? 
              <StyledMenuItem component={Link} to="/Retailer">
                <ListItemIcon>
                  <StoreIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Retailer" />
              </StyledMenuItem>
            : null 
          }
          <StyledMenuItem component={Link} to="/profile">
            <ListItemIcon>
              <PersonPinIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </StyledMenuItem>

      </StyledMenu>
    </div>
  );
}
