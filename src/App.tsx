import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Schulbauwunder from "./pages/Schulbauwunder";
import Schulgruendungswunder from "./pages/Schulgruendungswunder";
import Schulinnovationswunder from "./pages/Schulinnovationswunder";

// Scroll management
const ScrollManager = () => {
  const location = useLocation();
  
  // Store scroll position when leaving home page
  useEffect(() => {
    let lastPathname = location.pathname;
    
    return () => {
      if (lastPathname === '/' && location.pathname !== '/') {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }
      lastPathname = location.pathname;
    };
  }, [location]);

  // Restore scroll position when returning to home page
  useEffect(() => {
    if (location.pathname === '/') {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('scrollPosition');
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/schulbauwunder" element={<Schulbauwunder />} />
        <Route path="/schulgruendungswunder" element={<Schulgruendungswunder />} />
        <Route path="/schulinnovationswunder" element={<Schulinnovationswunder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;