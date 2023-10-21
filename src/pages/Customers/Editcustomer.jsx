import React, { useState } from 'react'
import axios from 'axios'

export default function EditCustomer({ customer, onSave }) {
    const [formData, setFormData] = useState(customer || {})
    if (!customer) {
        return <div>No customer data available</div>
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:5000/api/customers/${formData.kad_id}`, formData)
            onSave()
            
            window.location.reload()
        } catch (error) {
            console.error('Error updating customer:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="container p-6 overscroll-y-auto">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Customer Type:</label>
                <select
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="customerType"
                    value={formData.customerType}
                    onChange={handleInputChange}
                >
                    <option value="Business">Business</option>
                    <option value="Individual">Individual</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">First Name:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">Last Name:</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Company Name:</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Customer Display Name:</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="customerDisplayName"
                    value={formData.customerDisplayName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Currency:</label>
                <select
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                >
                    <option value="INR-Indian Rupee">INR - Indian Rupee</option>
                    <option value="CAD-Canadian Dollar">CAD - Canadian Dollar</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Customer Email:</label>
                <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Customer Phone:</label>
                <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleInputChange}
                />
            </div>

            <div className="p-2">
                <div className="mt-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">SIN:</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            name="sin"
                            value={formData.sin}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Payment Terms:</label>
                        <select
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            name="paymentTerms"
                            value={formData.paymentTerms}
                            onChange={handleInputChange}
                        >
                            <option value="CASH">CASH</option>
                            <option value="CARD">CARD</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Portal Language:</label>
                        <select
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            name="portalLanguage"
                            value={formData.portalLanguage}
                            onChange={handleInputChange}
                        >
                            <option value="English">English</option>
                            <option value="Tamil">Tamil</option>
                        </select>
                    </div>
                </div>
            </div>

            

            <div className="mt-6 flex items-center justify-start gap-x-6">
                <button
                    type="submit"
                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
