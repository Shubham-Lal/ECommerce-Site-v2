import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
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
  SellerPage,
  SellerSignupPage,
  SellerLoginPage,
} from "./Routes";
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';
import { loadSeller, loadUser } from './redux/actions/user';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { serverURL } from './server';
import ProtectedRoute from './ProtectedRoute';
import SellerProtectedRoute from './SellerProtectedRoute';

function App() {
  // Backend Call at "serverURL/"
  useEffect(() => {
    axios.get(`${serverURL}/`);
  }, []);
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isLoading, isSellerAuthenticated } = useSelector((state) => state.seller);
  const [remember, setRemember] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  if (remember) localStorage.setItem("token", token);
  const [sellerRemember, setSellerRemember] = useState(false);
  const [sellerToken, setSellerToken] = useState(localStorage.getItem("sellerToken"));
  if (sellerRemember) localStorage.setItem("sellerToken", sellerToken);

  useEffect(() => {
    Store.dispatch(loadUser(token));
    Store.dispatch(loadSeller(sellerToken));
  }, [token, sellerToken]);

  return (
    <>
      {loading || isLoading ? null
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
              <Route path="/seller/:id" element={
                <SellerProtectedRoute isSellerAuthenticated={isSellerAuthenticated}>
                  <SellerPage />
                </SellerProtectedRoute>
              } />
              <Route path="/seller-signup" element={<SellerSignupPage />} />
              <Route path="/seller-login" element={<SellerLoginPage setSellerToken={setSellerToken} sellerRemember={sellerRemember} setSellerRemember={setSellerRemember} />} />
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
