import React, { useState } from 'react'

export default function Address({ onDataUpdate }) {
    const [addressData, setAddressData] = useState({
        Attention: '',
        countryRegion: 'United States',
        streetAddress: '',
        city: '',
        region: '',
        postalCode: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setAddressData({
            ...addressData,
            [name]: value
        })
        onDataUpdate({ addressData })
    }

    return (
        <form className="p-2">
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Billing Address</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="Attention" className="block text-sm font-medium leading-6 text-gray-900">
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
                        <label htmlFor="Country / Region" className="block text-sm font-medium leading-6 text-gray-900">
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
                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
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
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
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
        </form>
    ) 
}
