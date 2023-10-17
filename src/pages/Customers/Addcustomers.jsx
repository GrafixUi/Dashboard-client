import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createCustomer } from '../../Redux/actions/Customer/customers'
import { useNavigate } from 'react-router-dom'
import { setTabData } from '../../Redux/actions/tab/tab'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { FiEdit2, FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';


function Addcustomers({ createCustomer }) {
    const [data, setData] = useState([])
    const [newRow, setNewRow] = useState({ name: '', email: '' })
    const [editCell, setEditCell] = useState(null)
    const [formData, setFormData] = useState({
        customerType: 'Business',
        firstName: '',
        lastName: '',
        companyName: '',
        customerDisplayName: '',
        currency: 'INR-Indian Rupee',
        customerEmail: '',
        customerPhone: '',
        sin: '',
        paymentTerm: 'CASH',
        portalLanguage: 'English'
    })

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log('Name:', name)
        console.log('Value:', value)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleCellChange = (e, id, field) => {
        const updatedData = data.map((row) => (row.id === id ? { ...row, [field]: e.target.value } : row))
    }

    const handleEditClick = (id, field) => {
        setEditCell({ id, field })
    }

    const handleSaveClick = () => {
        setEditCell(null)
    }

    const handleAddRow = () => {
        const newRowWithId = { ...newRow, id: data.length + 1 }
        setData([...data, newRowWithId])
        setNewRow({ name: '', email: '' })
    }

    const handleDeleteRow = (id) => {
        const updatedData = data.filter((row) => row.id !== id)
        setData(updatedData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (
            formData.customerType.trim() === '' ||
            formData.firstName.trim() === '' ||
            formData.lastName.trim() === '' ||
            formData.companyName.trim() === '' ||
            formData.customerDisplayName.trim() === '' ||
            formData.currency.trim() === '' ||
            formData.customerEmail.trim() === '' ||
            formData.customerPhone.trim() === '' ||
            formData.sin.trim() === '' ||
            formData.paymentTerm.trim() === '' ||
            formData.portalLanguage.trim() === '' ||
            formData.attention.trim() === '' ||
            formData.country_Region.trim() === '' ||
            formData.address.trim() === '' ||
            formData.city.trim() === '' ||
            formData.state_Province.trim() === '' ||
            formData.zip_Postalcode.trim() === '' ||
            formData.remarks.trim() === ''
        ) {
            alert('Please fill out all required fields.')
            return
        }
        try {
            const dataToSubmit = {
                ...formData
            }
            createCustomer(dataToSubmit)
            console.log('Customer data submitted:', dataToSubmit)
            setFormData({
                customerType: 'Business',
                firstName: '',
                lastName: '',
                companyName: '',
                customerDisplayName: '',
                currency: 'INR-Indian Rupee',
                customerEmail: '',
                customerPhone: ''
            })
            toast.success('Customer has been deleted successfully');
            navigate('/customers')
            window.location.reload()
        } catch (error) {
            console.error('Error adding customer:', error)
        }
    }

    return (
        <div>
            <div className="container mx-auto w-3/4 mt-4">
                <h1 className="text-center text-2xl font-semibold mb-4">Customer Information</h1>
                <form onSubmit={handleSubmit}>
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

                    <div className="mb-4">
                        <h2 className="text-lg text-gray-600 font-medium mt-2 mb-3">Primary Contact</h2>
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
                    </div>
                    <div className="grid grid-cols-2 gap-4">
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

                    {/* tab */}
                    <div className="pt-3 ">
                        <Tabs>
                            <TabList className="flex space-x-2 mb-5">
                                <Tab className="relative px-4 py-2 text-black focus:outline-none cursor-pointer">
                                    Other Details
                                </Tab>
                                <Tab className="relative px-4 py-2 text-black focus:outline-none cursor-pointer">
                                    Address
                                </Tab>
                                <Tab className="relative px-4 py-2 text-black focus:outline-none cursor-pointer">
                                    Contact Persons
                                </Tab>
                                <Tab className="relative px-4 py-2 text-black focus:outline-none cursor-pointer">
                                    Remarks
                                </Tab>
                            </TabList>

                            <TabPanel>
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
                                            <label className="block text-sm font-medium text-gray-700">
                                                Payment Term:
                                            </label>
                                            <select
                                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                                name="paymentTerm"
                                                value={formData.paymentTerm}
                                                onChange={handleInputChange}
                                            >
                                                <option value="CASH">CASH</option>
                                                <option value="CARD">CARD</option>
                                            </select>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">
                                                Portal Language:
                                            </label>
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
                            </TabPanel>
                            <TabPanel>
                                <div className="p-2">
                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                                            Billing Address
                                        </h2>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            Use a permanent address where you can receive mail.
                                        </p>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="attention"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Attention
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="attention"
                                                        id="attention"
                                                        autoComplete=""
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={formData.attention}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label
                                                    htmlFor="country_Region"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Country / Region
                                                </label>
                                                <div className="mt-2">
                                                    <select
                                                        id="country_Region"
                                                        name="country_Region"
                                                        autoComplete="country_Region"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                        value={formData.country_Region}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-span-full">
                                                <label
                                                    htmlFor="address"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    Address
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        id="address"
                                                        autoComplete="address"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2 sm:col-start-1">
                                                <label
                                                    htmlFor="city"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    City
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        autoComplete="address-level2"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={formData.city}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="state_Province"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    State / Province
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="state_Province"
                                                        id="state_Province"
                                                        autoComplete="address-level1"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={formData.state_Province}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label
                                                    htmlFor="zip_Postalcode"
                                                    className="block text-sm font-medium leading-6 text-gray-900"
                                                >
                                                    ZIP / Postal code
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="zip_Postalcode"
                                                        id="zip_Postalcode"
                                                        autoComplete="zip_Postalcode"
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        value={formData.zip_Postalcode}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="container mx-auto p-1">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4 bg-gray-200 text-left">Name</th>
                                                <th className="py-2 px-4 bg-gray-200 text-left">Email</th>
                                                <th className="py-2 px-4 bg-gray-200 text-left">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((row) => (
                                                <tr key={row.id}>
                                                    <td>
                                                        {editCell?.id === row.id && editCell.field === 'name' ? (
                                                            <input
                                                                type="text"
                                                                className="w-full px-2 py-1 border rounded"
                                                                value={formData.contactPerson_name}
                                                                onChange={(e) => handleCellChange(e, row.id, 'name')}
                                                            />
                                                        ) : (
                                                            row.name
                                                        )}
                                                    </td>
                                                    <td>
                                                        {editCell?.id === row.id && editCell.field === 'email' ? (
                                                            <input
                                                                type="text"
                                                                className="w-full px-2 py-1 border rounded"
                                                                value={formData.contactPerson_email}
                                                                onChange={(e) => handleCellChange(e, row.id, 'email')}
                                                            />
                                                        ) : (
                                                            row.email
                                                        )}
                                                    </td>
                                                    <td>
                                                        {editCell?.id === row.id ? (
                                                            <button
                                                                className="px-4 py-2 bg-green-500 text-white rounded"
                                                                onClick={handleSaveClick}
                                                            >
                                                                Save
                                                            </button>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    className="px-4 py-2  text-black rounded"
                                                                    onClick={() => handleEditClick(row.id, 'name')}
                                                                >
                                                                    <FiEdit2 width={50} />
                                                                </button>
                                                                <button
                                                                    className="px-4 py-2 bg-red-500 text-white rounded ml-2"
                                                                    onClick={() => handleDeleteRow(row.id)}
                                                                >
                                                                    <FiX width={50} />
                                                                </button>
                                                            </>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="w-full px-2 py-1 border rounded"
                                                        placeholder="Name"
                                                        value={formData.contactPerson_name}
                                                        onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="w-full px-2 py-1 border rounded"
                                                        placeholder="Email"
                                                        value={formData.contactPerson_email}
                                                        onChange={(e) =>
                                                            setNewRow({ ...newRow, email: e.target.value })
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <button
                                                        className="px-4 py-2 bg-blue-500 text-white text-[10px] rounded"
                                                        onClick={handleAddRow}
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div className="mb-4 p-3">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Remarks (For Internal Use)
                                        </label>
                                        <textarea
                                            type="text"
                                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                            name="remarks"
                                            rows={4}
                                            value={formData.remarks}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>

                    <div className="mt-6 flex items-center justify-start gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                        >
                            Save
                        </button>
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    createCustomer,
    setTabData
}

export default connect(mapStateToProps, mapDispatchToProps)(Addcustomers)
