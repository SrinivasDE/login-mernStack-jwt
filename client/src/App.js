import React, { createContext, useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './models/NavBar';
import Login from './screens/Login';
import MyProfile from './screens/MyProfile';
import Register from './screens/Register';

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/myprofile' element={<MyProfile/>} />
        </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App;
