import React, { useState, useEffect } from "react";

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [ user, setUser ] = useState( null );
    const [ isAuthenticated, setIsAuthenticated ] = useState( false )

    const signup = ( user ) => {
        setUser( user )
        setIsAuthenticated( true )
    }


    return(
        <UserContext.Provider
        value={{ user, setUser, isAuthenticated, setIsAuthenticated, signup }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}