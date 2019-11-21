import React from "react";
import Aux from '../../hoc/Auxilaary';
import classes from './Layout.css';
const layout = (props) =>
    (
        <Aux>
            <div>Toolbar,SideBar,BackDrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
export default layout;