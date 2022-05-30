import React, {useState} from 'react';

import './About.css'
import {CalendarCheckFill} from "react-bootstrap-icons";
import Title from "../../Components/Title/Title";
import {useSelector} from "react-redux";
import useStyle from "../../Hooks/useStyle";
import {motion} from "framer-motion";
const About = () => {


    const{style,variantTransition}=useStyle()
    const variantProgress={
        hidden:{
            width:0,

        },
        visible:(i)=>({
            width: i,
            backgroundColor:i>='70%'?'green':'red',
            transition:{duration:10,type:'spring',delay:.3}
        })
    }

    return (

            <motion.div
                variants={variantTransition}
                initial='hidden'
                animate='visible'
                exit='exit'
                style={style.styleMode}  className='section-about style'>

            <div className='about-me'>
              <Title title='About me' />
                <p  className='style-under-title'>I am owies hassan and front<span> end developer</span></p>
                <p className='style-para '>I am a self-driven front-end developer
                    and have been in the industry for more than 2 years. I have a
                    keen eye for detail and most of my working life has been dedicated
                    to creating stunning websites for clients.
                    In addition, I have also received an some certificationfrom courserain 2019.
                </p>
            </div>

            <div className='skills-info'>
               <div className='info'>
                  <div className='row'>
                      <p><span className='bold'>Birthday :</span><span> 24 jan 1994</span></p>
                      <p><span className='bold'>Website :</span><span> www.owies.com</span></p>
                      <p><span className='bold'>Degree :</span><span> Cs</span></p>
                      <p><span className='bold'>city :</span><span> Beirut</span></p>
                  </div>
                   <div className='row'>
                       <p ><span className='bold'>Age :</span><span> 28</span></p>
                       <p><span className='bold'>Email :</span><span> owies.h.hassan@gmai.com</span></p>
                       <p><span className='bold'>Phone :</span><span> +96170778358</span></p>
                       <p><span className='bold'>Freelance :</span><span> Available</span></p>
                   </div>
                   <div className='cv'>
                       <button style={style.backgroundColor}>Download Cv</button>
                       <button style={style.backgroundColor}>Hire me</button>
                   </div>
               </div>
                <div className='skills'>
                    <div className='row-skills'>
                        <div className='type-degree'>
                            <span>Html</span>
                            <span>20%</span>
                        </div>
                        <div className='progress'>
                            <motion.span
                                variants={variantProgress}
                                initial='hidden'
                                animate='visible'
                                custom='90%'
                                style={style.styleProgress}>

                            </motion.span>
                        </div>
                    </div>
                    <div className='row-skills'>
                        <div className='type-degree'>
                            <span>Html</span>
                            <span>20%</span>
                        </div>
                        <div className='progress'>
                            <motion.span
                                variants={variantProgress}
                                initial='hidden'
                                animate='visible'
                                custom='90%'
                                style={style.styleProgress}>

                            </motion.span>
                        </div>
                    </div>
                    <div className='row-skills'>
                        <div className='type-degree'>
                            <span>Html</span>
                            <span>20%</span>
                        </div>
                        <div className='progress'>
                            <motion.span
                                variants={variantProgress}
                                initial='hidden'
                                animate='visible'
                                custom='90%'
                                style={style.styleProgress}>

                            </motion.span>
                        </div>
                    </div>
                    <div className='row-skills'>
                        <div className='type-degree'>
                            <span>Html</span>
                            <span>20%</span>
                        </div>
                        <div className='progress'>
                            <motion.span
                                variants={variantProgress}
                                initial='hidden'
                                animate='visible'
                                custom='10%'
                                style={style.styleProgress}>

                            </motion.span>
                        </div>
                    </div>
                    <div className='row-skills'>
                        <div className='type-degree'>
                            <span>Html</span>
                            <span>20%</span>
                        </div>
                        <div className='progress'>
                            <motion.span
                                variants={variantProgress}
                                initial='hidden'
                                animate='visible'
                                custom='80%'
                                style={style.styleProgress}>

                            </motion.span>
                        </div>
                    </div>
                    <div className='row-skills'>
                        <div className='type-degree'>
                            <span>Html</span>
                            <span>20%</span>
                        </div>
                        <div className='progress'>
                            <motion.span
                                variants={variantProgress}
                                initial='hidden'
                                animate='visible'
                                custom='99%'
                                style={style.styleProgress}>

                            </motion.span>
                        </div>
                    </div>

                </div>

            </div>
            <div className='educations-experiences'>
                <div className='educations'>
                    <h2>education</h2>
                   <div className='content-education'>
                       <span style={style.styleLine}></span>
                       <div className='education'>
                           <p className='date'><span style={style.styleCircle}></span><CalendarCheckFill/>2013-2015</p>
                           <h2 className='style-under-title'>Master in Computer science</h2>
                           <p className='style-para opacity-8'>I am a web designer extensive experience for over 10 yeasrs,
                               my experties is to cerate and website
                               designer,graphic design and many more
                           </p>
                       </div>
                       <div className='education'>
                           <p className='date'><span style={style.styleCircle}></span><CalendarCheckFill/>2013-2015</p>
                           <h2 className='style-under-title'>Master in Computer science</h2>
                           <p className='style-para opacity-8'>I am a web designer extensive experience for over 10 yeasrs,
                               my experties is to cerate and website
                               designer,graphic design and many more
                           </p>
                       </div>
                       <div className='education'>
                           <p className='date'><span style={style.styleCircle}></span><CalendarCheckFill/>2013-2015</p>
                           <h2 className='style-under-title'>Master in Computer science</h2>
                           <p className='style-para opacity-8'>I am a web designer extensive experience for over 10 yeasrs,
                               my experties is to cerate and website
                               designer,graphic design and many more
                           </p>
                       </div>
                       <div className='education'>
                           <p className='date'><span style={style.styleCircle}></span><CalendarCheckFill/>2013-2015</p>
                           <h2 className='style-under-title'>Master in Computer science</h2>
                           <p className='style-para opacity-8'>I am a web designer extensive experience for over 10 yeasrs,
                               my experties is to cerate and website
                               designer,graphic design and many more
                           </p>
                       </div>
                   </div>
                </div>
                <div className='experiences'>
                    <h2>experience</h2>
                  <div className='content-experience'>
                      <span style={style.styleLine}></span>
                      <div className='experience'>
                          <p className='date'><span style={style.styleCircle}></span><CalendarCheckFill/>2013-2015</p>
                          <h2 className='style-under-title'>Master in Computer science</h2>
                          <p className='style-para opacity-8'>I am a web designer extensive experience for over 10 yeasrs,
                              my experties is to cerate and website
                              designer,graphic design and many more
                          </p>
                      </div>
                      <div className='experience'>
                          <p className='date'><span style={style.styleCircle}></span><CalendarCheckFill/>2013-2015</p>
                          <h2 className='style-under-title'>Master in Computer science</h2>
                          <p className='style-para opacity-8'>I am a web designer extensive experience for over 10 yeasrs,
                              my experties is to cerate and website
                              designer,graphic design and many more
                          </p>
                      </div>
                      <div className='experience'>
                          <p className='date'><span style={style.styleCircle}></span><CalendarCheckFill/>2013-2015</p>
                          <h2 className='style-under-title'>Master in Computer science</h2>
                          <p className='style-para opacity-8'>I am a web designer extensive experience for over 10 yeasrs,
                              my experties is to cerate and website
                              designer,graphic design and many more
                          </p>
                      </div>
                      <div className='experience'>
                          <p className='date'><span style={style.styleCircle}></span><CalendarCheckFill/>2013-2015</p>
                          <h2 className='style-under-title'>Master in Computer science</h2>
                          <p className='style-para opacity-8'>I am a web designer extensive experience for over 10 yeasrs,
                              my experties is to cerate and website
                              designer,graphic design and many more
                          </p>
                      </div>
                  </div>
                </div>
            </div>

        </motion.div>
    );
};

export default About;