import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import CustomCursor from "./components/ui/CustomCursor";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ToolsPage from "./pages/ToolsPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetail from './pages/CourseDetail';
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";

function AppContent() {
  const location = useLocation();
  // Custom Cursor should only appear on Home (/), Login (/login), Register (/register)
  const showCursor = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <>
      <Helmet>
        <title>Curious AI Hub - Descubre el Futuro de la IA</title>
        <meta
          name="description"
          content="Noticias, herramientas y curiosidades de IA explicadas fácil, en un solo lugar."
        />
        <meta
          name="keywords"
          content="inteligencia artificial, ia, herramientas de ia, curiosidades, cursos de ia"
        />
      </Helmet>

      {showCursor && <CustomCursor />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/courses" element={<CoursesPage />} /> 
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetail />} />

        {/* Example of protected route (Dashboard not yet implemented but structure is ready) */}
        {/* <Route element={<ProtectedRoute />}>
             <Route path="/dashboard" element={<Dashboard />} />
           </Route>
        */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}


export default App;
