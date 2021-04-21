import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
