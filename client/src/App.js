import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

toast.configure();

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Main />
          <Footer />

          <ToastContainer
            className="toaster-container"
            position="top-right"
            autoClose={2555}
            transition={Zoom}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
