import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

export default function MenuEdit({setCurrentId, id, setisShow, setproId}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const user = JSON.parse(localStorage.getItem('profile'))
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const buyProductDis = () => {
  //   window.alert('Distributor buy success')
  //   setproId(id)
  // };

  // const buyProductRetailer = () => {
  //   window.alert('Retailer buy success')
  //   setproId(id)
  // };

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
        {
          user?.result?.acType === "Supplier" || user?.result?.acType === 'admin' ? 
            <StyledMenuItem onClick={() => setCurrentId(id)} >
              <ListItemIcon>
                <SendIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Edit Product" />
            </StyledMenuItem>
          : null
        }
        
        
       {
          user?.result?.acType === "Manufacturer" || user?.result?.acType === 'admin' ? 
            <StyledMenuItem  component={Link} to={ {pathname:`/CreateProcess/${id}`} }  >
              <ListItemIcon>
                <DraftsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Create Process "/>
            </StyledMenuItem>
          :null
       }

        {
          user?.result?.acType === "Distributor" || user?.result?.acType === 'admin' ? 
            <div>
              <StyledMenuItem  > 
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Buy Product "/>
              </StyledMenuItem>
              <StyledMenuItem  component={Link} to={ {pathname:`/CreateProcess/${id}`} }  > 
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Create Process "/>
              </StyledMenuItem>
            </div>
          : null
        }

        {
          user?.result?.acType === "Retailer" || user?.result?.acType === 'admin' ? 
            <div>
                <StyledMenuItem  > 
                  <ListItemIcon>
                    <DraftsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Buy Product "/>
                </StyledMenuItem>
                <StyledMenuItem  component={Link} to={ {pathname:`/CreateProcess/${id}`} }  > 
                  <ListItemIcon>
                    <DraftsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Create Process "/>
                </StyledMenuItem>
              </div>
          : null
        }
      </StyledMenu>
    </div>
  );
}
