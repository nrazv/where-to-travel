import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Paper } from "@mui/material";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useAppRoutes from "./hooks/routes/useAppRoutes";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Paper className="App" elevation={0}>
        <Routes>{useAppRoutes()}</Routes>
      </Paper>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
