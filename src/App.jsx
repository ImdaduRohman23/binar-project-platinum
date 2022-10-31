import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './HOC/PrivateRoute';
import CarDetail from './pages/CarDetail';
import Cars from './pages/Cars';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cars" element={<PrivateRoute>
          <Cars />
        </PrivateRoute>} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes> */}
      <Payment />
    </div>
  );
}

export default App;
