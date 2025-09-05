// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LandingPages from "./pages/LandingPages";
import WebDevelopment from "./pages/WebDevelopment";
import ElectronicInvoicing from "./pages/ElectronicInvoicing";
import ApiIntegration from "./pages/ApiIntegration";
import NotFound from "./pages/NotFound";
import BackendTest from "./components/BackendTest";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/landing-pages" element={<LandingPages />} />
                    <Route path="/desarrollo-web" element={<WebDevelopment />} />
                    <Route path="/electronic-invoicing" element={<ElectronicInvoicing />} />
                    <Route path="/integracion-apis" element={<ApiIntegration />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <BackendTest />
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;