import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Schulbauwunder from "./pages/Schulbauwunder";
import Schulgruendungswunder from "./pages/Schulgruendungswunder";
import Schulinnovationswunder from "./pages/Schulinnovationswunder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
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