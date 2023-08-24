import React from 'react'
import Header from "../components/header"
import Products from '@/components/product_section'

const Layout = ({ Fragment = true, children }) => {
    return Fragment ? (
        <>
            <Header />
            {children}
            <Products category={"women"}/>
            <Products category={"men"}/>
        </>
    ) : (
        <>
            <Header />
            <main {...props}>{children}</main>
        </>
    );
}

export default Layout