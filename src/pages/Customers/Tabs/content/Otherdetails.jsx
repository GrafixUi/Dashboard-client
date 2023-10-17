import React, { useState } from 'react'

export default function Otherdetails({ onDataUpdate }) {
   
    const [formData, setFormData] = useState({
        sin: '',
        paymentTerms: 'CASH',
        enablePortal: false,
        portalLanguage: 'English'
    })

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
          ...formData,
          [name]: newValue,
        });
    
        onDataUpdate({ otherDetails: formData });
      };

    return (
        <form className="p-2">
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
        </form>
    );
}
