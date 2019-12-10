import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Auxilaary/Auxilaary';
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }


    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            {props.open &&

                <div className={attachedClasses.join(' ')} onClick={props.closed}>
                    <div onClick={props.close} className="float-right">
                        <i className="float-right fa fa-times fa-2x" />
                    </div>
                    {/* <button onClick={props.open} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button> */}

                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems isAuthenticated={props.isAuth} />
                    </nav>
                </div>
            }
        </Aux>
    );
};
export default sideDrawer;