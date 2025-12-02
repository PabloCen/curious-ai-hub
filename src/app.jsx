import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CoursesPage from "./pages/CoursesPage";
import CourseDetail from './pages/CourseDetail';
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Curious AI Hub - Descubre el Futuro de la IA</title>
        <meta
          name="description"
          content="Noticias, herramientas y curiosidades de IA explicadas fácil, en un solo lugar."
        />s
        <meta
          name="keywords"
          content="inteligencia artificial, ia, herramientas de ia, curiosidades, cursos de ia"
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CoursesPage />} /> 
        <Route path="/courses/:id" element={<CourseDetail />} />
       <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetail />} />

      </Routes>
    </Router>
  );


}


export default App;
