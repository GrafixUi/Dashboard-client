import React from 'react'
import classNames from 'classnames'
import { Link, useLocation, useMatch } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from './sidebar/sidebarlist'
import { HiOutlineLogout } from 'react-icons/hi';
import logo from "../../assets/icons8-invoice-94.png"
const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:no-underline active:bg-green-500 rounded text-base'

export default function Sidebar() {
    return (
        <div className="bg-gray-900  w-[200px] p-2 flex flex-col">
            <div className="flex items-center gap-2 px-1 py-3 ">
                <span className='text-white p-1'><img src={logo} alt="" /></span>
                <h1 className="text-white text-lg">Dashboard</h1>
            </div>
            <div className="py-6 flex flex-1 flex-col gap-2">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                <Link to='/'>
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div></Link>
            </div>
        </div>
    )
}

function SidebarLink({ link }) {
    const { pathname } = useLocation()
    const matchRoot = useMatch(link.path)

    return (
        <>
            <Link
                to={link.path}
                className={classNames(
                    pathname === link.path || (matchRoot && pathname === '/')
                        ? 'bg-green-500 text-white text-sm'
                        : 'text-white text-sm',
                    linkClass
                )}
            >
                <span className="text-xl">{link.icon}</span>
                {link.label}
            </Link>
            
            {link.submenu && (pathname.startsWith(link.path) || matchRoot) && (
                <div className="ml-6 text-sm">
                    {link.submenu.map((submenuLink) => (
                        <Link
                            key={submenuLink.key}
                            to={submenuLink.path}
                            className={classNames(
                                pathname === submenuLink.path ? 'bg-green-500 text-white text-sm' : 'text-white text-sm',
                                linkClass
                            )}
                        >
                            <span className="text-xl">{submenuLink.icon}</span>
                            {submenuLink.label}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}
