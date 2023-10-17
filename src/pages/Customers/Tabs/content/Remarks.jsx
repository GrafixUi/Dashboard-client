import React, { useState } from 'react';

function Remarks({ onDataUpdate }) {
  const [remarksData, setRemarksData] = useState({
    description: '',
  });

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setRemarksData({
      ...remarksData,
      [name]: value,
    });
    onDataUpdate({ remarksData });
  };

  return (
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
  );
}

export default Remarks;
