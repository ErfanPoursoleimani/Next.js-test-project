'use client'
import React from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import classnames from 'classnames'

const NavBar = () => {

    const links = [
        {label: 'dashboard', href: '/' },
        {label: 'issues', href:'/issues' },
        {label: 'users', href:'/users' }
    ]

    const currentPath = usePathname()

  return (
    <nav className='flex space-x-6 border-b mb-3 px-5 h-14 items-center'>
        <Link href="/"><FaBug /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => 
                    <li key={link.label}>
                      <Link
                       className={classnames({
                          'text-zinc-900': currentPath === link.href,
                          'text-zinc-500': currentPath !== link.href,
                          'hover:text-zinc-800 transition-colors': true
                        })}
                       href={link.href}>
                        {link.label}
                      </Link>
                    </li>
            )}
        </ul>
    </nav>
  )
}

export default NavBar