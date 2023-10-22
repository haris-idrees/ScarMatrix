import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home></Home>} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
