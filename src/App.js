import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginPath from './pages/LoginPath';
import LoginBack from './pages/LoginBack'

function App() {
  return (
   
    <div style={{height: "100vh"}}>
      <Router>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          {/* <Route path="/loginback" element={<LoginBack />}/> */}
          <Route path="/loginpath" element={<LoginPath />}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
