import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Home from "./pages/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import BlogSingle from "./components/blog/blog-single-page/BlogSingle";
//import SinglePage from './components/single-page/SinglePage';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path='/singlepage/:id' component={SinglePage} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blogsingle/:id" element={<BlogSingle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
