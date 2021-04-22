import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
<header >
    <nav className={s.navigation}>
      <ul className={s.navigation__list}>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
        <NavLink exact to="/job-focus" className={s.navigatin__item__link}>Job Focus</NavLink>
        </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
        <NavLink exact to="/soft-skills" className={s.navigatin__item__link}>Soft Skills</NavLink>
        </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
        <NavLink exact to="/technical-skills" className={s.navigatin__item__link}>Technical Skills</NavLink>
        </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}> 
        <a href="#" className={s.navigatin__item__link}>Functional Expertise</a>
        </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
          <a href="#" className={s.navigatin__item__link}>Domain Expertise</a>
          </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
          <a href="#" className={s.navigatin__item__link}>Patent Expertice</a>
          </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
          <a href="#" className={s.navigatin__item__link}>Personal Expertise</a>
          </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
          <a href="#" className={s.navigatin__item__link}>Hard Expertise</a>
          </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
          <a href="#" className={s.navigatin__item__link}>Domain Expertise</a>
          </li>
        <li className={s.navigation__item} activeClassName={s.navigatin__item__active}>
          <a href="#" className={s.navigatin__item__link}>Domain Expertise</a>
        </li>
      </ul>
      </nav> 
</header>
)
}