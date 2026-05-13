import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import DentalAnsweringService from "./pages/solutions/DentalAnsweringService.tsx";
import MedicalSpaSoftware from "./pages/solutions/MedicalSpaSoftware.tsx";
import AutomatedAppointmentReminders from "./pages/solutions/AutomatedAppointmentReminders.tsx";
import AiReceptionistMedicalOffice from "./pages/solutions/AiReceptionistMedicalOffice.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dental-answering-service" element={<DentalAnsweringService />} />
          <Route path="/medical-spa-software" element={<MedicalSpaSoftware />} />
          <Route path="/automated-appointment-reminders" element={<AutomatedAppointmentReminders />} />
          <Route path="/ai-receptionist-for-medical-office" element={<AiReceptionistMedicalOffice />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
