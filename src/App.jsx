import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';
import Items from './pages/Items/Items';
import AddItem from './pages/Items/Additem';
import Customers from './pages/Customers/Customerslist';
import AddCustomers from './pages/Customers/Addcustomers';
import Invoice from './pages/invoice/invoice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="items" >
                        <Route index element={<Items />} /> 
                        <Route path="additems" element={<AddItem />} />
                    </Route>
                    <Route path="customers" >
                        <Route index element={<Customers />} /> 
                        <Route path="addcustomers" element={<AddCustomers />} />
                    </Route>
                    <Route path="addcustomer" element={<AddCustomers />} />
                    <Route path="additem" element={<AddItem />} />
                    <Route path="invoice" element={<Invoice />} />
                </Route>
            </Routes>
            <ToastContainer autoClose={5000} />
        </Router>
    )
}

export default App;
