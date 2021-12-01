import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import Contacts from './components/Contacts/Contacts'
import About from './components/About/About'
import CreateCar from './components/Car/CreateCar';
import Main from './components/Main/Main'
import { AuthProvider } from './components/Context/AuthContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css'


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
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
          toastClassName='toast-container'
        />
      </BrowserRouter>

    );
  }
}

export default App;