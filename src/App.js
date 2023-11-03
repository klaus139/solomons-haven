import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';

import './App.css';

function App() {
  return (
    <>
     <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout />}></Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
