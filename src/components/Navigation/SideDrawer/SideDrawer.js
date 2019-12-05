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
    console.log(props);
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            {props.open &&

                <div className={attachedClasses.join(' ')}>
                    <i onClick={props.closed} className="float-right fa fa-times fa-2x" />

                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
            }
        </Aux>
    );
};
export default sideDrawer;