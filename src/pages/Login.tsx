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
                {/* Main koru spiral - the flowing spiral curve */}
                <path
                  d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C65 85 78 72 78 57C78 47 71 40 62 40C56 40 52 44 52 50C52 54 54 57 57 57C59 57 60 56 60 54C60 53.2 59.6 52.6 59 52.6"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Fern fronds - curved flowing from the spiral */}
                <path
                  d="M30 28C25 25 20 27 18 32C16 37 20 39 25 37C30 35 32 30 30 28Z"
                  fill="white"
                />
                <path
                  d="M25 40C20 37 15 39 13 44C11 49 15 51 20 49C25 47 27 42 25 40Z"
                  fill="white"
                />
                <path
                  d="M23 52C18 49 13 51 11 56C9 61 13 63 18 61C23 59 25 54 23 52Z"
                  fill="white"
                />
                <path
                  d="M27 64C22 61 17 63 15 68C13 73 17 75 22 73C27 71 29 66 27 64Z"
                  fill="white"
                />
                <path
                  d="M32 76C27 73 22 75 20 80C18 85 22 87 27 85C32 83 34 78 32 76Z"
                  fill="white"
                />

                {/* Smaller accent fronds */}
                <path
                  d="M35 23C32 22 29 23 28 25C27 27 29 28 32 27C35 26 36 24 35 23Z"
                  fill="white"
                />
                <path
                  d="M20 34C17 33 14 34 13 36C12 38 14 39 17 38C20 37 21 35 20 34Z"
                  fill="white"
                />
                <path
                  d="M18 46C15 45 12 46 11 48C10 50 12 51 15 50C18 49 19 47 18 46Z"
                  fill="white"
                />
                <path
                  d="M22 58C19 57 16 58 15 60C14 62 16 63 19 62C22 61 23 59 22 58Z"
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
