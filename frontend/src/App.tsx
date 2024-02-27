import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import useAppRoutes from "./hooks/routes/useAppRoutes";
import { indigo,} from "@mui/material/colors";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: indigo
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Paper className="App" elevation={0}>
        <Routes>{useAppRoutes()}</Routes>
      </Paper>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
