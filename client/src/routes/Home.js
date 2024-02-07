import React, { useContext } from 'react';
import { UserContext } from '../context/user'

export default function Home() {
  const { isAuthenticated } = useContext( UserContext )

  if ( isAuthenticated ){
    return(
      <div className="home">
        <h1> HOME </h1>
      </div>
    )
  } else {
    return(
      <div className="home">
        <h1> TEST </h1>
      </div>
    )
  }
}
