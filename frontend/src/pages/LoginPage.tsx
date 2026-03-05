import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

export const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    //todo: add better typing for event
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (_error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        placeholder="Email"
        value={email}
        onChange={setEmail}
        type="email"
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={setPassword}
        type="password"
      />
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Login</button>
    </form>
  );
};
