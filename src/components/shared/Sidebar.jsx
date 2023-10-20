import React from 'react'
import classNames from 'classnames'
import { Link, useLocation, useMatch } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from './sidebar/sidebarlist'

const linkClass =
    'flex items-center gap-2 font-light px-3 py-2 hover:no-underline active:bg-green-500 rounded-sm text-base'

export default function Sidebar() {
    return (
        <div className="bg-gray-900 w-[250px] p-3 flex flex-col">
            <div className="flex items-center gap-2 px-1 py-3">
                <span className="text-white text-lg">Dashboard</span>
            </div>
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            {/* <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div> */}
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
                        ? 'bg-green-500 text-white'
                        : 'text-white',
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
                                pathname === submenuLink.path ? 'bg-green-500 text-white' : 'text-white',
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
