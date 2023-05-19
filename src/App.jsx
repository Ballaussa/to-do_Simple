import './App.css'; 
import React ,{ useState } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import STR1 from './toDo/str1'; 
import STR2 from './toDo/str2'; 
import STR3 from './toDo/str3'; 
function App() { 
  return (
    <BrowserRouter>
      <Routes>
      <Route path='' element={<STR1 />}index/>
        <Route path='/str2' element={<STR2 />} />
        <Route path='/str3' element={<STR3 />} />
      </Routes>
    </BrowserRouter> 
  ); 
} 
export default App;