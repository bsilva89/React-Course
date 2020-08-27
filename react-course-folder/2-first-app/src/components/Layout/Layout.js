import React from "react";
import Aux from '../../hoc/Auxiliary.js'
import classes from './Layout.css'

const layout = ( props ) => (
    <Aux>
        <React.Fragment>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes}>
                {props.children}
            </main>
        </React.Fragment>
    </Aux>
)

export default layout;