import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, User } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login process
    navigate("/consent");
  };

  const handleForgotPassword = () => {
    // Handle forgot password
    console.log("Forgot password clicked");
  };

  const handleSignUp = () => {
    // Handle sign up
    console.log("Sign up clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Nau mai, haere mai
          </h1>
          <p className="text-gray-600">Welcome to your health journey</p>
        </div>

        <Card className="p-6">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-10 h-10"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main koru spiral body */}
                <path
                  d="M50 20C33 20 20 33 20 50C20 67 33 80 50 80C62 80 72 70 72 58C72 50 66 44 58 44C53 44 49 48 49 53C49 56 51 58 53 58C54.5 58 55.5 57 55.5 55.5C55.5 54.8 55.2 54.3 54.8 54.3"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Fern fronds extending from the spiral */}
                <path
                  d="M32 30L28 28C24 26 20 28 19 32C18 36 21 37 25 36L29 34C31 33 33 31 32 30Z"
                  fill="white"
                />
                <path
                  d="M27 42L23 40C19 38 15 40 14 44C13 48 16 49 20 48L24 46C26 45 28 43 27 42Z"
                  fill="white"
                />
                <path
                  d="M25 54L21 52C17 50 13 52 12 56C11 60 14 61 18 60L22 58C24 57 26 55 25 54Z"
                  fill="white"
                />
                <path
                  d="M29 66L25 64C21 62 17 64 16 68C15 72 18 73 22 72L26 70C28 69 30 67 29 66Z"
                  fill="white"
                />

                {/* Smaller fronds */}
                <path
                  d="M36 25L33 24C31 23 29 24 28.5 26C28 28 29.5 28.5 31.5 28L34.5 27C35.5 26.5 36.5 25.5 36 25Z"
                  fill="white"
                />
                <path
                  d="M21 36L18 35C16 34 14 35 13.5 37C13 39 14.5 39.5 16.5 39L19.5 38C20.5 37.5 21.5 36.5 21 36Z"
                  fill="white"
                />
                <path
                  d="M19 48L16 47C14 46 12 47 11.5 49C11 51 12.5 51.5 14.5 51L17.5 50C18.5 49.5 19.5 48.5 19 48Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="space-y-4 mb-6">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Button
            onClick={handleLogin}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 mb-4"
          >
            Log In
          </Button>

          <div className="space-y-2 text-center">
            <button
              onClick={handleForgotPassword}
              className="text-sm text-teal-600 hover:text-teal-700 underline"
            >
              Forgot password?
            </button>
            <div className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={handleSignUp}
                className="text-teal-600 hover:text-teal-700 underline font-medium"
              >
                Sign up
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
