import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext";


const Login = () => {
  const { setUserName } = useUserContext();
  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/jwt/create", {
        username: username,
        password: password,
      });

      // Assuming the response contains access and refresh tokens
      console.log(response.data);
      const { access, refresh } = response.data;

      // Store tokens in local storage
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      const userResponse = await axios.get(
        `http://127.0.0.1:8000/get_user_profile/${username}/`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );

      // Store the user's name in the context
      setUserName(userResponse.data.name);
      // startTokenRefresh(refresh);

      // Perform any additional actions after successful login
      // e.g., navigate to the dashboard
      Navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
      // Handle login error
    }
  };
  // const startTokenRefresh = (refreshToken) => {
  //   const tokenRefreshInterval = 5 * 60 * 1000; // 5 minutes in milliseconds
  //   setInterval(async () => {
  //     try {
  //       const newAccessToken = await refreshAccessToken(refreshToken);
  //       localStorage.setItem("access_token", newAccessToken);
  //     } catch (error) {
  //       // Handle token refresh error, e.g., redirect to login if the refresh token is invalid
  //       console.error("Error refreshing access token:", error);
  //       // Redirect to login page or perform other actions based on the error
  //     }
  //   }, tokenRefreshInterval);
  // };
  const hidecomp = () => {
    setHide(!hide);
  };
  var buttonText = hide ? "hide" : "show";

  return (
    <div className="font-mono">
      <h2 className="text-3xl font-bold text-center m-2">LOGIN</h2>
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
              type={hide ? "text" : "password"}
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;











// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/auth/jwt/create", {
//         username: username,
//         password: password,
//       });

//       // Assuming the response contains access and refresh tokens
//       console.log(response.data);
//       const { access, refresh } = response.data;

//       // Store tokens in local storage
//       localStorage.setItem("access_token", access);
//       localStorage.setItem("refresh_token", refresh);

//       // Perform any additional actions after successful login
//       // e.g., navigate to the dashboard
//     } catch (error) {
//       console.error("Error during login:", error);
//       // Handle login error
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
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
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;


