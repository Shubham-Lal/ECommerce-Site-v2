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

function App() {
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
