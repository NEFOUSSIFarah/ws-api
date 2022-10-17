import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error"
import PrivateRoute from './Routes/PrivateRoute';
import Login from './Pages/Login';
import Admin from './Pages/Admin';


function App() {
const [isAuth, setIsAuth] = useState(true);

  return (
    <div className="App">
      <NavBar/>
      <h1>Workshop API</h1>
      <Routes>
          <Route path='/' element={ <Home/> }  />
          <Route path='/users' element={ <Users/> }  />
          <Route path='/user/:id' element={ <Profile/> }  />
             <Route path='/admin' element={ <PrivateRoute isAuth={isAuth} />}>
                <Route path='/admin' element={ <Admin/> }  />
             </Route>
          <Route path='/login' element={ <Login/> }  /> 
          <Route path='/*' element={ <Error/> }  />
      </Routes>
    </div>
  );
}

export default App;
