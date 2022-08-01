import  { useEffect, useState } from 'react'


export default function SetDarkMode() {
    const [theme, setTheme]= useState("dark")
    const colorTheme= theme==='dark'? 'light' :'dark'
    useEffect(()=>{

        const root= window.document.documentElement;
        root.classList.remove(colorTheme)
        root.classList.add('dark')
    },[theme, colorTheme]);

return(colorTheme, setTheme)
  
}
