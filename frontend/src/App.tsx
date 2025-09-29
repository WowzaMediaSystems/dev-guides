import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ObjectDetectionPage from "./pages/ObjectDetection";
import VideoTranscriptPage from "./pages/VideoTranscript";
import NotFound from "./pages/NotFound";
import LiveStreamPage from "./pages/LiveStream";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LiveStreamPage />} />
          <Route path="/livestream" element={<LiveStreamPage />} />
          <Route path="/transcription" element={<VideoTranscriptPage />} />
          <Route path="/object-detection" element={<ObjectDetectionPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
