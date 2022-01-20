import Header from "./component/Header/Header";
import HomePage from './pages/HomePage'
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
