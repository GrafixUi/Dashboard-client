import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';
import Items from './pages/Items/Items';
import AddItem from './pages/Items/Additem';
import Customers from './pages/Customers/Customerslist';
import AddCustomers from './pages/Customers/Addcustomers';
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
                </Route>
            </Routes>
            <ToastContainer autoClose={3000} />
        </Router>
    )
}

export default App;
