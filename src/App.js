import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage'
import "./styles/app.sass"

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
