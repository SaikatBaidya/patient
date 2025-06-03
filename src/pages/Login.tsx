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
                  d="M50 18C32 18 18 32 18 50C18 68 32 82 50 82C63 82 74 71 74 58C74 49 68 42 60 42C55 42 51 46 51 51C51 54 53 56 55 56C56.5 56 57.5 55 57.5 53.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Fern fronds with pointed tips */}
                <path
                  d="M42 22L45 17L48 22C47 24 45 25 43 24C41 23 41 22 42 22"
                  fill="white"
                />
                <path
                  d="M38 26L41 21L44 26C43 28 41 29 39 28C37 27 37 26 38 26"
                  fill="white"
                />
                <path
                  d="M34 30L37 25L40 30C39 32 37 33 35 32C33 31 33 30 34 30"
                  fill="white"
                />
                <path
                  d="M46 26L49 21L52 26C51 28 49 29 47 28C45 27 45 26 46 26"
                  fill="white"
                />
                <path
                  d="M50 30L53 25L56 30C55 32 53 33 51 32C49 31 49 30 50 30"
                  fill="white"
                />
                <path
                  d="M54 34L57 29L60 34C59 36 57 37 55 36C53 35 53 34 54 34"
                  fill="white"
                />

                {/* Lower curved fronds */}
                <path
                  d="M30 35C25 32 20 34 18 38C16 42 19 44 24 42C29 40 31 36 30 35"
                  fill="white"
                />
                <path
                  d="M25 47C20 44 15 46 13 50C11 54 14 56 19 54C24 52 26 48 25 47"
                  fill="white"
                />
                <path
                  d="M23 59C18 56 13 58 11 62C9 66 12 68 17 66C22 64 24 60 23 59"
                  fill="white"
                />
                <path
                  d="M27 71C22 68 17 70 15 74C13 78 16 80 21 78C26 76 28 72 27 71"
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
