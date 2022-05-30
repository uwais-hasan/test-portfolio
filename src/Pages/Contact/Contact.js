import React, {useState} from 'react';
import {EnvelopeCheck, GeoAltFill, Globe2, TelephonePlus} from "react-bootstrap-icons";
import Title from "../../Components/Title/Title";
import {motion} from "framer-motion";

import './Contact.css'

import useStyle from "../../Hooks/useStyle";
const Contact = () => {
    const{style,color,variantTransition}=useStyle()
    return (
        <motion.div
            variants={variantTransition}
            initial='hidden'
            animate='visible'
            exit='exit'
            style={style.styleMode} className='section-contact'>

            <Title title='Contact me' />

               <div className='intro'>
                   <h2 className='style-para' style={style.color}>Have You Any Questions ?</h2>
                   <p className='style-span'>I AM AT YOUR SERVICE</p>
               </div>
               <div className='contact-info'>
                   <div className='row'>
                       <TelephonePlus fontSize='30px' color={color}/>
                       <p className='style-para '>Call us on</p>
                       <span className='style-span opacity-8'>+96170778358</span>
                   </div>
                   <div className='row'>
                       <EnvelopeCheck  fontSize='30px' color={color}/>
                       <p className='style-para'>Office</p>
                       <span className='style-span opacity-8'>lebanon,sida</span>
                   </div>
                   <div className='row'>
                       <GeoAltFill fontSize='30px' color={color}/>
                       <p className='style-para'>Email</p>
                       <span className='style-span opacity-8'>owie.h.hassan@gmail.com</span>
                   </div>
                   <div className='row'>
                       <Globe2  fontSize='30px' color={color}/>
                       <p className='style-para'>Website</p>
                       <span className='style-span opacity-8'>this is my website</span>
                   </div>
               </div>
               <div className='section-sendEmail'>
               <div className='intro-email'>
                   <h2 style={style.color} className='style-para'>send me an email</h2>
                   <p className='style-span'>i'm very responsive to message</p>
               </div>
                   <div className='contact'>
                       <input type='text' placeholder='Name'/>
                       <input type='email' placeholder='Email'/>
                       <input type='text' placeholder='Subject'/>
                       <textarea type='text' placeholder='Message'/>
                       <button style={style.backgroundColor} className='button'>Send massage</button>
                   </div>
               </div>

        </motion.div>
    );
};

export default Contact;