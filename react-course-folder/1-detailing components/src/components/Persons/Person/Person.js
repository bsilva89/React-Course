import React from 'react'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

const Person = (props) => {
    return (
        <React.Fragment>
            <AuthContext>
                {(context) => 
                    context.authenticated ? <p>Teste person: authenticated</p> : <p>Teste person: please authenticate</p>}
            </AuthContext>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </React.Fragment>
    )
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Person