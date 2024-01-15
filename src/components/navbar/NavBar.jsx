import React from 'react'
import style from './navbar.module.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={style.container}>
        <Link href='/'>Asaiah Henson</Link>
        <button>Connect Wallet</button>
    </div>
  )
}

export default NavBar