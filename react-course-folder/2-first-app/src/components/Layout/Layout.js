import React from "react";
import Aux from '../../hoc/Auxiliary.js'

const layout = ( props ) => (
    <Aux>
        <React.Fragment>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    </Aux>
)

export default layout;