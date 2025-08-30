import { useState } from "react";
import { LongButton } from "../components/Buttons";
import { useAuth } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, setLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login({ email, password });
      navigate("/blogs");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-whiteFA flex flex-col items-center justify-center gap-y-10 w-full h-screen">
      <div className="flex items-center gap-4">
        <img
          className="h-[70px] "
          alt="Cat is holding a pencil"
          src="/images/cat-pencil.png"
        />
        <span className="text-meCat font-lifeSavers font-semibold text-[clamp(14px,7vh,120px)]">
          MeCat
        </span>
      </div>
      <form
        className="flex flex-col w-full max-w-[25vw] gap-y-5"
        onSubmit={handleSubmit}
      >
        <label>
          <input
            className="h-[5vh] bg-white shadow-lg w-full rounded-md px-4"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            className="h-[5vh] bg-white shadow-lg w-full rounded-md px-4 mb-4"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <LongButton type="submit" btnName="Login" />
      </form>
      <p>
        Don't have an account? Let's{" "}
        <button
          className="underline hover:font-bold hover:text-orange-600"
          onClick={() => navigate("/register")}
        >
          register
        </button>
        !
      </p>
    </section>
  );
}

export default LoginPage;
