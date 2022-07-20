import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './pages/Start';

function App() {
  return (
    <div>
     <Router>
          <Routes>
            <Route path="/" element={<Start />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
