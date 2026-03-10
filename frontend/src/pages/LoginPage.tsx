import { useCallback, useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
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

  const handleGoogleLogin = useCallback(async () => {
    try {
      setErrorMessage("");
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Failed to sign in with Google");
    }
  }, [navigate]);

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

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="google-auth-button"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};
