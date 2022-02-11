import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage'
import Cart from './pages/Cart/Cart'
import "./styles/app.sass"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
