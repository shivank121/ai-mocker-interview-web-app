import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

// interfaces
import { InterviewOutcome } from "@/frontend/interfaces/dashboard";
import { Card } from "../ui/card";

// Custom Colors
const COLORS = ["#4caf50", "#f44336", "#ff9800"]; // Green, Red, Orange

interface Props {
  data: InterviewOutcome[];
}

const InterviewOutcomeChart: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="mb-2">
        <p>
          <b className="text-2xl">Interview Outcomes</b>
        </p>
      </div>

      <Card
        style={{ width: "100%", height: "400px", backgroundColor: "#f3f4f6" }}
        className="pt-3 pb-3 pl-0"
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={80} // For donut effect
              fill="#8884d8"
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default InterviewOutcomeChart;
