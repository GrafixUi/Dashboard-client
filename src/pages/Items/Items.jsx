import React, { useState, useEffect } from 'react';
import EditItems from './Edititems';
import Modal from '../../components/modal';
import { connect } from 'react-redux';
import { deleteItem, fetchItems } from '../../Redux/actions/Items/items';
import 'react-toastify/dist/ReactToastify.css';
import { FiEdit2, FiX , FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Items({ items, fetchItems, deleteItem }) {
    const [editingitems, setEditingitems] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchItems()
    }, [fetchItems])

    const handleDeleteItem = (item_Id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
          deleteItem(item_Id);
        }
      };

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm  flex-1">
            <div className="flex flex-row items-center gap-x-6 justify-between">
                <h2 className="text-gray-700 font-medium gap-x-6">All items</h2>
                <div>
                    <Link to="/additem">
                    <button
                        type="submit"
                        className="rounded-md  flex flex-row px-3 py-2 text-sm font-semibold text-white shadow-sm bg-green-600"
                    >
                        <FiPlus className='text-white ' width={60} /> <h1>New</h1>
                    </button></Link>
                    
                </div>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th className='text-sm font-medium'>Name</th>
                            <th className='text-sm font-medium'>Description</th>
                            <th className='text-sm font-medium'>Rate</th>
                            <th className='text-sm font-medium'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>$ {item.sellingprice}</td>
                                
                                <td>
                                    <div className="flex items-center gap-x-3">
                                        <button
                                            type="submit"
                                            className="rounded-md px-2 py-2 font-semibold text-green-600 shadow-sm"
                                            onClick={() => {
                                                setEditingitems(item)
                                                setIsModalOpen(true)
                                            }}
                                        >
                                           <FiEdit2 width={50} />
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md  px-2 py-2 font-semibold text-red-600 shadow-sm shadow-lime-500"
                                            onClick={() => {
                                                handleDeleteItem(item.item_id);
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
                    {editingitems && <EditItems item_Id={editingitems} onSave={() => setIsModalOpen(false)} />}
                </Modal>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items.items,
    loading: state.items.loading,
    error: state.items.error
})

const mapDispatchToProps = {
    fetchItems,
    deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
