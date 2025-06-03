import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "mi", name: "Te Reo Māori", flag: "🇳🇿" },
  { code: "sm", name: "Gagana Samoa", flag: "🇼🇸" },
  { code: "to", name: "Lea Faka-Tonga", flag: "🇹🇴" },
];

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <Card className="bg-teal-700 p-8 text-center">
          <h1 className="text-2xl font-bold text-white mb-8">
            Choose your language
          </h1>

          <div className="space-y-3 mb-8">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => setSelectedLanguage(language.code)}
                className={`w-full p-4 rounded-lg border-2 transition-all ${
                  selectedLanguage === language.code
                    ? "bg-white text-teal-700 border-white"
                    : "bg-transparent text-white border-white/30 hover:border-white/60"
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </div>
              </button>
            ))}
          </div>

          <Button
            onClick={handleContinue}
            className="w-full bg-white text-teal-700 hover:bg-gray-100 font-semibold py-3"
          >
            Continue
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default LanguageSelection;
