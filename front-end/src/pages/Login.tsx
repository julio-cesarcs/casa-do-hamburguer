import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img
            src="./logo.png"
            alt="Logo da Casa do Hamburguer"
            className="mb-4"
          />
        </Link>
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full cursor-pointer rounded-md bg-[#c92A03] py-2 text-sm font-bold text-white">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
