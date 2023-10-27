import React from 'react'
import InvoiceField from './InvoiceField'

const InvoiceItem = ({ id, name, qty, rate, onDeleteItem, onEdtiItem }) => {
    const deleteItemHandler = () => {
        onDeleteItem(id)
    }

    return (
        <tr>
            <td className="">
                
                <div class=" ">
                    <p class="mb-2 ">Item</p>
                    <select class="form-select item-details mb-3" cellData={{
                        placeholder: 'Item name',
                        type: 'text',
                        name: 'name',
                        id: id,
                        value: name
                    }}>
                        <option selected disabled>
                            Select Item
                        </option>
                        <option value="App Design">App Design</option>
                        <option value="App Customization">App Customization</option>
                        <option value="ABC Template">ABC Template</option>
                        <option value="App Development">App Development</option>
                    </select>
                    <textarea class="form-control p-2" rows="2" placeholder="Item Information"></textarea>
                </div>
            </td>
            <td className="">
                <InvoiceField
                    onEditItem={(event) => onEdtiItem(event)}
                    cellData={{
                        type: 'number',
                        min: '1',
                        name: 'qty',
                        id: id,
                        value: qty
                    }}
                />
            </td>
            <td className="relative w-[10px] ">
                <InvoiceField
                    onEditItem={(event) => onEdtiItem(event)}
                    cellData={{
                        className: 'text-right ',
                        type: 'number',
                        min: '0.01',
                        step: '0.01',
                        name: 'rate',
                        id: id,
                        value: rate
                    }}
                />
            </td>
            <td className="pl-5 items-center justify-center">
                <button
                    className="rounded-md bg-red-500 p-2 text-white shadow-sm transition-colors duration-200 hover:bg-red-600"
                    onClick={deleteItemHandler}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default InvoiceItem;
