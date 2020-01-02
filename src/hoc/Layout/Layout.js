import React, { useState } from "react";
import { connect } from 'react-redux';
import Aux from '../Auxilaary/Auxilaary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);
    const sideDrawerClosedHandler = () => {

        setSideDrawerIsVisible(false);
    }
    // sideDrawerToggleHandler = () => {
    //    setSideDrawerIsVisible(!sideDrawerIsVisible);
    // }
    const sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true });
    }
    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }

    //localStorage.setItem('mykey', 1);
    return (
        // console.log(this.state.token),
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisible} close={sideDrawerOpenHandler}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )

}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};
export default connect(mapStateToProps)(Layout);