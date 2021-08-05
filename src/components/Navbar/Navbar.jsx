import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './style';
import {Link, useLocation} from 'react-router-dom';


const Navbar = ({ totalItems }) => {
    const classes= useStyles();
    const location= useLocation();
    
    return (
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
               <Toolbar>
                 <Typography component={Link} to="/" variant="h6" className={classes.title} >MediVeda</Typography>
                 <div className={classes.grow} />
                 {location.pathname === '/' && (
                 <div className={classes.button}>
                     <IconButton component={Link} to="/cart" aria-label= "Sow cart items" color= "inherit">
                         <Badge badgeContent={totalItems} color="secondary">
                             <ShoppingCart />
                         </Badge>
                     </IconButton>
                 </div>)}

               </Toolbar>
           </AppBar> 
        </>
    )
}

export default Navbar
