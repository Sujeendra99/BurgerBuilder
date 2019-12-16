import React, { Component } from "react";
import { connect } from 'react-redux';
import Aux from '../Auxilaary/Auxilaary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false,
        touched: false
    }
    sideDrawerClosedHandler = () => {

        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }
    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true });
    }

    render() {
        //localStorage.setItem('mykey', 1);
        return (
            // console.log(this.state.token),
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer} close={this.sideDrawerOpenHandler}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};
export default connect(mapStateToProps)(Layout);