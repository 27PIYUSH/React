import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout


// outlet --> In React Router DOM, the <Outlet /> component is a placeholder that tells React Router where to render the child routes within a parent route. It acts like a dynamic container that changes its content based on the current URL.