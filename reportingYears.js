const reportingYears = {
  retentionRate: "FY 2024",
  completionRate: "FY 2020",
  ratio: "FY YYYY",
  degreeSeeking: "FY YYYY",
  partTimeShare: "FY YYYY",
  nonDegree: "FY YYYY",
  transferRate8: "FY 2021",
  graduationRate8: "FY 2021",
  pell: "FY 2024",
  default: "FY YYYY"
};

// Set text content for each reporting year span
document.getElementById("reportingYearFT").textContent = reportingYears.retentionRate;
document.getElementById("reportingYearPT").textContent = reportingYears.retentionRate;
document.getElementById("reportingYearCompletion").textContent = reportingYears.completionRate;
document.getElementById("reportingYearRatio").textContent = reportingYears.ratio;
document.getElementById("reportingYearDegreeSeek").textContent = reportingYears.degreeSeeking;
document.getElementById("reportingYearPartTimeShare").textContent = reportingYears.partTimeShare;
document.getElementById("reportingYearoverallEnrollment").textContent = reportingYears.nonDegree;
document.getElementById("reportingYearTransfer8").textContent = reportingYears.transferRate8;
document.getElementById("reportingYearGrad8").textContent = reportingYears.graduationRate8;
document.getElementById("reportingYearPell").textContent = reportingYears.pell;
document.getElementById("reportingYearDefault").textContent = reportingYears.default;
