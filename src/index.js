import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './Styles/index.css';
import App from './App';
import { AuthProvider } from './Context/AuthContext.jsx';

import { ThemeProvider } from "@mui/material/styles";
import "./Styles/index.css";
import { muiTheme } from "./Styles/muiTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={muiTheme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

