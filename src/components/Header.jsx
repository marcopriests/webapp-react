import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <div className='bg-dark p-3 d-flex align-items-center'>
            <div className='logo me-2'>
                <img className='img-fluid' src="public/duck.png" alt="logo" />
            </div>

        </div>
    )
}

export default Header
