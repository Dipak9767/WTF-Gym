
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import SingleGym from './Pages/SingleGym';
import { GymContext } from './Context';
import { useState } from 'react';

function App() {
  const [gymInfo, setGymInfo] = useState(null)
  const [terms , setTerms] = useState(null)
  return (
    <GymContext.Provider value={{gymInfo , setGymInfo ,terms , setTerms}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gym' element={<SingleGym />} />
        </Routes>
      </BrowserRouter>
    </GymContext.Provider>
  );
}

export default App;
