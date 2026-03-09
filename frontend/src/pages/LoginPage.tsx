import { useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

export const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const loginValues = {
    email: {
      placeholder: "Email",
      type: "email",
      onChange: setEmail,
      value: email,
    },
    password: {
      placeholder: "Password",
      type: "password",
      onChange: setPassword,
      value: password,
    },
  };
  const handleLogin = useCallback(
    async (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard");
      } catch (_error) {
        setErrorMessage("Invalid email or password");
      }
    },
    [email, password, navigate],
  );

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-emphasized mb-6 text-center">
          Sign In
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {Object.entries(loginValues).map(([key, props]) => (
            <Input
              key={key}
              {...props}
              containerClassName="w-full"
              inputClassName="w-full input-md"
            />
          ))}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
