import React, { useState ,useEffect } from 'react'

function Contactperson({ initialData , onDataUpdate}) {
    const [data, setData] = useState(initialData || []);
    const [newRow, setNewRow] = useState({ name: '', email: '' })
    const [editCell, setEditCell] = useState(null)

    useEffect(() => {
      setData(initialData || []);
    }, [initialData]);

    const handleCellChange = (e, id, field) => {
      const updatedData = data.map((row) =>
        row.id === id ? { ...row, [field]: e.target.value } : row
      );
      setData(updatedData);
      onDataUpdate(updatedData);
    };
  
    const handleEditClick = (id, field) => {
      setEditCell({ id, field });
    };
  
    const handleSaveClick = () => {
      setEditCell(null);
    };
  
    const handleAddRow = () => {
      const newRowWithId = { ...newRow, id: data.length + 1 };
      setData([...data, newRowWithId]);
      setNewRow({ name: '', email: '' });
      onDataUpdate([...data, newRowWithId]);
    };
  
    const handleDeleteRow = (id) => {
      const updatedData = data.filter((row) => row.id !== id);
      setData(updatedData);
      onDataUpdate(updatedData);
    };

    return (
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
    )
}

export default Contactperson;
