const APIKEY = "6qCcQwLsvYABdq61jxlt9fvdmGE7MJS5lmIZwowm";



const schoolName = "Elgin Community College";

    let fieldsArray;
    let fieldsString;

   
    fieldsArray = [
      "latest.completion.completion_rate_less_than_4yr_150nt",//0
      "latest.student.retention_rate_suppressed.lt_four_year.full_time_pooled",//1
      "latest.student.retention_rate_suppressed.lt_four_year.part_time_pooled",//2
      "latest.student.demographics.student_faculty_ratio",//3
      "latest.student.size",//4
      "latest.student.part_time_share",// 5
      "latest.student.enrollment.undergrad_12_month",//6
      "latest.completion.outcome_percentage_suppressed.all_students.8yr.award_pooled",//7
      "latest.completion.outcome_percentage_suppressed.all_students.8yr.transfer_pooled",//8
      "latest.aid.dcs_pell_grant_rate_pooled",//9
      "latest.repayment.2_yr_bb_fed_repayment_suppressed.ug.default"//10  
    ];
    fieldsString = fieldsArray.join(",");


  fetch(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${APIKEY}&school.name=${encodeURIComponent(schoolName)}&fields=${fieldsString}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Unable to fetch data from the API");
    }
    return response.json();
  })
  .then(data => {
    if (!data || !data.results || data.results.length === 0) {
      console.error("No results returned from the API.");
      return;
    }

    const schoolData = data.results[0];
        document.getElementById("completionRate").textContent = `${Math.round(schoolData[fieldsArray[0]]*100)}%`;
        document.getElementById("fullTime").textContent = `${Math.round(schoolData[fieldsArray[1]]*100)}%`;
        document.getElementById("partTime").textContent = `${Math.round(schoolData[fieldsArray[2]]*100)}%`;
        document.getElementById("studentToFaculty").textContent = `${schoolData[fieldsArray[3]]}`;
        document.getElementById("studentSize").textContent = schoolData[fieldsArray[4]];
        document.getElementById("partTimeShare").textContent = `${Math.round(schoolData[fieldsArray[5]]*100)}%`;
        document.getElementById("overallEnrollment").textContent = schoolData[fieldsArray[6]];
        document.getElementById("gradRate8Years").textContent = `${Math.round(schoolData[fieldsArray[7]]*100)}%`;
        document.getElementById("transferRate8Years").textContent = `${Math.round(schoolData[fieldsArray[8]]*100)}%`;
        document.getElementById("pellAward").textContent = `${Math.round(schoolData[fieldsArray[9]]*100)}%`;
        document.getElementById("defaultRate").textContent = `${Math.round(schoolData[fieldsArray[10]]*100)}%`;
  })
  .catch(error => console.error("Error fetching data:", error))

;