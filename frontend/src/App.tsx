import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Paper, ThemeProvider, createTheme } from "@mui/material";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { indigo } from "@mui/material/colors";
import { useEffect } from "react";
import { useAuthContext } from "./contexts/AuthProvider";
import { getStoredToken } from "./hooks/localstorage/storage";

const App: React.FC = () => {
  const { auth, setAuth } = useAuthContext();
  const jwtToken = getStoredToken();

  useEffect(() => {
    if (jwtToken && !auth) {
      setAuth(jwtToken);
    }
  }, []);

  const queryClient = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: indigo,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Paper className="App" elevation={0}>
          <Outlet />
        </Paper>
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
