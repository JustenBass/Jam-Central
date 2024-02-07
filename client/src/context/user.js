import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( null );
    const [ userErrors, setUserErrors ] = useState( [] )
    const [ isAuthenticated, setIsAuthenticated ] = useState( false )

    const signup = (newUser ) => {
        fetch('/users',{
            method: 'POST',
            headers:{ 'Content-Type' : 'application/json'},
            body: JSON.stringify( newUser )
        })
        .then((r) => r.json())
        .then((data) => {
            if( !data.errors){
                setUser( data )
                setIsAuthenticated( true )
            } else {
                const userErr = data.errors.map((error) => <li> {error} </li>)
                setUserErrors( userErr )
            }
        })
    }


    return(
        <UserContext.Provider
        value={{ user, setUser, isAuthenticated, setIsAuthenticated, signup }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}