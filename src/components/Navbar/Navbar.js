import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import memories from '../../images/memories.png';
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { LOGOUT } from '../../constants/actionTypes';
import decode from 'jwt-decode'
import CustomizedMenus from '../Menu/CustomizedMenus';

const Navbar = () => {
    const classes = useStyles()
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () =>{
        if(window.confirm("Are you sure logout?")){
            dispatch({type:LOGOUT})
            history.push('/')
            setUser(null)
        }  
    }

    const autoLogout=()=>{
        dispatch({type:LOGOUT})
        history.push('/')
        setUser(null)
    }
    
    useEffect(()=>{
        const token = user?.token
        //JWT
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()) autoLogout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <CustomizedMenus></CustomizedMenus>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">M-Chain</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.acName} src={user.result.imageUrl}>{user.result.acName?.charAt(0)}</Avatar>
                        <Typography  className={classes.userName} variant="h6" align="center">{user.result.acName}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}> Log out</Button>
                    </div>
                ) :
                (
                    <Button component={Link} to="/auth" variant="contained" color="secondary"> Sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
