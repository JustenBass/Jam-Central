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
        title: "Signup",
        path: "/signup",
        icon: <FaIcons.FaSignOutAlt/>,
        cName: "nav-text",
    },
]
