import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your main component is named 'App'
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(<App />);
