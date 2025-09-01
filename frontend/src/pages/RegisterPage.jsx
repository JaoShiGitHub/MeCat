import axios from "axios";
import MeCat from "../components/MeCat";
import BASE_URL from "../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LongButton } from "../components/Buttons";
import { InputFormUA } from "../components/Inputs";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        username,
        email,
        password,
      });

      if (response?.data?.success) {
        setSuccessMessage("Account has been created!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  return (
    <section className="flex flex-col justify-center items-center gap-y-10 h-screen">
      <MeCat />
      {successMessage ? (
        <p className="text-[clamp(1.2rem,2vw,2rem)]">{successMessage}</p>
      ) : (
        <form
          className="flex flex-col items-center w-full max-w-[25vw] gap-y-5"
          onSubmit={handleRegisterSubmit}
        >
          <InputFormUA
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputFormUA
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputFormUA
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className="text-red-700 ">{errorMessage}</p>}
          <LongButton type="submit" btnName="Register" />
          <p>
            Don't have an account? Let's{" "}
            <button
              className="underline hover:font-bold hover:text-orange-600 mt-10"
              onClick={() => navigate("/login")}
            >
              login
            </button>
            !
          </p>
        </form>
      )}
    </section>
  );
}

export default RegisterPage;
