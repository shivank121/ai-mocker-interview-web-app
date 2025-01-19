import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Shadcn components
import { ChartContainer } from "../ui/chart";

// interfaces
import { YearlyChartData } from "@/frontend/interfaces/dashboard";
import { Card } from "../ui/card";

interface Props {
  data: YearlyChartData[];
}

const YearlyProgressChart: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <div className="mb-6">
      <div className="mb-2">
        <p>
          <b className="text-2xl">Yearly progress graph</b>
        </p>
      </div>

      <Card
        style={{ width: "100%", height: "400px", backgroundColor: "#f3f4f6" }}
        className="pt-3 pb-3 pl-0"
      >
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 2,
              right: 0,
              left: 0,
              bottom: 2,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="totalAttempt" fill="#8884d8" />
            <Bar dataKey="pass" fill="#82ca9d" />
            <Bar dataKey="fail" fill="#ff6f61" />
            <Bar dataKey="skip" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default YearlyProgressChart;
