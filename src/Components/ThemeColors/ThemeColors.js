import React, {useState} from 'react';

import './ThemeColors.css'
import {useDispatch, useSelector} from "react-redux";
import {updateColor, updateMode} from "../../Redux/Actions";
import { BrightnessHigh, Gear, Moon} from "react-bootstrap-icons";
import {colors} from '../../Data/Data'
import {motion} from "framer-motion";
import useStyle from "../../Hooks/useStyle";
const ThemeColors = () => {
    const dispatch=useDispatch();
    const[toggle,setToggle]=useState(false);
    const{mode,color}=useSelector(state=>state)
    const{style}=useStyle(toggle)

    const handleToggle = () => {
        return setToggle(!toggle)
    }
    const handleMode = () => {
        return dispatch(updateMode(!mode))
    }


    return (
        <motion.div
            style={style.styleAnimation}
            className='section-themeColors'>
            <div className='icons'>
                <Gear className='setting' onClick={handleToggle} fontSize='25px' color={color}/>

                {mode ? <BrightnessHigh onClick={handleMode} fontSize='25px' color={color}/> :
                    <Moon onClick={handleMode} fontSize='25px' color={color}/>}

            </div>
            <div style={style.styleModeAnimation} className='themeColors'>
                <p className='style-para'>theme color</p>
                <div className='colors'>
                    {colors.map(item=>{
                        return(
                            <span key={item} onClick={()=>dispatch(updateColor(item))} className='color' style={{backgroundColor:item}}></span>
                        )
                    })}
                </div>

            </div>

        </motion.div>
    );
};

export default ThemeColors;