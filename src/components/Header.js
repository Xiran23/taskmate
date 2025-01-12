import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
// import React from 'react'
const Header = () => {

  const [theme ,setTheme] = useState(JSON.parse(localStorage.getItem("theme"))||"dark");

  
  useEffect(()=>{
    // document.documentElement.classList.add(theme);
    localStorage.setItem("theme",JSON.stringify(theme))
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  },[theme])

  return (
  <header>
   
    <div className="logo">
      <img src={Logo} alt=''/>
      <span>TaskMate</span>
    </div>

    <div className="themeSelector">
    <span onClick={() => setTheme('light')} className={theme === 'light' ? 'light active_theme' : 'light'}></span>
    <span onClick={() => setTheme('medium')} className={theme === 'medium' ? 'medium active_theme' : 'medium'}></span>
        <span 
          onClick={() => setTheme('dark')} 
          className={theme === 'dark' ? 'dark active_theme' : 'dark'}
        >
          
        </span>
        <span 
          onClick={() => setTheme('gOne')} 
          className={theme === 'gOne' ? 'gOne active_theme' : 'gOne'}
        >
          
        </span>
        <span 
          onClick={() => setTheme('gTwo')} 
          className={theme === 'gTwo' ? 'gTwo active_theme' : 'gTwo'}
        >
          
        </span>
        <span 
          onClick={() => setTheme('gThere')} 
          className={theme === 'gThere' ? 'gThere active_theme' : 'gThere'}
        >
          
        </span>
      </div>



  </header>
  )
}

export default Header
