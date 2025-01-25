import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

import { CumulativeInterviews } from "@/frontend/interfaces/dashboard";
import AICard from "../common/AICard";
import { Card } from "../ui/card";

interface Props {
  data: CumulativeInterviews[];
}

const CumulativeInterviewsChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="mb-6">
      <div className="mb-2">
        <p>
          <b className="text-2xl">Cumulative Interviews</b>
        </p>
      </div>

      <Card
        style={{ width: "100%", height: "400px", backgroundColor: "#f3f4f6" }}
        className="pt-3 pb-3 pl-0"
      >
        <ResponsiveContainer>
          <AreaChart
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
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="interviews"
              stroke="#8884d8"
              fill=""
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default CumulativeInterviewsChart;
