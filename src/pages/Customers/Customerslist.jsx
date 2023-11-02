import React, { useState, useEffect } from 'react'
import EditCustomer from './Editcustomer'
import Modal from '../../components/modal'
import { connect } from 'react-redux'
import { fetchCustomers, deleteCustomer } from '../../Redux/actions/Customer/customers'
import { FiEdit2, FiX, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Customers({ customers, fetchCustomers, deleteCustomer }) {
    const [editingCustomer, setEditingCustomer] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchCustomers()
    }, [fetchCustomers]);

    const handleDeleteCustomer = (kad_id) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            deleteCustomer(kad_id, () => {
                setIsModalOpen(false)
                fetchCustomers()
            })
        }
    }

    return (
        <div className="bg-white container px-4 pt-3 pb-4 rounded-sm  flex-1">
            <div className="flex flex-row items-center gap-x-6 justify-between">
                <div>
                    <h2 className="text-gray-700 font-medium gap-x-6">All Customers</h2>
                </div>
                <div>
                    <Link to="/addcustomer">
                        <button
                            type="submit"
                            className="rounded-md  flex flex-row px-3 py-2 text-sm font-semibold text-white shadow-sm bg-green-600"
                        >
                            <FiPlus className="text-white " width={60} /> <h1>New</h1>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="border-x border-gray-200  mt-3 ease-linear duration-100">
                <table className="w-full text-gray-600 ">
                    <thead>
                        <tr>
                            <th className="text-sm font-medium">Name</th>
                            <th className="text-sm font-medium">Company Name</th>
                            <th className="text-sm font-medium">Email</th>
                            <th className="text-sm font-medium">Customer Phone</th>
                            <th className="text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td className="text-blue-400 no-underline hover:text-blue-600 cursor-pointer ">
                                    <Link to="" className="no-underline">
                                        {customer.firstName} {customer.lastName}
                                    </Link>
                                </td>
                                <td>{customer.companyName}</td>
                                <td>{customer.customerEmail}</td>
                                <td>{customer.customerPhone}</td>
                                <td>
                                    <div className="flex items-center  gap-x-2">
                                        <button
                                            type="submit"
                                            className="rounded-md px-2 py-2 font-semibold text-green-600 shadow-sm"
                                            onClick={() => {
                                                setEditingCustomer(customer)
                                                setIsModalOpen(true)
                                            }}
                                        >
                                            <FiEdit2 width={50} />
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md  px-2 py-2 font-semibold text-red-600 shadow-sm shadow-lime-500"
                                            onClick={() => {
                                                handleDeleteCustomer(customer.kad_id)
                                            }}
                                        >
                                            <FiX width={50} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    {editingCustomer && (
                        <EditCustomer customer={editingCustomer} onSave={() => setIsModalOpen(false)} />
                    )}
                </Modal>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    customers: state.customers.customers,
    loading: state.customers.loading,
    error: state.customers.error
})

const mapDispatchToProps = {
    fetchCustomers,
    deleteCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers)
