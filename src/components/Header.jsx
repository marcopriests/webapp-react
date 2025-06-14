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
        <div className='bg-dark p-3 d-flex align-items-center justify-content-between'>
            <Link className='nav-link text-light ms-3' to='/'>
                <div className='logo me-2'>
                    <img className='img-fluid' src="/duck.png" alt="logo" />
                </div>
            </Link>

            <Link className='nav-link text-light me-3' to='/movies/create'>
                <div className='fs-4 text-danger rounded-5'><i className="fa-solid fa-plus"></i></div>
            </Link>
        </div>
    )
}

export default Header
