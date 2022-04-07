import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import './main.css'
import ListUser from './pages/ListUser';
function App() {
  return (
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ListUser />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>

          </Routes>
      </BrowserRouter>      
  );
}
export default App;
