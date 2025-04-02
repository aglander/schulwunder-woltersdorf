import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageViews } from "@piwikpro/react-piwik-pro";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Schulbauwunder from "./pages/Schulbauwunder";
import Schulgruendungswunder from "./pages/Schulgruendungswunder";
import Schulinnovationswunder from "./pages/Schulinnovationswunder";
import Donation from "./pages/Donation";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Kontakt from "./pages/Kontakt";
import JohannesWilk from "./pages/team/JohannesWilk";
import CatherineGrote from "./pages/team/CatherineGrote";
import PhilipPreuss from "./pages/team/PhilipPreuss";
import JohannSchindler from "./pages/team/JohannSchindler";
import LudwigGoelling from "./pages/team/LudwigGoelling";
import TimFronzek from "./pages/team/TimFronzek";

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    PageViews.trackPageView();

    const lastPathname = location.pathname;

    return () => {
      if (lastPathname === "/") {
        sessionStorage.setItem("scrollPosition", window.scrollY.toString());
      }
    };
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/") {
      const savedPosition = sessionStorage.getItem("scrollPosition");
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
        <Route
          path="/schulgruendungswunder"
          element={<Schulgruendungswunder />}
        />
        <Route
          path="/schulinnovationswunder"
          element={<Schulinnovationswunder />}
        />
        <Route path="/spenden" element={<Donation />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/team/JohannesWilk" element={<JohannesWilk />} />
        <Route path="/team/CatherineGrote" element={<CatherineGrote />} />
        <Route path="/team/PhilipPreuss" element={<PhilipPreuss />} />
        <Route path="/team/JohannSchindler" element={<JohannSchindler />} />
        <Route path="/team/LudwigGoelling" element={<LudwigGoelling />} />
        <Route path="/team/TimFronzek" element={<TimFronzek />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
