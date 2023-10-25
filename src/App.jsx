import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Items from './pages/Items/Items'
import AddItem from './pages/Items/Additem'
import Customers from './pages/Customers/Customerslist'
import AddCustomers from './pages/Customers/Addcustomers'
import Invoice from './pages/Invoice/Invoicelist';
import Addinvoice from './pages/Invoice/InvoiceForm';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './components/Auth/login'

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="items" element={<Items />} />
                    <Route path="customers" element={<Customers />} />
                    <Route path="addcustomer" element={<AddCustomers />} />
                    <Route path="additem" element={<AddItem />} />
                    <Route path="invoice" element={<Invoice />} />
                    <Route path="addinvoice" element={<Addinvoice />} />
                </Route>
            </Routes>
            <ToastContainer autoClose={5000} />
        </Router>
    )
}

export default App;
