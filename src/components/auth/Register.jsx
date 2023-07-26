import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
    const [hide, setHide] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        email,
        password,
      });
      console.log(response.data);
      alert('Registered successfully');
      navigate('/login')
    } catch (error) {
      console.error("Registration failed:", error);
      alert('Registration failed, User already exists');
    }
  };
  const hidecomp = () => {
    setHide(!hide);
  };
  var buttonText = hide ? "hide" : "show";

  return (
    <div className="font-mono">
      <h2 className="text-3xl font-bold text-center m-2">REGISTER</h2>
      <div className="w-full max-w-xs h-full mx-auto m-2">
        <form
          onSubmit={handleSubmit}
          className="bg-stone-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type={hide?"text":"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
             <input
              onClick={hidecomp}
              type="button"
              value={buttonText}
              className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
