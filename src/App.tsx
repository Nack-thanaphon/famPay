
import "./App.css";
import  Layout  from "./shared/Layout";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    // Your theme customization
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
