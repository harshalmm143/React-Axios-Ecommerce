import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import MyCart from './Components/MyCart';
import AllOrder from './AllOrder';

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/allorders" element={<AllOrder />} />
        </Routes>
      </Router>
      {/* <MyNavbar /> */}

    </div>


  );
}

export default App;
