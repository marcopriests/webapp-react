import React from 'react'
import { Link } from 'react-router'

const links = [
    {
        id: 1,
        name: 'Homepage',
        route: '/'
    },
    {
        id: 2,
        name: 'Movies',
        route: '/movies'
    }
]

const Header = () => {
    return (
        <div className='bg-dark p-3 d-flex align-items-center'>
            <div className='logo me-2'>
                <img className='img-fluid' src="public/duck.png" alt="logo" />
            </div>
            {links.map(link => {
                return (
                    <li className='nav-item' key={link.id}>
                        <Link className='nav-link text-light me-3' to={link.route}>{link.name}</Link>
                    </li>
                )
            })}
        </div>
    )
}

export default Header
