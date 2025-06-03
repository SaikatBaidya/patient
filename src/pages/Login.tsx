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
                  d="M50 20C35 20 23 32 23 47C23 62 35 74 50 74C60 74 68 66 68 56C68 50 64 45 58 45C54 45 51 48 51 52C51 54 52 55 54 55C55 55 55.5 54.5 55.5 53.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Fern fronds - left side */}
                <path
                  d="M35 35C30 30 24 32 23 36C22 40 25 41 29 40C33 39 34 37 35 35Z"
                  fill="white"
                />
                <path
                  d="M30 45C25 40 19 42 18 46C17 50 20 51 24 50C28 49 29 47 30 45Z"
                  fill="white"
                />
                <path
                  d="M28 55C23 50 17 52 16 56C15 60 18 61 22 60C26 59 27 57 28 55Z"
                  fill="white"
                />
                <path
                  d="M32 65C27 60 21 62 20 66C19 70 22 71 26 70C30 69 31 67 32 65Z"
                  fill="white"
                />

                {/* Fern fronds - right side */}
                <path
                  d="M65 35C70 30 76 32 77 36C78 40 75 41 71 40C67 39 66 37 65 35Z"
                  fill="white"
                />
                <path
                  d="M70 45C75 40 81 42 82 46C83 50 80 51 76 50C72 49 71 47 70 45Z"
                  fill="white"
                />
                <path
                  d="M72 55C77 50 83 52 84 56C85 60 82 61 78 60C74 59 73 57 72 55Z"
                  fill="white"
                />
                <path
                  d="M68 65C73 60 79 62 80 66C81 70 78 71 74 70C70 69 69 67 68 65Z"
                  fill="white"
                />

                {/* Small accent fronds */}
                <path
                  d="M40 28C37 25 33 26 32 28C31 30 33 31 35 31C37 30 39 29 40 28Z"
                  fill="white"
                />
                <path
                  d="M60 28C63 25 67 26 68 28C69 30 67 31 65 31C63 30 61 29 60 28Z"
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
