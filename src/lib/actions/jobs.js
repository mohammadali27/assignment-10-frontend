"use server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const postJob = async (newJobData) => {
  const res = await fetch(`${baseUrl}/api/jobs`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(newJobData),
  });

  return res.json();
};
