import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-amber-950  p-5 w-75 text-hwite">
        <form className="text-white">
          <h1>Login Form</h1>
          <input
            type="text"
            placeholder="Username"
            className="border mt-4 p-1 rounded-md"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            className="border my-4 p-1 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <button
            className="bg-green-700 px-3 py-2 rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
