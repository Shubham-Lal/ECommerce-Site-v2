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
} from "./routes/Routes";
import { SellerDashboardPage, AddProduct } from './routes/SellerRoutes';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store';
import { loadSeller, loadUser } from './redux/actions/user';
import axios from 'axios';
import { serverURL } from './server';
import ProtectedRoute from "./routes/ProtectedRoute";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";

function App() {
  useEffect(() => {
    axios.get(`${serverURL}/`);
  }, []);

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
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user-login" element={<LoginPage setToken={setToken} remember={remember} setRemember={setRemember} />} />
        <Route path="/user-signup" element={<SignupPage />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path="/activation/:activationToken" element={<UserActivationPage />} />
        <Route path="/seller/activation/:activationToken" element={<SellerActivationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        } />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQsPage />} />
        <Route path="/seller/:id" element={
          <SellerProtectedRoute>
            <SellerPage />
          </SellerProtectedRoute>
        } />
        <Route path="/seller-signup" element={<SellerSignupPage />} />
        <Route path="/seller-login" element={<SellerLoginPage setSellerToken={setSellerToken} sellerRemember={sellerRemember} setSellerRemember={setSellerRemember} />} />
        {/* Seller Dashboard */}
        <Route path="/dashboard" element={
          <SellerProtectedRoute>
            <SellerDashboardPage />
          </SellerProtectedRoute>
        } />
        <Route path="/dashboard-add-product" element={
          <SellerProtectedRoute>
            <AddProduct />
          </SellerProtectedRoute>
        } />
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
  );
}

export default App;
