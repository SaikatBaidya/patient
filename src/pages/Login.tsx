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
                {/* Main koru spiral - smooth flowing curve */}
                <path
                  d="M50 15C30 15 15 30 15 50C15 70 30 85 50 85C65 85 78 72 78 57C78 47 71 40 62 40C56 40 52 44 52 50C52 54 54 57 57 57C59 57 60 56 60 54C60 53.2 59.6 52.6 59 52.6"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.8"
                  strokeLinecap="round"
                />

                {/* Fern fronds - natural leaf shapes flowing from the spiral */}
                <path
                  d="M32 28Q28 26 24 28Q20 30 18 34Q16 38 20 40Q24 42 28 40Q32 38 34 34Q36 30 32 28Z"
                  fill="white"
                />
                <path
                  d="M26 40Q22 38 18 40Q14 42 12 46Q10 50 14 52Q18 54 22 52Q26 50 28 46Q30 42 26 40Z"
                  fill="white"
                />
                <path
                  d="M24 52Q20 50 16 52Q12 54 10 58Q8 62 12 64Q16 66 20 64Q24 62 26 58Q28 54 24 52Z"
                  fill="white"
                />
                <path
                  d="M28 64Q24 62 20 64Q16 66 14 70Q12 74 16 76Q20 78 24 76Q28 74 30 70Q32 66 28 64Z"
                  fill="white"
                />

                {/* Smaller accent fronds */}
                <path
                  d="M36 24Q34 23 32 24Q30 25 29 27Q28 29 30 30Q32 31 34 30Q36 29 37 27Q38 25 36 24Z"
                  fill="white"
                />
                <path
                  d="M21 34Q19 33 17 34Q15 35 14 37Q13 39 15 40Q17 41 19 40Q21 39 22 37Q23 35 21 34Z"
                  fill="white"
                />
                <path
                  d="M19 46Q17 45 15 46Q13 47 12 49Q11 51 13 52Q15 53 17 52Q19 51 20 49Q21 47 19 46Z"
                  fill="white"
                />
                <path
                  d="M23 58Q21 57 19 58Q17 59 16 61Q15 63 17 64Q19 65 21 64Q23 63 24 61Q25 59 23 58Z"
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
