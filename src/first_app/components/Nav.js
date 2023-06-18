import React from 'react'
//props ={menus : props.menus}
const Nav = () => {
  return (
    <nav className='lnb'>
    <ul>
        <li><a href="#">{props.menus[0]}</a></li>
        <li><a href="#">{props.menus[1]}</a></li>
        <li><a href="#">{props.menus[2]}</a></li>
    </ul>
</nav>
  )
}

export default Nav