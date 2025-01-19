import React from "react";

// components
import Cards from "../components/dashboard/Cards";
import SuccessRateChart from "../components/dashboard/SuccessRateChart";
import YearlyProgressChart from "../components/dashboard/YearlyProgressChart";
import InterviewsByTypeChart from "../components/dashboard/InterviewsByTypeChart";
import InterviewOutcomeChart from "../components/dashboard/InterviewOutcomesChart";
import CumulativeInterviewsChart from "../components/dashboard/CumulativeInterviewsChart";

// Data
import { cardDetails } from "../constants/dashboard";
import { yearlyChart } from "../constants/dashboard";
import { successRate } from "../constants/dashboard";
import { interviewsByType } from "../constants/dashboard";
import { interviewOutcome } from "../constants/dashboard";
import { cumulativeInterviews } from "../constants/dashboard";

const DashboardContainer = () => {
  const yearlyChartData = yearlyChart.data;
  return (
    <div className="flex flex-col">

      <Cards cards={cardDetails} />
      <YearlyProgressChart data={yearlyChartData} />

      <div className="flex gap-2 mb-6">
        <div style={{ width: "500px" }}>
          <InterviewOutcomeChart data={interviewOutcome} />
        </div>
        <div style={{ width: "500px" }}>
          <InterviewsByTypeChart data={interviewsByType} />
        </div>
      </div>

      <SuccessRateChart data={successRate} />
      {/* @ts-ignore */}
      <CumulativeInterviewsChart data={cumulativeInterviews} />
    </div>
  );
};

export default DashboardContainer;
