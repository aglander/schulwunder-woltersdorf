
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Schulgruendungswunder from "./pages/Schulgruendungswunder";
import Schulbauwunder from "./pages/Schulbauwunder";
import Schulinnovationswunder from "./pages/Schulinnovationswunder";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import Donation from "./pages/Donation";
import Visitenkarte from "./pages/Visitenkarte";
import VisitenkarteSG from "./pages/VisitenkarteSG";
import VisitenkarteSB from "./pages/VisitenkarteSB";
import VisitenkarteSI from "./pages/VisitenkarteSI";

const ScrollManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    let lastPathname = location.pathname;
    
    return () => {
      if (lastPathname === '/') {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/') {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
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
        <Route path="/spenden" element={<Donation />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/visitenkarte" element={<Visitenkarte />} />
        <Route path="/visitenkarte-sg" element={<VisitenkarteSG />} />
        <Route path="/visitenkarte-sb" element={<VisitenkarteSB />} />
        <Route path="/visitenkarte-si" element={<VisitenkarteSI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
