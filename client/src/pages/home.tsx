import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [isHRMode, setIsHRMode] = useState(false);
  const [valueList, setValueList] = useState<string[]>([]);

  const nonHRButtons = [1, 2, 3, 5, 10, 20, 50, 100];
  const hrButtons = [1, 5, 10, 20, 50, 100, 200, 500, 1000];

  const currentButtons = isHRMode ? hrButtons : nonHRButtons;
  const highlightValue = isHRMode ? 1000 : 100;

  const addValue = (value: number) => {
    setValueList(prev => [...prev, `x${value}`]);
  };

  const removeFirstValue = () => {
    setValueList(prev => prev.slice(1));
  };

  const resetList = () => {
    setValueList([]);
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-slate-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Roll Tracker</h1>
        </div>

        {/* Toggle Switch */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-center">
              <Label className="inline-flex items-center cursor-pointer">
                <span className="mr-3 text-sm font-medium text-gray-700">
                  {isHRMode ? "HR" : "Non HR"}
                </span>
                <Switch
                  checked={isHRMode}
                  onCheckedChange={setIsHRMode}
                  className="mx-3"
                />
                <span className="ml-3 text-sm font-medium text-gray-700">HR</span>
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Value Button Grid */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Multiplier
            </h2>
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-3 gap-3">
                {currentButtons.map((value, index) => {
                  // Only x100 in Non-HR mode takes 2 columns
                  const shouldSpanTwo = !isHRMode && value === 100;
                  
                  return (
                    <Button
                      key={value}
                      onClick={() => addValue(value)}
                      variant={value === highlightValue ? "default" : "outline"}
                      className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95 ${
                        value === highlightValue
                          ? "bg-emerald-500 text-white hover:bg-emerald-600"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      } ${
                        shouldSpanTwo ? "col-span-2" : ""
                      }`}
                    >
                      x{value}
                    </Button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons and Next Roll Preview */}
        <Card className="mb-6">
          <CardContent className="p-6">
            {/* Next Roll Display */}
            {valueList.length > 0 && (
              <div className="mb-4 text-center">
                <h3 className="text-sm font-medium text-gray-600 mb-2">Multiplier</h3>
                <div className="flex justify-center items-center space-x-2">
                  {/* Current (next) value - larger */}
                  <div className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg font-bold text-lg">
                    {valueList[0]}
                  </div>
                  {/* Following 2 values - smaller */}
                  {valueList.length > 1 && (
                    <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                      {valueList[1]}
                    </div>
                  )}
                  {valueList.length > 2 && (
                    <div className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                      {valueList[2]}
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button
                onClick={removeFirstValue}
                disabled={valueList.length === 0}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Done
              </Button>
              <Button
                onClick={resetList}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium shadow-sm"
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Value List */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Mapped Multipliers
            </h2>
            <div className="max-h-64 overflow-y-auto">
              {valueList.length === 0 ? (
                <div className="text-center text-gray-500 text-sm mt-4">
                  No saved rolls yet.
                </div>
              ) : (
                <div className="grid grid-cols-5 gap-2">
                  {valueList.map((value, index) => (
                    <div
                      key={index}
                      className="p-2 bg-gray-50 rounded-lg text-center"
                    >
                      <span className="text-gray-700 font-medium text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
