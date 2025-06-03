import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, ChevronLeft } from "lucide-react";

const ConsentWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleAgreeAndContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/pairing");
    }
  };

  const handlePairLater = () => {
    navigate("/dashboard");
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/login");
    }
  };

  const progressValue = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={handleBack}
              className="text-gray-600 hover:text-gray-800"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-sm text-gray-600">{currentStep} of 3</span>
          </div>
          <Progress value={progressValue} className="h-2" />
        </div>

        <Card className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              Consent Wizard
            </h1>
          </div>

          {currentStep === 1 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-orange-600" />
              </div>

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Māori Data Sovereignty
              </h2>

              <p className="text-sm text-gray-600 text-left mb-6">
                We control the collection, ownership, and application of Māori
                data. We work according to Māori Data Sovereignty principles and
                as Māori data sovereignty.
              </p>

              <div className="bg-orange-50 p-4 rounded-lg text-left">
                <p className="text-sm text-gray-700">
                  Your data will be stored securely and used only for your
                  healthcare management. You have full control over your
                  information.
                </p>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Data Privacy & Security
              </h2>

              <p className="text-sm text-gray-600 text-left mb-6">
                Your health data is encrypted and stored securely. We follow
                strict privacy guidelines and will never share your personal
                information without your explicit consent.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg text-left">
                <p className="text-sm text-gray-700">
                  • End-to-end encryption
                  <br />
                  • Regular security audits
                  <br />
                  • HIPAA compliant storage
                  <br />• You can delete your data anytime
                </p>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Healthcare Partnership
              </h2>

              <p className="text-sm text-gray-600 text-left mb-6">
                This app works alongside your healthcare team. Your glucose
                readings and health metrics can be shared with your doctor to
                provide better care.
              </p>

              <div className="bg-green-50 p-4 rounded-lg text-left">
                <p className="text-sm text-gray-700">
                  By continuing, you agree to share relevant health data with
                  your healthcare providers for improved diabetes management.
                </p>
              </div>
            </div>
          )}

          <div className="space-y-3 mt-8">
            <Button
              onClick={handleAgreeAndContinue}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3"
            >
              {currentStep < 3 ? "Agree & Continue" : "Complete Setup"}
            </Button>

            {currentStep === 3 && (
              <Button
                onClick={handlePairLater}
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Pair Later
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ConsentWizard;
