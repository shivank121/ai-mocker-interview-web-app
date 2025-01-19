export interface CardDetails {
  name: string;
  count: number;
}

export interface YearlyChartData {
  name: string;
  totalAttempt: number;
  pass: number;
  fail: number;
  skip: number;
}

export interface InterviewOutcome {
  name: string;
  value: number;
}

export interface SuccessRate {
  month: string;
  successRate: number;
}

export interface CumulativeInterviews {
  month: string;
  interviews: string;
}

export interface InterviewsByType {
  name: string;
  value: number;
}
