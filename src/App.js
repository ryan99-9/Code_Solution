// import { Dashboard } from '@mui/icons-material';
import React from 'react'
import {Route,Routes} from 'react-router-dom'


//Pages
import Login from './pages/login/login';
import Detail from './pages/detail posting/detail';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/detail profile/profile';

class App extends React.Component{
render(){
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </div>
  )
}
}

export default App;
