import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage'
import Cart from './pages/Cart/Cart'
import Payment from './pages/Payment/Payment'
import ConfirmPayment from './pages/ConfirmPayment/ConfirmPayment'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom'
import "./App.sass"

// export function ProtectedRoute() {
//   const role = useSelector(state => state.user.role)
//   return role === 1 ? <Payment /> : <Navigate to="/" />
// }

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirm-payment" element={<ConfirmPayment />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
