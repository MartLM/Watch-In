import UserIcon from '../Icons/UserIcon'
import { MenuIcon } from '../Icons/MenuIcon'
import { Link } from 'react-router-dom'

import styles from './css/NavBar.module.css'

export function NavBar() {
  return (
    <nav className={styles['nav-bar-page']}>
      <button className='menu'><MenuIcon className={styles['menu-icon']}/></button>
      <Link to='/'>
        <h1 className='title-1'>Watch<span>In</span></h1>
      </Link>
      <ul className='list'>
        <UserIcon className={ styles['user-icon'] }/>
      </ul>
    </nav>
  )
}
