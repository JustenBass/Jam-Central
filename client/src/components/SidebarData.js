import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text",
    },
    {
        title: "Search",
        path: "/search",
        icon: <FaIcons.FaSearch/>,
        cName: "nav-text",
    },
    {
        title: "Signout",
        path: "/search",
        icon: <FaIcons.FaSignOutAlt/>,
        cName: "nav-text",
    },
]
