import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { SuccessRate } from "@/frontend/interfaces/dashboard";
import { Card } from "../ui/card";

interface Props {
  data: SuccessRate[];
}

const SuccessRateChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="mb-6">
      <div className="mb-2">
        <p>
          <b className="text-2xl">Success Rate</b>
        </p>
      </div>
      <Card
        style={{ width: "100%", height: "400px", backgroundColor: "#f3f4f6" }}
        className="pt-3 pb-3 pl-0"
      >
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 100]} unit="%" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="successRate"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default SuccessRateChart;
