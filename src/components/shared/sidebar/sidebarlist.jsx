import { HiOutlineViewGrid, HiOutlineCube, HiOutlineUsers,} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Home',
        path: '/dashboard',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUsers />,
        // submenu: [
        //     {
        //         key: 'add-customer',
        //         label: 'Add Customer',
        //         path: '/customers/addcustomers',
        //         icon: <HiOutlineUsers />
        //     }
        // ]
    },
    {
        key: 'items',
        label: 'Items',
        path: '/items',
        icon: <HiOutlineCube />,
        // submenu: [
        //     {
        //         key: 'add-items',
        //         label: 'Add Item',
        //         path: '/items/additems',
        //         icon: <HiOutlineUsers />
        //     }
        // ]
    },
    {
        key: 'Invoice',
        label: 'invoice',
        path: '/invoice',
        icon: <HiOutlineViewGrid />
    },
]