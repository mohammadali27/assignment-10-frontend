import { getJob } from "@/lib/api/jobs";
import React from "react";

const JobsPage = async () => {
  const companyID = "companyID_123";
  const jobs = await getJob(companyID);
  console.log("jobs for the company", jobs);
  return (
    <div>
      this is jobs page
      <p>why not see this page</p>
    </div>
  );
};

export default JobsPage;
