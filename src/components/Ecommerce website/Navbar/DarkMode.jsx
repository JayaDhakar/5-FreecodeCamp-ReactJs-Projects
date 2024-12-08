import React from 'react'
import lightmodeButton from "../../Ecommerce website/assets/lightmodeButton.png";
import DarkmodeButton from "../../Ecommerce website/assets/Darkmodebutton.png";

const DarkMode = () => {
  const [theme,setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element= document.documentElement;
  React.useEffect(()=>
  {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  }, [theme]);
  // console.log(element);
  return (
    <div className='relative' > 
        <img src={lightmodeButton} 
        
        onClick={()=> setTheme(theme === "light"?"dark":"light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)]
         transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0":"opacity-100"}`
        }/>
        <img src={DarkmodeButton} alt=''
        className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300'/>

    </div>
  )
}

export default DarkMode