import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";

import AppRoutes from './routes';


export default function App() {
  return (
    <Router>
     <AppRoutes/>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);