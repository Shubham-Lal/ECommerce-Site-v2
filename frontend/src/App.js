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
  ActivationPage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQsPage,
} from "./Routes";
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { serverAPI } from './server';

function App() {
  axios.get(`${serverAPI}/user`); // Backend Call at "serverAPI/api/v2/user"
  const { loading } = useSelector((state) => state.user);
  const [remember, setRemember] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  if (remember) localStorage.setItem("token", token);

  useEffect(() => {
    Store.dispatch(loadUser(token));
  }, [token]);

  return (
    <>
      {loading ? null
        : (
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/user-login" element={<LoginPage setToken={setToken} remember={remember} setRemember={setRemember} />} />
              <Route path="/user-signup" element={<SignupPage />} />
              <Route path="/activation/:activationToken" element={<ActivationPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQsPage />} />
            </Routes>
            <ToastContainer
              position="bottom-center"
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
        )}
    </>
  );
}

export default App;
