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
                  d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C65 85 78 72 78 57C78 47 71 40 62 40C56 40 52 44 52 50C52 54 54 57 57 57C59 57 60 56 60 54"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Fern fronds - main fronds */}
                <ellipse
                  cx="28"
                  cy="32"
                  rx="8"
                  ry="4"
                  transform="rotate(-30 28 32)"
                  fill="white"
                />
                <ellipse
                  cx="22"
                  cy="45"
                  rx="9"
                  ry="4"
                  transform="rotate(-25 22 45)"
                  fill="white"
                />
                <ellipse
                  cx="20"
                  cy="58"
                  rx="10"
                  ry="4"
                  transform="rotate(-20 20 58)"
                  fill="white"
                />
                <ellipse
                  cx="26"
                  cy="71"
                  rx="9"
                  ry="4"
                  transform="rotate(-15 26 71)"
                  fill="white"
                />

                {/* Smaller accent fronds */}
                <ellipse
                  cx="35"
                  cy="25"
                  rx="5"
                  ry="2.5"
                  transform="rotate(-35 35 25)"
                  fill="white"
                />
                <ellipse
                  cx="16"
                  cy="38"
                  rx="6"
                  ry="2.5"
                  transform="rotate(-30 16 38)"
                  fill="white"
                />
                <ellipse
                  cx="14"
                  cy="52"
                  rx="6"
                  ry="2.5"
                  transform="rotate(-25 14 52)"
                  fill="white"
                />
                <ellipse
                  cx="18"
                  cy="65"
                  rx="5"
                  ry="2.5"
                  transform="rotate(-20 18 65)"
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
