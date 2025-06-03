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
                viewBox="0 0 24 24"
                className="w-10 h-10"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main koru spiral */}
                <path
                  d="M12 4C7.5 4 4 7.5 4 12C4 16.5 7.5 20 12 20C15.3 20 18 17.3 18 14C18 11.8 16.7 10 15 10C13.9 10 13 10.9 13 12C13 12.6 13.4 13 14 13C14.3 13 14.5 12.8 14.5 12.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />

                {/* Fern fronds */}
                <path
                  d="M7 7.5C6 7 5 7.3 4.8 8C4.6 8.7 5.2 9 6 8.8C6.8 8.6 7.2 8 7 7.5Z"
                  fill="white"
                />
                <path
                  d="M6 10C5 9.5 4 9.8 3.8 10.5C3.6 11.2 4.2 11.5 5 11.3C5.8 11.1 6.2 10.5 6 10Z"
                  fill="white"
                />
                <path
                  d="M5.5 12.5C4.5 12 3.5 12.3 3.3 13C3.1 13.7 3.7 14 4.5 13.8C5.3 13.6 5.7 13 5.5 12.5Z"
                  fill="white"
                />
                <path
                  d="M6.5 15C5.5 14.5 4.5 14.8 4.3 15.5C4.1 16.2 4.7 16.5 5.5 16.3C6.3 16.1 6.7 15.5 6.5 15Z"
                  fill="white"
                />
                <path
                  d="M8 17C7 16.5 6 16.8 5.8 17.5C5.6 18.2 6.2 18.5 7 18.3C7.8 18.1 8.2 17.5 8 17Z"
                  fill="white"
                />

                {/* Small accent fronds */}
                <path
                  d="M8.5 6C7.8 5.7 7.2 5.9 7.1 6.3C7 6.7 7.4 6.9 7.8 6.8C8.2 6.7 8.4 6.3 8.5 6Z"
                  fill="white"
                />
                <path
                  d="M5 8.5C4.3 8.2 3.7 8.4 3.6 8.8C3.5 9.2 3.9 9.4 4.3 9.3C4.7 9.2 4.9 8.8 5 8.5Z"
                  fill="white"
                />
                <path
                  d="M4.5 11C3.8 10.7 3.2 10.9 3.1 11.3C3 11.7 3.4 11.9 3.8 11.8C4.2 11.7 4.4 11.3 4.5 11Z"
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
