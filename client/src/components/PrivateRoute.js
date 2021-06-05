import React from 'react'
import {useSelector} from "react-redux"
import {Route,Redirect} from "react-router-dom"

function PrivateRoute({component:Component,...rest}) {

    const signIn = useSelector(state => state.signIn)
    const {userInfo} = signIn
  
    return (
       <Route {...rest} render={(props) => userInfo? (
        <Component {...props}></Component>
       ) : (
           <Redirect to="/signin" />
       )} ></Route>
    )
}

export default PrivateRoute
