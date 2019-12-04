import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        {/* <li><a href="/">A link</a></li> */}
        <NavigationItem link="/" exact >Burger builder</NavigationItem>
        <NavigationItem link="/orders" >Orders</NavigationItem>
    </ul>
);
export default navigationItems;