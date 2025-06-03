import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Settings,
  Heart,
  Activity,
  Droplet,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  MessageCircle,
  GraduationCap,
  Users,
} from "lucide-react";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const navigate = useNavigate();

  const handleSimulationClick = () => {
    navigate("/simulation");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-teal-700 text-white p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">👤</span>
            </div>
            <div>
              <h1 className="font-semibold">Kia ora, Marwah!</h1>
              <p className="text-sm text-teal-200">Good morning</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-teal-600 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-teal-600 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Glucose Reading */}
        <div className="bg-teal-600 rounded-lg p-4 text-center">
          <div className="text-3xl font-bold mb-1">6.8</div>
          <div className="text-sm text-teal-200">mmol/L</div>
          <div className="text-xs text-teal-200 mt-1">2 min ago</div>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="p-4">
        <div className="grid grid-cols-4 gap-3 mb-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-xs text-gray-600">Pressure</div>
            <div className="font-semibold text-sm">120/80</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-xs text-gray-600">Exercise</div>
            <div className="font-semibold text-sm">45 min</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Droplet className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-xs text-gray-600">Insulin</div>
            <div className="font-semibold text-sm">12 units</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-xs text-gray-600">Sleep</div>
            <div className="font-semibold text-sm">7.5 hrs</div>
          </div>
        </div>

        {/* Today's Tasks */}
        <Card className="p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">
            Today's Tasks List
          </h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Medication</span>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700"
              >
                Completed
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                <span className="text-sm font-medium">Activity</span>
              </div>
              <Badge variant="outline">Pending</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium">Nutrition</span>
              </div>
              <Badge className="bg-orange-100 text-orange-700">Due Soon</Badge>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button
            onClick={handleSimulationClick}
            className="bg-orange-600 hover:bg-orange-700 text-white p-4 h-auto flex flex-col items-center gap-2"
          >
            <BarChart3 className="w-6 h-6" />
            <span className="text-sm font-medium">View Simulation</span>
          </Button>

          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 p-4 h-auto flex flex-col items-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm font-medium">Chat Support</span>
          </Button>
        </div>

        <Separator className="my-6" />

        {/* Bottom Navigation */}
        <div className="bg-white rounded-lg p-2">
          <div className="grid grid-cols-3 gap-1">
            <button className="flex flex-col items-center gap-1 p-3 rounded-lg bg-teal-50 text-teal-600">
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs font-medium">Data</span>
            </button>

            <button className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-gray-50">
              <GraduationCap className="w-5 h-5 text-gray-600" />
              <span className="text-xs font-medium text-gray-600">
                Education Hub
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 p-3 rounded-lg hover:bg-gray-50">
              <Users className="w-5 h-5 text-gray-600" />
              <span className="text-xs font-medium text-gray-600">
                Community
              </span>
              <Badge className="bg-orange-600 text-white text-xs px-1.5 py-0.5 rounded-full -mt-1">
                2
              </Badge>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
