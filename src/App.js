import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import Home from './pages/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/contact/Contact';


function App() {
  return (
    <>
     <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout />}>
   <Route index element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path='/gallery' element={<Gallery />} />
   <Route path='/testimonial' element={<Testimonial />} />
   <Route path='/contact' element={<Contact />} />
   </Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
