import React from 'react';


import './SideBar.css'
import {Briefcase, ChatDotsFill, HouseFill, ListTask, PersonFill} from "react-bootstrap-icons";
import {NavLink} from "react-router-dom";
import {namePages} from "../../Data/Data";
import Links from "../Links/Links";
import useResize from "../../Hooks/useResize";

const SideBar = ({toggle,setToggle}) => {
    const widthWin=useResize()
    const HideMenuOnClick=()=>{
        if (widthWin<=575){
            setToggle(!toggle)
        }else {
            setToggle(false)
        }
    }
    return (
        <div style={{position: widthWin <= 575 ? 'static' : 'fixed'}} className='section-SideBar'>
            <div className='border-name'>
                <p>Owies</p>
            </div>
            <div className='name-section'>
                <ul className='list-style'>>
                    {namePages.map(item=>{
                        return(
                           <li key={item.name} onClick={HideMenuOnClick}><Links  name={item.name} href={item.name} icons={item.icon}/></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;