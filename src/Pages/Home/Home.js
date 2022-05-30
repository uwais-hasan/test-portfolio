
import './Home.css'

import useStyle from "../../Hooks/useStyle";
import {Typewriter} from "react-simple-typewriter";
import {motion} from "framer-motion";
import {BorderTop} from "react-bootstrap-icons";

const Home = () => {
    const {style,variantTransition}=useStyle()
    const animationButton={

        visible:{
            scale: 1,
        },
        hover:{
            scale: 1.2,
            transition:{yoyo:Infinity},
            boxShadow: '0px 2px 7px 1px #7e7e7e',
        }
    }
    const snake={
        // visible:(i)=>({
        //     BorderTop:'3px solid red',
        //     BorderRight:'3px solid red',
        //     transition: {duration:.3}
        // })
        visible:(i)=>({
            borderTop:'3px solid red',
            borderRight:'3px solid red',
            borderBottom:'3px solid red',
            borderLeft:'3px solid red',
            transition: {duration:1}
        })
    }


    return (
        <motion.div
            variants={variantTransition}
            initial='hidden'
            animate='visible'
            exit='exit'
            style={style.styleMode}  className='section-home '>
           <div className='content-home'>

               <div  className='content-info'>
                   {/*<motion.p*/}
                   {/*variants={snake}*/}
                   {/*animate='visible'*/}
                   {/*custom={1}*/}

                   {/*>hello*/}
                   {/*</motion.p>*/}
                   {/*<motion.span variants={snake} animate='visible' custom={1}></motion.span>*/}
                   {/*<motion.span variants={snake} animate='visible' custom={2}></motion.span>*/}
                   {/*<motion.span variants={snake} animate='visible' custom={3}></motion.span>*/}
                   {/*<motion.span variants={snake} animate='visible' custom={4}></motion.span>*/}

                   <p className='style-title'>hello my name is owies hassan</p>
                   <p className='style-title'>I am a
                       <span style={ style.color}>
                           <Typewriter
                               words={[ ' FrontEnd', ' BackEnd', ' unKnow', ' end']}
                               loop
                               cursor
                               cursorStyle='|'
                               typeSpeed={70}
                               deleteSpeed={50}
                               delaySpeed={1000}

                           />
                        </span>
                   </p>
                   <p className='style-para opacity-8'>An innovative frontend developer. Pursuit  may passion for
                       a high level of success, Maintains up to date awareness of technological
                       trends and technological advances.
                   </p>
                   <motion.button
                       variants={animationButton}
                       animate='visible'
                        whileHover='hover'


                       style={style.backgroundColor} className='style-button'>More about me</motion.button>
               </div>
               <div  className='content-image'>
                   <span style={style.borer_left_img} ></span>
                   <span style={style.borer_right_img} className='after-style'></span>
                  <img src='./Img/owies.jpg'/>
               </div>
           </div>
        </motion.div>
    );
};

export default Home;