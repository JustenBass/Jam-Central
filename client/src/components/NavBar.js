import React, { useState } from 'react';
import * as IoIcons from "react-icons/io5"
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../App.css';
// import { IconContext } from 'react-icons';

export default function NavBar() {
  const [ sidebar, setSidebar ] = useState( false );

  const showSidebar = () => setSidebar( !sidebar );

  if( sidebar ){
    return(
      <>
      <nav className="nav-menu active">
         <ul>
          <div className='navHomeAndSearch active'>
            { SidebarData.map((item, index) => {
              return(
                  <li key={ index } className={ item.cName}>
                    <Link to={ item.path }>
                      { item.icon }
                    </Link>
                  </li>
              )
            })}
          </div>

          <div className='navLibrary active'>
                <li className='nav-text'>
                  <Link to="#" onClick={ showSidebar }>
                    <IoIcons.IoLibrarySharp/>
                  </Link>
                </li>
          </div>
        </ul>
      </nav>
      </>
    )
  } else {
    return (
      <>
      {/* <IconContext.Provider value={{ color: "undefined" }}> */}
        <nav className="nav-menu">
          <ul>
            <div className='navHomeAndSearch'>
              { SidebarData.map((item, index) => {
                return(
                    <li key={ index } className={ item.cName}>
                      <Link to={ item.path }>
                        { item.icon }
                        <span>{ item.title }</span>
                      </Link>
                    </li>
                )
              })}
            </div>

            <div className='navLibrary'>
                  <li className='nav-text'>
                    <Link to="#" onClick={ showSidebar }>
                      <IoIcons.IoLibrarySharp/>
                      <span> Your Library </span>
                    </Link>
                  </li>
            </div>
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
      </>
    )
  }
}
