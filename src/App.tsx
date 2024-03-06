import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import { Layout } from "./shared/Layout";
import { ThemeProvider, createTheme } from "@mui/material";
import ExpenseDonutChart from "./components/ExpenseDonutChart";
import TransactionsChart from "./components/TransactionsChart";

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
