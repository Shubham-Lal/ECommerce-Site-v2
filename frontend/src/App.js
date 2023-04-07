import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  LoginPage,
  SignupPage
} from "./Routes";
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
