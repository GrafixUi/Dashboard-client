import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import React, { useState, useEffect } from 'react'

export default function TabsComponent({ initialData, onDataUpdate }) {
    const [data, setData] = useState([]);
    const [newRow, setNewRow] = useState({ name: '', email: '' });
    const [editCell, setEditCell] = useState(null);
    const [addressData, setAddressData] = useState({
        Attention: '',
        countryRegion: 'United States',
        streetAddress: '',
        city: '',
        region: '',
        postalCode: ''
    });
    const [formData, setFormData] = useState({
        sin: '',
        paymentTerms: 'CASH',
        portalLanguage: 'English'
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        if (name === 'description') {
            setRemarksData({
                ...remarksData,
                [name]: value
            });
            onDataUpdate({ remarksData });
        } else {
            setFormData({
                ...formData,
                [name]: newValue
            });
            setAddressData({
                ...addressData,
                [name]: value
            });
            onDataUpdate({ otherDetails: formData, addressData });
        }
    };

    const [remarksData, setRemarksData] = useState({
        description: ''
    })

    const handleDescriptionChange = (e) => {
        const { name, value } = e.target
        setRemarksData({
            ...remarksData,
            [name]: value
        })
        onDataUpdate({ remarksData })
    }

    useEffect(() => {
        setData(initialData || [])
    }, [initialData])

    const handleCellChange = (e, id, field) => {
        const updatedData = data.map((row) => (row.id === id ? { ...row, [field]: e.target.value } : row))
        setData(updatedData);
        if (updatedData) {
            onDataUpdate(updatedData);
        }
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
        onDataUpdate([...data, newRowWithId])
    }

    const handleDeleteRow = (id) => {
        const updatedData = data.filter((row) => row.id !== id)
        setData(updatedData)
        onDataUpdate(updatedData)
    }

    return (
        <Tabs className="container  ">
            <TabList className="flex space-x-2 mb-5">
                {({ tabs }) =>
                    tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            className={`relative px-4 py-2 text-black focus:outline-none cursor-pointer`}
                            style={{ background: tab.isActive ? '#e0e0e0' : 'transparent' }}
                        >
                            {tab.label}
                            {tab.isActive && (
                                <span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                                    aria-hidden="true"
                                ></span>
                            )}
                        </Tab>
                    ))
                }
                <Tab className="relative px-4 py-2 text-black focus:outline-none cursor-pointer">Other Details</Tab>
                <Tab className="relative px-4 py-2 text-black focus:outline-none cursor-pointer">Address</Tab>
                <Tab className="relative px-4 py-2 text-black focus:outline-none cursor-pointer">Contact Persons</Tab>
                <Tab className="relative px-4 py-2 text-black focus:outline-none cursor-pointer">Remarks</Tab>
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
            </TabPanel>
            <TabPanel>
                <div className="p-2">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Billing Address</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Use a permanent address where you can receive mail.
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="Attention"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Attention
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Attention"
                                        id="Attention"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={addressData.Attention}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="Country / Region"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Country / Region
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="Country / Region"
                                        name="countryRegion"
                                        autoComplete="Country / Region-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        value={addressData.countryRegion}
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
                                    htmlFor="street-address"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="streetAddress"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={addressData.streetAddress}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={addressData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={addressData.region}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="postal-code"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postalCode"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={addressData.postalCode}
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
                                                value={row.name}
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
                                                value={row.email}
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
                                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                                    onClick={() => handleEditClick(row.id, 'name')}
                                                >
                                                    E
                                                </button>
                                                <button
                                                    className="px-4 py-2 bg-red-500 text-white rounded ml-2"
                                                    onClick={() => handleDeleteRow(row.id)}
                                                >
                                                    D
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
                                        value={newRow.name}
                                        onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="w-full px-2 py-1 border rounded"
                                        placeholder="Email"
                                        value={newRow.email}
                                        onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
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
                        <label className="block text-sm font-medium text-gray-700">Remarks (For Internal Use)</label>
                        <textarea
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            name="description"
                            rows={4}
                            value={remarksData.description}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    )
}
