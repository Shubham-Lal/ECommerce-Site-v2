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
  UserActivationPage,
  SellerActivationPage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQsPage,
  ProductDetailsPage,
  ProfilePage,
  CheckoutPage,
  PaymentPage,
  SellerSignupPage,
} from "./Routes";
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';
import { loadUser } from './redux/actions/user';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { serverURL } from './server';
import ProtectedRoute from './ProtectedRoute';

function App() {
  // Backend Call at "serverURL/"
  useEffect(() => {
    axios.get(`${serverURL}/`);
  }, []);
  const { loading, isAuthenticated } = useSelector((state) => state.user);
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
              <Route path="/profile" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              } />
              <Route path="/activation/:activationToken" element={<UserActivationPage />} />
              <Route path="/seller/activation/:activationToken" element={<SellerActivationPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:name" element={<ProductDetailsPage />} />
              <Route path="/checkout" element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CheckoutPage />
                </ProtectedRoute>
              } />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQsPage />} />
              <Route path="/seller-signup" element={<SellerSignupPage />} />
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
