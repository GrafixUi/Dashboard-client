import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Custlistbox({ customers, fetchCustomers }) {
    const [selected, setSelected] = useState(null); // Initialize selected as null

    useEffect(() => {
        fetchCustomers();
    }, [fetchCustomers]);

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="relative ">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <div>
                                {selected ? (
                                    <span className="flex items-center">
                                        <span className="ml-3 block truncate">
                                            {selected.firstName} {selected.lastName}
                                        </span>
                                    </span>
                                ) : (
                                    <span>Select a customer</span>
                                )}
                            </div>

                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                    />
                                </svg>
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {customers.map((customer) => (
                                    <Listbox.Option
                                        key={customer.id}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'bg-green-600 text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={customer}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            selected ? 'font-semibold' : 'font-normal',
                                                            'ml-3 block truncate'
                                                        )}
                                                    >
                                                        {customer.firstName} {customer.lastName}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M4.5 12.75l6 6 9-13.5"
                                                            />
                                                        </svg>
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                                <div className="text-center mt-3 mb-2">
                                    <Link to="/addcustomer">
                                        <button
                                            type="submit"
                                            className="rounded-md px-3 py-2 text-xs font-medium text-white shadow-sm bg-green-600"
                                        >
                                            <h1>Add Customer</h1>
                                        </button>
                                    </Link>
                                </div>
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}

const mapStateToProps = (state) => ({
    customers: state.customers.customers,
    loading: state.customers.loading,
    error: state.customers.error
})

const mapDispatchToProps = {
    fetchCustomers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Custlistbox)
