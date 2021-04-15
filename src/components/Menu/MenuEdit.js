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
import { createTransactionB2B } from '../../actions/transaction';
import { updateProducts } from '../../actions/products';
import { useDispatch } from 'react-redux';



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


export default function MenuEdit({setCurrentId, id, setisShow, setproId, owner, product}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'))
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buyProduct = async (e) => {
    e.preventDefault();
    if (id === 0) {
      // dispatch(createPost({...postData, gardenCreatedByName : user?.result?.acName, gardenCreatedBy: user?.result?._id }));
    } else {
      await dispatch(createTransactionB2B(product, user?.result))
      window.location.reload()  
    }
    
   
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
              {user?.result?._id !== owner ? 
                <StyledMenuItem onClick={buyProduct}> 
                  <ListItemIcon>
                    <DraftsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Buy Product">
                  </ListItemText>
                </StyledMenuItem>
              : 
              <StyledMenuItem  component={Link} to={ {pathname:`/CreateProcess/${id}`} }  > 
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Create Process "/>
              </StyledMenuItem>          
              }
              
            </div>
          : null
        }

        {
          user?.result?.acType === "Retailer" || user?.result?.acType === 'admin' ? 
            <div>
                {user?.result?._id !== owner ? 
                  <StyledMenuItem onClick={buyProduct}> 
                    <ListItemIcon>
                      <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Buy Product">
                    </ListItemText>
                  </StyledMenuItem>
                : 
                <StyledMenuItem  component={Link} to={ {pathname:`/CreateProcess/${id}`} }  > 
                  <ListItemIcon>
                    <DraftsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Create Process "/>
                </StyledMenuItem>
                
                }
                
              </div>
          : null
        }
      </StyledMenu>
    </div>
  );
}
