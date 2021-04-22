import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
const [activeLink, setActiveLink] = useState("0");

const pressed = event =>{
  setActiveLink(event.target.id);
}

  return (
<header >
    <nav className={s.navigation}>
      <ul className={s.navigation__list}>
        <li className={activeLink === "1" ? s.navigation__itemActive : s.navigation__item} >
        <NavLink exact to="/job-focus" 
        id="1"
        className={s.navigation__item__link} 
        onClick={pressed}>Job Focus</NavLink>
        </li>
        <li className={activeLink === "2" ? s.navigation__itemActive : s.navigation__item} >
        <NavLink exact to="/soft-skills" 
        id="2" 
        className={s.navigation__item__link} 
        onClick={pressed}>Soft Skills</NavLink>
        </li>
        <li className={activeLink === "3" ? s.navigation__itemActive : s.navigation__item} >
        <NavLink exact to="/technical-skills" id="3" 
        className={s.navigation__item__link} 
        onClick={pressed}>Technical Skills</NavLink>
        </li>
        <li className={activeLink === "4" ? s.navigation__itemActive : s.navigation__item} > 
        <NavLink exact to="/" 
        id="4" 
        className={s.navigation__item__link} 
        onClick={pressed}>Functional Expertise</NavLink>
        </li>
        <li className={activeLink === "5" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="5" 
          className={s.navigation__item__link} 
          onClick={pressed}>Domain Expertise</NavLink>
          </li>
        <li className={activeLink === "6" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="6" 
          className={s.navigation__item__link} 
          onClick={pressed}>Patent Expertice</NavLink>
          </li>
        <li className={activeLink === "7" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="7" 
          className={s.navigation__item__link} 
          onClick={pressed}>Personal Expertise</NavLink>
          </li>
        <li className={activeLink === "8" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="8" 
          className={s.navigation__item__link} 
          onClick={pressed}>Hard Expertise</NavLink>
          </li>
        <li className={activeLink === "9" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="9" 
          className={s.navigation__item__link} 
          onClick={pressed}>Domain Expertise</NavLink>
          </li>
        <li className={activeLink === "10" ? s.navigation__itemActive : s.navigation__item} >
          <NavLink exact to="/" 
          id="10" 
          className={s.navigation__item__link} 
          onClick={pressed}>Domain Expertise</NavLink>
        </li>
      </ul>
      </nav> 
</header>
)
}