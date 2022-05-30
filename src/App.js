
import './App.css';
import { Route, Routes, useLocation} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import SideBar from "./Components/SideBar/SideBar";
import {List} from "react-bootstrap-icons";
import { useState} from "react";
import ThemeColors from "./Components/ThemeColors/ThemeColors";
import useResize from "./Hooks/useResize";
import useStyle from "./Hooks/useStyle";
import {AnimatePresence} from "framer-motion";


function App() {
    const[toggle,setToggle]=useState(false);
    const widthWin=useResize()
   const {style,color}=useStyle(toggle)
  const location=useLocation()

  return (
      <div className="App">
              {widthWin<=575&&
                  <List
                      className='icon-bar'
                      color={color}
                      fontSize='25px'
                      onClick={()=> {setToggle(!toggle)}}
                  />
              }
               <ThemeColors/>
              <div style={style.styleSideBar} className='sideBar'>
                   <SideBar toggle={toggle} setToggle={setToggle}/>
              </div>
              <div style={style.styleContent} className='content'>
                     <AnimatePresence exitBeforeEnter>
                         <Routes location={location} key={location.key} >
                             <Route exact path='/' element={<Home/>}/>
                             <Route path='/About' element={<About/>}/>
                             <Route path='/Contact' element={<Contact/>}/>
                             <Route path='/Portfolio' element={<Portfolio/>}/>
                             <Route path='/Services' element={<Services/>}/>
                         </Routes>
                     </AnimatePresence>

              </div>


      </div>
  );
}

export default App;
