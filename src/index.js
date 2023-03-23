import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import NotFound from "./pages/notFound";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />}/>
      <Route exact  path="/login" element={<Login />} />
       
   
  
          <Route path="*" element={<NotFound />} />
   
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);