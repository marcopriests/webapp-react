import React from 'react'
import { Outlet } from 'react-router'
import Header from '../src/components/Header'

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default DefaultLayout
