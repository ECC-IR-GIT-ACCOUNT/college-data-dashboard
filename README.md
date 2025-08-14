# Data Elements Documentation

| NAME OF DATA ELEMENT | dev-category | developer-friendly name | API data type | INDEX VARIABLE NAME | VALUE LABEL | SOURCE | SHOWN/USE ON SITE |
|----------------------|--------------|------------------------|---------------|---------------------|-------------|---------|-------------------|
| Completion rate for first-time, full-time students at less-than-four-year institutions (150% of expected time to completion) | completion | completion_rate_less_than_4yr_150nt | float | C150_L4 | | IPEDS | ibid |
| First-time, full-time student retention rate at less-than-four-year institutions | student | retention_rate_suppressed.lt_four_year.full_time_pooled | float | RET_FTL4_POOLED_SUPP | | IPEDS | Yes |
| First-time, part-time student retention rate at less-than-four-year institutions | student | retention_rate_suppressed.lt_four_year.part_time_pooled | float | RET_PTL4_POOLED_SUPP | | IPEDS | Yes |
| Undergraduate student to instructional faculty ratio | student | demographics.student_faculty_ratio | float | STUFACR | | IPEDS | Yes |
| Enrollment of undergraduate certificate/degree-seeking students | student | size | integer | UGDS | | IPEDS | Yes |
| Share of undergraduate, degree-/certificate-seeking students who are part-time | student | part_time_share | float | PPTUG_EF | | IPEDS | Yes |
| Unduplicated count of undergraduate students enrolled during a 12 month period | student.enrollment.undergrad_12_month | enrollment.undergrad_12_month | integer | UG12MN | | IPEDS | |
| Percentage of all student receiving an award within 8 years of entry, pooled in rolling averages and suppressed for small n size | completion | outcome_percentage_suppressed.all_students.8yr.award_pooled | float | OMAWDP8_ALL_POOLED_SUPP | | IPEDS | Yes |
| Percentage of all students that did not receive an award and enrolled at another institution after leaving this institution within 8 years of entry, pooled in rolling averages and suppressed for small n size | completion | outcome_percentage_suppressed.all_students.8yr.transfer_pooled | float | OMENRAP_ALL_POOLED_SUPP | | IPEDS | Yes |
| Percentage of degree/certificate-seeking undergraduate students awarded a Pell Grant, pooled in rolling averages and suppressed for small n size | aid | dcs_pell_grant_rate_pooled | float | PCTPELL_DCS_POOLED_SUPP | | IPEDS | Yes |
| Percentage of undergraduate federal student loan borrowers in default after 2 years, suppressed for n<30 | repayment | 2_yr_bb_fed_repayment_suppressed.ug.default | float | BBRR2_FED_UG_DFLT_SUPP | | NSLDS | Yes |