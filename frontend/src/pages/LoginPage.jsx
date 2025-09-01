import { useState } from "react";
import { LongButton } from "../components/Buttons";
import { useAuth } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import MeCat from "../components/MeCat";
import Loading from "../components/Loading";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, setLoading, loading, errorMessage } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const success = await login({ email, password });
      if (success) {
        navigate("/blogs");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log(errorMessage);
    }
  };

  return (
    <section className="bg-whiteFA flex flex-col items-center justify-center gap-y-10 w-full h-screen">
      <MeCat />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full max-w-[25vw]">
          <form
            className="flex flex-col w-full gap-y-5"
            onSubmit={handleSubmit}
          >
            <label>
              <input
                className="h-[5vh] bg-white shadow-lg w-full rounded-md px-4"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <input
                className="h-[5vh] bg-white shadow-lg w-full rounded-md px-4"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {errorMessage && (
              <p className="text-red-700 text-center">{errorMessage}</p>
            )}
            <LongButton type="submit" btnName="Login" />
          </form>
          <p className="text-center">
            Don't have an account? Let's{" "}
            <button
              className="underline hover:font-bold hover:text-orange-600"
              onClick={() => navigate("/register")}
            >
              register
            </button>
            !
          </p>
        </div>
      )}
    </section>
  );
}

export default LoginPage;
