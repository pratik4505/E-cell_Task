import Link from 'next/link';
import { useState,useEffect } from 'react';
import classes from './Navigation.module.css';
import Bar from '../Icons/Bar';
import Cross from '../Icons/Cross';
function Navigation() {

    const [isMobile, setIsMobile] = useState(false);
    const [isClicked,setIsClicked]=useState(false);
 
    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 600) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
    }
    
    // create an event listener
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })

    const toggle=()=>{
        setIsClicked((prev)=>!prev);
    };

    const flag=!isMobile||isClicked;

  return (
    <header >

        
      <nav className={classes.navBar}>
      
        {flag&&<ul>
          <li>
            <Link href='/Home'>Home</Link>
          </li>
          <li>
            <Link href='/'>Grid</Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/pratik-nandan-b57875276/'>LinkedIn</Link>
          </li>
        </ul>}
        {isClicked&&<div className={classes.icon} onClick={toggle}><Cross/></div>}
        {(isMobile&&!isClicked)&&<div className={classes.icon} onClick={toggle}><Bar/></div>}    

      </nav>

    </header>
  )

};

export default Navigation;
