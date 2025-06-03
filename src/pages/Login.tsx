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
                {/* Main koru spiral */}
                <path
                  d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C65 85 78 72 78 57C78 47 71 40 62 40C56 40 52 44 52 50C52 54 54 57 57 57C59 57 60 56 60 54C60 53 59.5 52.5 59 52.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Fern fronds extending from left side */}
                <path
                  d="M30 30C25 25 20 26 18 30C16 34 18 36 22 35C26 34 28 32 30 30Z"
                  fill="white"
                />
                <path
                  d="M25 40C20 35 15 36 13 40C11 44 13 46 17 45C21 44 23 42 25 40Z"
                  fill="white"
                />
                <path
                  d="M22 50C17 45 12 46 10 50C8 54 10 56 14 55C18 54 20 52 22 50Z"
                  fill="white"
                />
                <path
                  d="M25 60C20 55 15 56 13 60C11 64 13 66 17 65C21 64 23 62 25 60Z"
                  fill="white"
                />
                <path
                  d="M30 70C25 65 20 66 18 70C16 74 18 76 22 75C26 74 28 72 30 70Z"
                  fill="white"
                />

                {/* Small accent fronds */}
                <path
                  d="M35 25C32 22 29 23 28 25C27 27 28 28 30 28C32 27 34 26 35 25Z"
                  fill="white"
                />
                <path
                  d="M20 35C17 32 14 33 13 35C12 37 13 38 15 38C17 37 19 36 20 35Z"
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
