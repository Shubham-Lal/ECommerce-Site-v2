import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage
} from "./Routes";
import axios from 'axios';
import { useEffect } from 'react';
import { server } from './server';

function App() {
  useEffect(() => {
    axios.get(`${server}/user`);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/activation/:activationToken" element={<ActivationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
