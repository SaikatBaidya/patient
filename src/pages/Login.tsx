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
                {/* Main koru spiral - the flowing curve */}
                <path
                  d="M50 18C32 18 18 32 18 50C18 68 32 82 50 82C63 82 74 71 74 58C74 49 68 42 60 42C55 42 51 46 51 51C51 54 53 56 55 56C56.5 56 57.5 55 57.5 53.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Fern fronds - curved leaf segments */}
                <path
                  d="M30 30C25 27 20 29 18 33C16 37 19 39 24 37C29 35 31 31 30 30"
                  fill="white"
                />
                <path
                  d="M25 42C20 39 15 41 13 45C11 49 14 51 19 49C24 47 26 43 25 42"
                  fill="white"
                />
                <path
                  d="M23 54C18 51 13 53 11 57C9 61 12 63 17 61C22 59 24 55 23 54"
                  fill="white"
                />
                <path
                  d="M27 66C22 63 17 65 15 69C13 73 16 75 21 73C26 71 28 67 27 66"
                  fill="white"
                />
                <path
                  d="M32 78C27 75 22 77 20 81C18 85 21 87 26 85C31 83 33 79 32 78"
                  fill="white"
                />

                {/* Top pointed fronds */}
                <path
                  d="M40 25L43 20L46 25L43 27C41 26 40 25 40 25"
                  fill="white"
                />
                <path
                  d="M36 28L39 23L42 28L39 30C37 29 36 28 36 28"
                  fill="white"
                />
                <path
                  d="M33 32L36 27L39 32L36 34C34 33 33 32 33 32"
                  fill="white"
                />
                <path
                  d="M44 28L47 23L50 28L47 30C45 29 44 28 44 28"
                  fill="white"
                />
                <path
                  d="M48 32L51 27L54 32L51 34C49 33 48 32 48 32"
                  fill="white"
                />
                <path
                  d="M52 36L55 31L58 36L55 38C53 37 52 36 52 36"
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
