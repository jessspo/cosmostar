import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import PersonHoroscope from './pages/PersonHoroscope';

function App() {
  return (
   
    <div style={{height: "100vh"}}>
      
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/welcome" element={<Welcome  />}/>
          <Route path="/horoscope" element={<PersonHoroscope  />}/>
        </Routes>
      
    </div>
  );
}

export default App;
