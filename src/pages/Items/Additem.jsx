import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Additems() {
    const initialFormData = {
        name: '',
        sellingprice: '',
        description: ''
    }
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name?.trim() || !formData.sellingprice?.trim() || !formData.description?.trim()) {
            alert('Please fill out all required fields.')
            return
        }
        try {
            const response = await axios.post('https://dashboard-server-j55a.onrender.com/api/items', formData)
            console.log('Item added successfully:', response.data)
            setFormData(initialFormData);
            toast.success('Item has been Added successfully');
            navigate('/items');
        } catch (error) {
            console.error('Error adding customer:', error)
        }
    }

    return (
        <div>
            <div className="container mx-auto max-w-md mt-4">
                <h1 className="text-center text-2xl font-semibold mb-4">New Item</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <h2 className="text-lg text-gray-600 font-medium mt-2 mb-3">Primary Contact</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">Name:</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Selling Price</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">$</span>
                            <input
                                type="number"
                                className="pl-8 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                name="sellingprice"
                                value={formData.sellingprice}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            name="description"
                            rows={4}
                            value={formData.description}
                            onChange={handleInputChange}
                        />
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
            </div>
        </div>
    )
}
