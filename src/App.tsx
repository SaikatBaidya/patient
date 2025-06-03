import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSelection from "./pages/LanguageSelection";
import Login from "./pages/Login";
import ConsentWizard from "./pages/ConsentWizard";
import BluetoothPairing from "./pages/BluetoothPairing";
import Dashboard from "./pages/Dashboard";
import SimulationResults from "./pages/SimulationResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LanguageSelection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/consent" element={<ConsentWizard />} />
            <Route path="/pairing" element={<BluetoothPairing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/simulation" element={<SimulationResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
