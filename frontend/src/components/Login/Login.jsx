import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from '../../server';
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${server}/user/auth`, {
      email, password,
    }, { withCredentials: remember ? true : false })
      .then((res) => {
        setToken(res.data.token);
        toast.success("Login Success!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold font-Poppins text-gray-900">
          Login to your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md font-Roboto">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>

            {/* EMAIL INPUT FIELD */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <div className="mt-1">
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            {/* PASSWORD INPUT FIELD */}
            <div>
              <label htmlFor="email" className="block text-sm select-none font-medium text-gray-700">
                Your Password
              </label>
              <div className="mt-1 relative">
                <input
                  className="appearance-none block w-full px-3 py-2 select-none border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type={`${visible ? "text" : "password"}`}
                  name="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                {visible
                  ? <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                  : <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                }
              </div>
            </div>
            {/* USER OPTIONS */}
            <div className={`${styles.normalFlex} justify-between`}>
              <div className={`${styles.normalFlex}`}>
                <input
                  className="text-blue-600 focus:ring-blue-500 border-gray-300 w-4 h-4 rounded"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  onChange={() => setRemember(prev => !prev)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="/forgot" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
            {/* LOGIN BUTTON */}
            <div>
              <button
                type="submit"
                className={`group cursor-${loading ? "not-allowed" : "pointer"} relative w-full h-40px flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${loading ? "bg-gray-400" : "bg-blue-600"} hover:${loading ? "bg-gray-500" : "bg-blue-700"}`}
              >
                {loading ? "Verifying..." : "LOGIN"}
              </button>
            </div>
            {/* NEW USER */}
            <div className={`${styles.normalFlex} w-full`}>
              <h4>
                New here?
              </h4>
              <Link to="/signup" className="text-blue-600 pl-2">
                Create an account
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login