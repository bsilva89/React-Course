import React from "react";
import Aux from '../../hoc/Auxiliary.js';
import classes from './Layout.module.css';

const layout = ( props ) => (
    <Aux>
        <React.Fragment>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    </Aux>
)

export default layout;