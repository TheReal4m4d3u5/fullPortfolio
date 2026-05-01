import React from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from 'react-router-dom';
import './styles/styles.css';





function App() {
  return (
    <>
     
        <Header />
   
        <Outlet />
  
        <Footer className="footer" />
 
    </>
  );
}


export default App;