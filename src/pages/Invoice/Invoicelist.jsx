import React from 'react'
import Table, { AvatarCell, StatusPill } from './table'
import { motion } from 'framer-motion'

const getData = () => {
    const data = [
        {
            name: 'Jane Cooper',
            email: 'jane.cooper@example.com',
            Duedate: '18/10/2023',
            status: 'paid',
            role: 'Admin',
            amount: '$ 35',
            invoice: 'INV - 001',
            date: '25/10/2023'
        },
        {
            name: 'Jane Cooper',
            email: 'jane.cooper@example.com',
            Duedate: '18/10/2023',
            status: 'pending',
            role: 'Admin',
            amount: '$ 35',
            invoice: 'INV - 002',
            date: '23/10/2023'
        },
        {
            name: 'Jane Cooper',
            email: 'jane.cooper@example.com',
            Duedate: '18/10/2023',
            status: 'notpaid',
            role: 'Admin',
            amount: '$ 35',
            invoice: 'INV - 003',
            date: '22/10/2023'
        }
    ]
    return [...data]
}

function App() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date'
            },
            {
                Header: 'Invoice',
                accessor: 'invoice'
            },
            {
                Header: 'Name',
                accessor: 'name',
                Cell: AvatarCell
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: StatusPill
            },

            {
                Header: 'Due Date',
                accessor: 'Duedate'
            },

            {
                Header: 'Amount',
                accessor: 'amount'
            }
        ],
        []
    )

    const data = React.useMemo(() => getData(), [])

    return (
        <div className="min-h-screen container text-gray-900 ">
            <main className="w-xl mx-auto sm:px-3 lg:px-8 pt-1">
                <div className="">
                    <h1 className="text-xl font-semibold">Invoice List</h1>
                </div>
                <div className="mt-1 ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Table columns={columns} data={data} />
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default App
