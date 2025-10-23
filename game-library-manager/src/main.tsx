import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Library from "./pages/Library.tsx";
import Stats from "./pages/Stats.tsx";
import GameDetails from "./pages/GameDetails.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/main.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
