import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  TrendingDown,
  Calendar,
  Clock,
  Target,
  Share,
  Plus,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const SimulationResults = () => {
  const [selectedOption, setSelectedOption] = useState("pre-breakfast");
  const [glucoseTarget, setGlucoseTarget] = useState("6.5");
  const [timeframe, setTimeframe] = useState("30 min");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleSimulate = () => {
    // Simulate the glucose prediction
    console.log("Running simulation with:", {
      selectedOption,
      glucoseTarget,
      timeframe,
    });
  };

  const handleAddToCare = () => {
    console.log("Adding to care plan");
  };

  const handleShare = () => {
    console.log("Sharing with clinician");
  };

  // Mock data for the chart
  const chartData = [
    { time: "0", baseline: 6.8, scenario: 6.8 },
    { time: "5", baseline: 7.2, scenario: 6.9 },
    { time: "10", baseline: 7.8, scenario: 7.0 },
    { time: "15", baseline: 8.2, scenario: 7.1 },
    { time: "20", baseline: 8.4, scenario: 6.9 },
    { time: "25", baseline: 8.1, scenario: 6.7 },
    { time: "30", baseline: 7.5, scenario: 6.5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-700 text-white p-4">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={handleBack}
            className="p-1 hover:bg-teal-600 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold">Simulation Result</h1>
        </div>

        <div className="flex items-center gap-2 text-sm text-teal-200">
          <TrendingDown className="w-4 h-4" />
          <span>-1.2 mmol/L improvement</span>
        </div>
      </div>

      <div className="p-4">
        {/* Chart */}
        <Card className="p-4 mb-6">
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
              >
                <XAxis
                  dataKey="time"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  interval="preserveStartEnd"
                  height={60}
                />
                <YAxis
                  type="number"
                  domain={[6, 9]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280" }}
                  width={60}
                />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  stroke="#94A3B8"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  activeDot={false}
                />
                <Line
                  type="monotone"
                  dataKey="scenario"
                  stroke="#0F766E"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 4, fill: "#0F766E" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-gray-400 border-dashed border-t-2"></div>
              <span className="text-gray-600">Baseline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-teal-700"></div>
              <span className="text-gray-600">Scenario</span>
            </div>
          </div>
        </Card>

        {/* Simulation Controls */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-4">
            What would you like to try?
          </h3>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Meal/Exercise
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedOption("pre-breakfast")}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    selectedOption === "pre-breakfast"
                      ? "bg-teal-50 border-teal-300 text-teal-700"
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Pre-breakfast
                </button>
                <button
                  onClick={() => setSelectedOption("cardio")}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    selectedOption === "cardio"
                      ? "bg-teal-50 border-teal-300 text-teal-700"
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Cardio
                </button>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Glucose Target
              </Label>
              <Input
                value={glucoseTarget}
                onChange={(e) => setGlucoseTarget(e.target.value)}
                className="w-full"
                placeholder="Enter target glucose level"
              />
            </div>

            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 block">
                Timeframe
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {["Today", "7 Days", "30 Days"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setTimeframe(option)}
                    className={`p-2 rounded-lg border text-sm font-medium transition-all ${
                      timeframe === option
                        ? "bg-orange-50 border-orange-300 text-orange-700"
                        : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <Button
            onClick={handleSimulate}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3"
          >
            Simulate
          </Button>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleAddToCare}
              variant="outline"
              className="border-teal-300 text-teal-700 hover:bg-teal-50 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add to Care Plan
            </Button>

            <Button
              onClick={handleShare}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <Share className="w-4 h-4" />
              Share with Clinician
            </Button>
          </div>
        </div>

        {/* Additional Information */}
        <Card className="p-4">
          <h4 className="font-medium text-gray-800 mb-3">Recommendation</h4>
          <p className="text-sm text-gray-600 mb-4">
            Based on your current glucose level and the selected scenario, a
            pre-breakfast cardio session could help improve your glucose control
            by approximately 1.2 mmol/L.
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Optimal timing: 6:30 AM</span>
            </div>
            <div className="flex items-center gap-1">
              <Target className="w-3 h-3" />
              <span>Duration: 20-30 min</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SimulationResults;
