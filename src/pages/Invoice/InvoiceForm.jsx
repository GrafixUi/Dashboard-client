import React, { useState } from 'react'
import { uid } from 'uid'
import InvoiceItem from './InvoiceItem'
import InvoiceModal from './InvoiceModal'
import incrementString from './helpers/incrementString'
import Custlistbox from './components/Custlistbox'

const date = new Date()
const today = date.toLocaleDateString('en-GB', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
})

const InvoiceForm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [discount, setDiscount] = useState('')
    const [tax, setTax] = useState('')
    const [invoiceNumber, setInvoiceNumber] = useState(1)
    const [customerName, setCustomerName] = useState('')
    const [items, setItems] = useState([
        {
            id: uid(6),
            name: '',
            qty: 1,
            rate: '1.00'
        }
    ])

    const reviewInvoiceHandler = (event) => {
        event.preventDefault()
        setIsOpen(true)
    }

    const addNextInvoiceHandler = () => {
        setInvoiceNumber((prevNumber) => incrementString(prevNumber))
        setItems([
            {
                id: uid(6),
                name: '',
                qty: 1,
                rate: '1.00'
            }
        ])
    }

    const addItemHandler = () => {
        const id = uid(6)
        setItems((prevItem) => [
            ...prevItem,
            {
                id: id,
                name: '',
                qty: 1,
                rate: '1.00'
            }
        ])
    }

    const deleteItemHandler = (id) => {
        setItems((prevItem) => prevItem.filter((item) => item.id !== id))
    }

    const edtiItemHandler = (event) => {
        const editedItem = {
            id: event.target.id,
            name: event.target.name,
            value: event.target.value
        }

        const newItems = items.map((items) => {
            for (const key in items) {
                if (key === editedItem.name && items.id === editedItem.id) {
                    items[key] = editedItem.value
                }
            }
            return items
        })

        setItems(newItems)
    }

    const subtotal = items.reduce((prev, curr) => {
        if (curr.name.trim().length > 0) return prev + Number(curr.rate * Math.floor(curr.qty))
        else return prev
    }, 0)
    const taxRate = (tax * subtotal) / 100
    const discountRate = (discount * subtotal) / 100
    const total = subtotal - discountRate + taxRate

    return (
        <form className="relative flex flex-col px-2  md:flex-row" onSubmit={reviewInvoiceHandler}>
            <div className="my-6 flex-1 space-y-2 text-xs  rounded-md bg-white p-4 shadow-sm sm:space-y-4 md:p-6">
                <div className="flex flex-col justify-between space-y-2 border-b border-gray-900/10 pb-4 md:flex-row md:items-center md:space-y-0">
                    <div className="flex space-x-2">
                        <span className="font-medium text-green-500">Invoice Date </span>
                        <span>{today}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="font-medium text-green-500" htmlFor="invoiceNumber">
                            Invoice # :
                        </label>
                        <input
                            required
                            className="max-w-[130px] p-1 px-2 bg-slate-50 border rounded-md"
                            type="number"
                            name="invoiceNumber"
                            id="invoiceNumber"
                            min="1"
                            step="1"
                            value={invoiceNumber}
                            onChange={(event) => setInvoiceNumber(event.target.value)}
                        />
                    </div>
                </div>
                <h1 className="text-center text-lg font-bold">NEW INVOICE</h1>
                <div className="flex flex-col gap-2 pt-4 pb-8 p-4 bg-slate-100 rounded-lg">
                    <div className="flex flex-row p-1">
                        <label htmlFor="customername" className="text-sm mt-2 text-red-500 font-medium ">
                            Customer Name *
                        </label>
                        <div className="ml-2 w-1/2 ">
                            <Custlistbox />
                        </div>
                    </div>
                    <div className="p-2">
                        <h3 className="font-medium">Billing Address </h3>
                    </div>
                </div>
                <div></div>
                <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <div className="px-1  flex sm:gap-4 sm:px-0">
                        <h2 className="text-sm font-medium leading-6 text-gray-900 ">Terms</h2>
                        <select className="text-sm leading-6 bg-slate-100 rounded p-1 w-full text-gray-700 sm:col-span-2 sm:mt-0">
                            <option value="DueonReceipt">Due on Receipt</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <label className="font-medium " htmlFor="duedate">
                            Due Date :
                        </label>
                        <input
                            required
                            className="max-w-[130px] p-1 px-2 bg-slate-50 border rounded-md"
                            type="date"
                            name="duedate"
                            id="duedate"
                        />
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <label className="font-medium " htmlFor="duedate">
                        Subject :
                    </label>

                    <textarea className="p-2 border bg-slate-50 rounded" name="" id="" cols="50" rows="1"></textarea>
                </div>
                <table className="w-full p-2 text-left">
                    <thead>
                        <tr className="border-b border-gray-900/10 text-sm ">
                            <th>ITEM DETAILS</th>
                            <th className="text-left">QUANTITY</th>
                            <th className="text-left">RATE</th>
                            <th className="text-left">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <InvoiceItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                qty={item.qty}
                                rate={item.rate}
                                onDeleteItem={deleteItemHandler}
                                onEdtiItem={edtiItemHandler}
                            />
                        ))}
                    </tbody>
                </table>
                <button
                    className="rounded-md bg-green-500 px-4 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
                    type="button"
                    onClick={addItemHandler}
                >
                    Add Item
                </button>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col w-96 ">
                        <label className="font-medium " htmlFor="invoiceNumber">
                            Customer Notes :
                        </label>
                        <textarea
                            className="p-2 mt-3 border bg-slate-50 rounded"
                            name=""
                            id=""
                            cols="10"
                            rows="3"
                            placeholder="Thanks for your business"
                        ></textarea>
                    </div>
                    <div className="flex flex-col items-end space-y-2 pt-6">
                        <div className="flex w-full justify-between md:w-1/2">
                            <span className="font-bold">Subtotal:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex w-full justify-between md:w-1/2">
                            <span className="font-bold">Discount:</span>
                            <span>
                                ({discount || '0'}%)${discountRate.toFixed(2)}
                            </span>
                        </div>
                        <div className="flex w-full justify-between md:w-1/2">
                            <span className="font-bold">Tax:</span>
                            <span>
                                ({tax || '0'}%)${taxRate.toFixed(2)}
                            </span>
                        </div>
                        <div className="flex w-full justify-between border-t border-gray-900/10 pt-2 md:w-1/2">
                            <span className="font-bold">Total:</span>
                            <span className="font-bold">${total % 1 === 0 ? total : total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-100 p-4'>
                    <div className="flex flex-col w-96 ">
                        <label className="font-medium " htmlFor="invoiceNumber">
                            Customer Notes :
                        </label>
                        <textarea
                            className="p-2 mt-3 border bg-slate-50 rounded"
                            name=""
                            id=""
                            cols="10"
                            rows="3"
                            placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="basis-1/4 bg-transparent">
                <div className="sticky top-0 z-10 space-y-4 divide-y divide-gray-900/10 pb-8 md:pt-6 md:pl-4">
                    <button
                        className="w-full rounded-md bg-green-500 py-2 text-sm text-white shadow-sm hover:bg-green-600"
                        type="submit"
                    >
                        Save and Send Invoice
                    </button>

                    <InvoiceModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        invoiceInfo={{
                            invoiceNumber,
                            customerName,
                            subtotal,
                            taxRate,
                            discountRate,
                            total
                        }}
                        items={items}
                        onAddNextInvoice={addNextInvoiceHandler}
                    />
                    <div className="space-y-4 py-2">
                        {/* <div className="space-y-2">
                            <label className="text-sm font-bold md:text-base" htmlFor="tax">
                                Tax rate:
                            </label>
                            <div className="flex items-center">
                                <input
                                    className="w-full rounded-r-none p-2 bg-white shadow-sm"
                                    type="number"
                                    name="tax"
                                    id="tax"
                                    min="0.01"
                                    step="0.01"
                                    placeholder="0.0"
                                    value={tax}
                                    onChange={(event) => setTax(event.target.value)}
                                />
                                <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">%</span>
                            </div>
                        </div> */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium " htmlFor="discount">
                                Discount rate:
                            </label>
                            <div className="flex items-center">
                                <input
                                    className="w-full rounded-r-none bg-slate-50 p-2  shadow-sm"
                                    type="number"
                                    name="discount"
                                    id="discount"
                                    min="0"
                                    step="0.01"
                                    placeholder="0.0"
                                    value={discount}
                                    onChange={(event) => setDiscount(event.target.value)}
                                />
                                <span className="rounded-r-md bg-gray-200 py-2 px-4 text-gray-500 shadow-sm">%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default InvoiceForm
