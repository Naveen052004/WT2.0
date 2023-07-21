import React, { useState } from 'react';
import logo from '../ui/logo.svg';
import homel from '../ui/home.svg';
import listl from '../ui/list.svg';
import searchl from '../ui/search.svg';
import categoriesl from '../ui/categories.svg';
function Sidebar() {

    const [nav,setNav]=useState([
        {label:"Home",slug:"/",icon: homel},
        {label:"Discover",slug:"discover",icon: searchl},
        {label:"My Courses",slug:"my-courses",icon: listl},
        {label:"Categories",slug:"categories",icon:categoriesl}
    ])
    const [currentPage,setCurrentPage]=useState("/");
    var navigation=[];
    for(let i=0;i<nav.length;i++){
        // console.log(nav[i].slug);
        // (currentPage == nav[i].slug ? console.log("on") : console.log(i));
        navigation.push(
            <li key={"nav - "+i+" - "+nav[i].slug}>
                    <a href={nav[i].slug} className={"link noul flex c33 " +(currentPage == nav[i].slug ? "on" : "")}>
                            <img src={nav[i].icon} className='logos' alt='imghome'></img>
                        <h2 className='lbl s18'>{nav[i].label}</h2>
                    </a>
                </li>
        )
    }
    return (
        <div className="sidebar fixed">
            <a href="#" className="logo bl">
                <img src={logo} className="bl" alt='Text' />
            </a>
            <ul className='nav'>
                {navigation}
            </ul>
        </div>
    )
}

export default Sidebar;