import Home from "./components/home/Home";
import Project from "./components/project/project";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import ErrorPage from "./components/errorPage/errorPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
