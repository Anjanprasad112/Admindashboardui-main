import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [role_id, setRole_id] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/users/", {
        username: username,
        password: password,
        re_password: re_password,
        email: email,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
    try{
      const response = await axios.post("http://127.0.0.1:8000/system-users/", {
        name: username,
        authToken: password,
        // re_password: re_password,
        // email: email,
        status: status,
        role: role,
        role_id: role_id,
      });
      console.log(response.data);
    }
    catch(error){
      console.error("Error during registration:", error);
    }
    navigate("/");
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
              UserName:
            </label>
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            re_password:
            </label>
            <input
              type={hide?"text":"re_password"}
              value={re_password}
              onChange={(e) => setRePassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
             <input
              onClick={hidecomp}
              type="button"
              value={buttonText}
              className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
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
              Status:
            </label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Role:
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Role ID:
            </label>
            <input
              type="number"
              value={role_id}
              onChange={(e) =>  setRole_id(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const Register = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [re_password, setRePassword] = useState("");

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/auth/users/", {
//         username: username,
//         password: password,
//         re_password: re_password,
//       });
//       console.log(response.data);
//       navigate("/login");
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <input
//         type="password"
//         value={re_password}
//         onChange={(e) => setRePassword(e.target.value)}
//         placeholder="Re-enter Password"
//       />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;
