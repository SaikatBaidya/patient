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
                {/* Main koru spiral - outer curve */}
                <path
                  d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C65 85 78 72 78 57C78 47 71 40 62 40C56 40 52 44 52 50C52 54 54 57 57 57C59 57 60 56 60 54"
                  fill="none"
                  stroke="white"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />

                {/* Fern fronds - curved segments */}
                <path
                  d="M32 35C28 33 24 35 22 39C20 43 23 45 27 43C31 41 33 37 32 35"
                  fill="white"
                />
                <path
                  d="M26 47C22 45 18 47 16 51C14 55 17 57 21 55C25 53 27 49 26 47"
                  fill="white"
                />
                <path
                  d="M24 59C20 57 16 59 14 63C12 67 15 69 19 67C23 65 25 61 24 59"
                  fill="white"
                />
                <path
                  d="M28 71C24 69 20 71 18 75C16 79 19 81 23 79C27 77 29 73 28 71"
                  fill="white"
                />
                <path
                  d="M34 83C30 81 26 83 24 87C22 91 25 93 29 91C33 89 35 85 34 83"
                  fill="white"
                />

                {/* Top fronds */}
                <path
                  d="M42 25C39 24 36 25 35 27C34 29 36 30 39 29C42 28 43 26 42 25"
                  fill="white"
                />
                <path
                  d="M38 30C35 29 32 30 31 32C30 34 32 35 35 34C38 33 39 31 38 30"
                  fill="white"
                />
                <path
                  d="M35 35C32 34 29 35 28 37C27 39 29 40 32 39C35 38 36 36 35 35"
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
