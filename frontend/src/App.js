import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  ErrorPage,
  HomePage,
  LoginPage,
  SignupPage,
  ActivationPage
} from "./Routes";
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';

function App() {
  const [remember, setRemember] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("Token"));
  if (remember) localStorage.setItem("Token", token);

  useEffect(() => {
    Store.dispatch(loadUser(token));
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<LoginPage setToken={setToken} remember={remember} setRemember={setRemember} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/activation/:activationToken" element={<ActivationPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
