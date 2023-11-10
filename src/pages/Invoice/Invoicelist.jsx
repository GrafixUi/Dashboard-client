import React from 'react'
import Table, { AvatarCell, StatusPill } from './table'
import { motion } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const getData = () => {
    const data = [
        
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
                <div className="flex flex-row justify-between ">
                    <h1 className="text-xl font-semibold">Invoice List</h1>
                    <div>
                        <Link to="/addinvoice">
                            <button
                                type="submit"
                                className="rounded-md flex text-center flex-row px-3 py-2 text-sm font-semibold text-white shadow-sm bg-green-600"
                            >
                                <FiPlus className="text-white " width={60} /> <h1>New</h1>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-1 ">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Table columns={columns} data={data} />
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default App
