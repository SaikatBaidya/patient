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
                  d="M50 18C32 18 18 32 18 50C18 68 32 82 50 82C63 82 74 71 74 58C74 49 68 42 60 42C55 42 51 46 51 51C51 54 53 56 55 56C56.5 56 57.5 55 57.5 53.5C57.5 52.8 57.2 52.3 56.8 52.3"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Fern fronds extending from the left */}
                <path
                  d="M30 30C25 27 20 29 19 33C18 37 21 38 25 37C29 36 30 33 30 30Z"
                  fill="white"
                />
                <path
                  d="M25 42C20 39 15 41 14 45C13 49 16 50 20 49C24 48 25 45 25 42Z"
                  fill="white"
                />
                <path
                  d="M23 54C18 51 13 53 12 57C11 61 14 62 18 61C22 60 23 57 23 54Z"
                  fill="white"
                />
                <path
                  d="M27 66C22 63 17 65 16 69C15 73 18 74 22 73C26 72 27 69 27 66Z"
                  fill="white"
                />

                {/* Smaller accent fronds */}
                <path
                  d="M35 25C32 23 29 24 28 26C27 28 29 29 31 28C33 27 35 26 35 25Z"
                  fill="white"
                />
                <path
                  d="M20 36C17 34 14 35 13 37C12 39 14 40 16 39C18 38 20 37 20 36Z"
                  fill="white"
                />
                <path
                  d="M18 48C15 46 12 47 11 49C10 51 12 52 14 51C16 50 18 49 18 48Z"
                  fill="white"
                />
                <path
                  d="M22 60C19 58 16 59 15 61C14 63 16 64 18 63C20 62 22 61 22 60Z"
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
