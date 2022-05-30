import React, {useState} from 'react';
import {CodeSlash, Laptop, MegaphoneFill, PaletteFill, Phone, Search} from "react-bootstrap-icons";

import './Services.css'
import Title from "../../Components/Title/Title";

import {useSelector} from "react-redux";
import useStyle from "../../Hooks/useStyle";
import {motion} from "framer-motion";

const Services = () => {
    const{color}=useSelector(state=>state);

    const{style,variantTransition}=useStyle()
    return (
        <motion.div
            variants={variantTransition}
            initial='hidden'
            animate='visible'
            exit='exit'
            style={style.styleMode} className='section-services'>
               <Title  title='Services'/>
           <div className='content-services'>
               <div className='row'>
                   <Phone color={color} fontSize='50px'  />
                   <h2>Wed designer</h2>
                   <p>I am a web designer extensive experience for over 10 yeasrs,
                       my experties is to cerate and website
                       designer,graphic design and many more
                   </p>
               </div>
               <div className='row'>
                   <Laptop color={color} fontSize='50px'/>
                   <h2>Wed designer</h2>
                   <p>I am a web designer extensive experience for over 10 yeasrs,
                       my experties is to cerate and website
                       designer,graphic design and many more
                   </p>
               </div>
               <div className='row'>
                   <PaletteFill color={color} fontSize='50px'/>
                   <h2>Wed designer</h2>
                   <p>I am a web designer extensive experience for over 10 yeasrs,
                       my experties is to cerate and website
                       designer,graphic design and many more
                   </p>
               </div>
               <div className='row'>
                   <CodeSlash color={color} fontSize='50px'/>
                   <h2>Wed designer</h2>
                   <p>I am a web designer extensive experience for over 10 yeasrs,
                       my experties is to cerate and website
                       designer,graphic design and many more
                   </p>
               </div>
               <div className='row'>
                   <Search color={color} fontSize='50px'/>
                   <h2>Wed designer</h2>
                   <p>I am a web designer extensive experience for over 10 yeasrs,
                       my experties is to cerate and website
                       designer,graphic design and many more
                   </p>
               </div>
               <div className='row'>
                   <MegaphoneFill color={color} fontSize='50px'/>
                   <h2>Wed designer</h2>
                   <p>I am a web designer extensive experience for over 10 yeasrs,
                       my experties is to cerate and website
                       designer,graphic design and many more
                   </p>
               </div>
           </div>
        </motion.div>
    );
};

export default Services;

