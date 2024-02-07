import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcons.AiFillHome/>,
        cName: "nav-text",
    },
    {
        title: "Search",
        path: "/search",
        icons: <FaIcons.FaSearch/>,
        cName: "nav-text",
    },
    {
        title: "Signout",
        path: "/search",
        icons: <FaIcons.FaSignOutAlt/>,
        cName: "nav-text",
    },
]
