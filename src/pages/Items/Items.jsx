import React, { useState, useEffect } from 'react'
import EditItems from './Edititems'
import Modal from '../../components/modal'
import { connect } from 'react-redux'
import { deleteItem, fetchItems } from '../../Redux/actions/Items/items'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <div className="flex flex-row items-center gap-x-6">
                <strong className="text-gray-700 font-medium gap-x-6">All items</strong>
            </div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="w-full text-gray-700">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>$ {item.sellingprice}</td>

                                <td>
                                    <div className="flex items-center justify-end gap-x-6">
                                        <button
                                            type="submit"
                                            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                                            onClick={() => {
                                                setEditingitems(item)
                                                setIsModalOpen(true)
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
                                            onClick={() => {
                                                handleDeleteItem(item.item_id);
                                            }}
                                        >
                                            Delete
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
