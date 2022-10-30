import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarDetail from './pages/CarDetail';
import Cars from './pages/Cars';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes> */}
      <Register />
    </div>
  );
}

export default App;
