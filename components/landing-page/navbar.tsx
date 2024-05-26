/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import {useState} from 'react'
import NavLink from './nav-link'
import Branding from '../common/branding'
import {ThemeSwitch} from '../theme-switch'

const Navbar = () => {


    const navigation = [
        { title: "Features", path: "#features" },
        { title: "Our toolkit", path: "#toolkit" },
        { title: "Testimonials", path: "#testimonials" },
    ]


    return (
        <header>
            <nav className={`w-full md:static md:text-sm`}>
                <div className="custom-screen items-center mx-auto md:flex">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Branding />
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block`}>
                        <ul className="text-foreground justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0  md:font-medium">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="duration-150">
                                            <Link
                                                href={item.path}
                                                className="block"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <ThemeSwitch />
                            <li>
                                <NavLink
                                    href="/get-started"
                                    className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline"
                                >
                                    Let's work
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar