import React, { useState, useEffect } from 'react'
import EditCustomer from './Editcustomer'
import Modal from '../../components/modal'
import { connect } from 'react-redux'
import { fetchCustomers, deleteCustomer } from '../../Redux/actions/Customer/customers'
import { FiEdit2, FiX } from 'react-icons/fi';


function Customers({ customers, fetchCustomers, deleteCustomer }) {
    const [editingCustomer, setEditingCustomer] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchCustomers()
    }, [fetchCustomers])



    const handleDeleteCustomer = (kad_id) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            deleteCustomer(kad_id, () => {
                setIsModalOpen(false)
                fetchCustomers()
            })
        }
    }

    return (
        <div className="bg-white container px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="flex flex-row items-center gap-x-6">
                <strong className="text-gray-700 font-medium gap-x-6">All Customers</strong>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Customer Display Name</th>
                            <th>Customer Email</th>
                            <th>Customer Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td>
                                    {customer.firstName} {customer.lastName}
                                </td>
                                <td>{customer.companyName}</td>
                                <td>{customer.customerDisplayName}</td>

                                <td>{customer.customerEmail}</td>
                                <td>{customer.customerPhone}</td>
                                <td>
                                    <div className="flex items-center justify-end gap-x-6">
                                        <button
                                            type="submit"
                                            className="rounded-mdpx-3 py-2 text-sm font-semibold text-green-600 shadow-sm"
                                            onClick={() => {
                                                setEditingCustomer(customer)
                                                setIsModalOpen(true)
                                            }}
                                        >
                                            <FiEdit2 width={50} />
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md  px-3 py-2 text-sm font-semibold text-red-600 shadow-sm"
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
