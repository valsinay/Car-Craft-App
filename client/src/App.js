import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer,Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Main />
          <Footer />
        </AuthProvider>

        <ToastContainer
         className="toaster-container"
         position="top-right"
         autoClose={2555}
         transition={Zoom}
         hideProgressBar={true}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         
        />
      </BrowserRouter>
    );
  }
}

export default App;
