import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import BookAppointment from './BookAppointment';

function App() {
  return (
    <div className="app">
     <Router>
       <Routes>
         <Route element={<Home/>} path="/"/>
          <Route element={<BookAppointment />} path="/book" />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
