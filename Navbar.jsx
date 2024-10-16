import React, { useState, useRef} from 'react'
import './Navbar.css'
import underline1221 from '../assets/underline1221.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open1 from '../assets/menu_open1.svg'
import menu_close2 from '../assets/menu_close2.svg'

const Navbar = () => {

  const[menu,setMenu] = useState("about");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right='0';
  }
  const closeMenu = () =>{
    menuRef.current.style.right='-350px';
  }

  return (
    <div className="navbar">
        <div className="logo">Kalyan Aryan</div>
        <img src={menu_open1} onClick={openMenu} alt='' className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close2} onClick={closeMenu} alt='' className='nav-mob-close'/>
          <li><AnchorLink className='anchor-link' href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu==="about"?<img src={underline1221} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline1221} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underline1221} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#resume'><p onClick={()=>setMenu("resume")}>Resume</p></AnchorLink>{menu==="resume"?<img src={underline1221} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Conatct</p></AnchorLink>{menu==="contact"?<img src={underline1221} alt=''/>:<></>}</li>
          </ul>
    </div>
  )
}

export default Navbar