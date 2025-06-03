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
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 15C35 15 25 25 25 40C25 50 30 58 38 62C42 64 46 65 50 65C54 65 58 64 62 62C70 58 75 50 75 40C75 25 65 15 50 15Z"
                  fill="white"
                />
                <path
                  d="M50 20C40 20 32 28 32 38C32 45 36 51 42 54C45 55.5 47.5 56 50 56C52.5 56 55 55.5 58 54C64 51 68 45 68 38C68 28 60 20 50 20Z"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M50 25C45 25 40 30 40 36C40 42 45 47 50 47C55 47 60 42 60 36C60 30 55 25 50 25Z"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M42 45C42 45 45 50 50 52C55 50 58 45 58 45"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M35 50C35 50 40 60 50 65C60 60 65 50 65 50"
                  fill="transparent"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="35" r="3" fill="white" />
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
