import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage'
import Cart from './pages/Cart/Cart'
import Payment from './pages/Payment/Payment'
import ConfirmPayment from './pages/ConfirmPayment/ConfirmPayment'
import "./styles/app.sass"
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'

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
        </Routes>
      </main>
    </div>
  );
}

export default App;
