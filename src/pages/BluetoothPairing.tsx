import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bluetooth, Check, Loader2, ChevronLeft } from "lucide-react";

interface Device {
  id: string;
  name: string;
  status: "available" | "connecting" | "connected";
}

const BluetoothPairing = () => {
  const [devices, setDevices] = useState<Device[]>([
    { id: "device-01", name: "Dexcom G6", status: "available" },
    { id: "device-02", name: "Dexcom G7", status: "available" },
    { id: "device-03", name: "Dexcom G8", status: "available" },
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const handleDeviceConnect = (deviceId: string) => {
    setDevices((prev) =>
      prev.map((device) =>
        device.id === deviceId ? { ...device, status: "connecting" } : device,
      ),
    );

    // Simulate connection process
    setTimeout(() => {
      setDevices((prev) =>
        prev.map((device) =>
          device.id === deviceId ? { ...device, status: "connected" } : device,
        ),
      );
    }, 2000);
  };

  const handlePairLater = () => {
    navigate("/dashboard");
  };

  const handleContinue = () => {
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate("/consent");
  };

  const hasConnectedDevice = devices.some(
    (device) => device.status === "connected",
  );

  useEffect(() => {
    // Simulate device scanning
    setIsScanning(true);
    const timer = setTimeout(() => setIsScanning(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <button
            onClick={handleBack}
            className="text-gray-600 hover:text-gray-800 mb-4"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <Card className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              Bluetooth Device Pairing
            </h1>
            <p className="text-sm text-gray-600">
              Connect your glucose monitoring device
            </p>
          </div>

          {devices.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bluetooth className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                No devices found
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Make sure your device is nearby and in pairing mode
              </p>
              <Button
                onClick={() => setIsScanning(true)}
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50"
              >
                Retry Search
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-700">
                  Available Devices
                </h3>
                {isScanning && (
                  <div className="flex items-center gap-2 text-blue-600">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs">Scanning...</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {devices.map((device) => (
                  <div
                    key={device.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bluetooth className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {device.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {device.status === "available" && "Ready to connect"}
                          {device.status === "connecting" && "Connecting..."}
                          {device.status === "connected" && "Connected"}
                        </p>
                      </div>
                    </div>

                    {device.status === "available" && (
                      <Button
                        size="sm"
                        onClick={() => handleDeviceConnect(device.id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 text-xs"
                      >
                        Connect
                      </Button>
                    )}

                    {device.status === "connecting" && (
                      <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                    )}

                    {device.status === "connected" && (
                      <div className="flex items-center gap-1 text-green-600">
                        <Check className="w-4 h-4" />
                        <span className="text-xs font-medium">Connected</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-6" />

          <div className="space-y-3">
            {hasConnectedDevice && (
              <Button
                onClick={handleContinue}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
              >
                Continue to Dashboard
              </Button>
            )}

            <Button
              onClick={handlePairLater}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Pair Later
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BluetoothPairing;
