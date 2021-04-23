import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
const [activeLink, setActiveLink] = useState("0");
const [shadowLeft, setShadowLeft] = useState('');
const [shadowRight, setShadowRight] = useState('');

const itemRef = useRef();
const listRef = useRef();

const handelPress = event =>{
  setActiveLink(event.target.id);

  itemRef.current.scrollIntoView({ block: "end",  behavior: 'smooth' });
}

const handelScroll = () =>{
  const scrollX = listRef.current.scrollX;
  console.log(`onScroll, listRef.current.scrollX: ${scrollX}`)

  if(scrollX === 0){
    setShadowLeft('shadow-left');
  } else if(scrollX >= 1860){
    setShadowRight('shadow-right');
  }
}

  return (
<header >
    <nav className={s.navigation}>
      <ul ref={listRef} className={s.navigation__list} onScroll={handelScroll}>
        <li className={activeLink === "1" ? s.navigation__itemActive : s.navigation__item} >
        <NavLink exact to="/job-focus" 
        id="1"
        ref={itemRef}
        className={s.navigation__item__link} 
        onClick={handelPress}>Job Focus</NavLink>
        </li>
        <li className={activeLink === "2" ? s.navigation__itemActive : s.navigation__item} >
        <NavLink exact to="/soft-skills" 
        id="2"
        ref={itemRef} 
        className={s.navigation__item__link} 
        onClick={handelPress}>Soft Skills</NavLink>
        </li>
        <li className={activeLink === "3" ? s.navigation__itemActive : s.navigation__item} >
        <NavLink exact to="/technical-skills" 
        id="3" 
        ref={itemRef}
        className={s.navigation__item__link} 
        onClick={handelPress}>Technical Skills</NavLink>
        </li>
        <li className={activeLink === "4" ? s.navigation__itemActive : s.navigation__item} > 
        <NavLink exact to="/" 
        id="4" 
        ref={itemRef}
        className={s.navigation__item__link} 
        onClick={handelPress}>Functional Expertise</NavLink>
        </li>
        <li className={activeLink === "5" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="5" 
          ref={itemRef}
          className={s.navigation__item__link} 
          onClick={handelPress}>Domain Expertise</NavLink>
          </li>
        <li className={activeLink === "6" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="6"
          ref={itemRef} 
          className={s.navigation__item__link} 
          onClick={handelPress}>Patent Expertice</NavLink>
          </li>
        <li className={activeLink === "7" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="7" 
          ref={itemRef}
          className={s.navigation__item__link} 
          onClick={handelPress}>Personal Expertise</NavLink>
          </li>
        <li className={activeLink === "8" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="8" 
          ref={itemRef}
          className={s.navigation__item__link} 
          onClick={handelPress}>Hard Expertise</NavLink>
          </li>
        <li className={activeLink === "9" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="9" 
          ref={itemRef}
          className={s.navigation__item__link} 
          onClick={handelPress}>Domain Expertise</NavLink>
          </li>
        <li className={s.navigation__disabled} >
          <NavLink exact to="/" 
          id="10" 
          ref={itemRef}
          className={s.navigation__item__linkDisabled } 
          onClick={handelPress}>Domain Expertise</NavLink>
        </li>
      </ul>
      <div className={`shadow ${shadowLeft}`} ></div>
      <div className={`shadow ${shadowRight}`} ></div>
      </nav> 
</header>
)
}