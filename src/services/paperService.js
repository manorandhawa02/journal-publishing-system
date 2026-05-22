import API from "./api";

// ================= SUBMIT PAPER =================
export const submitPaper = async (formData) => {
  const res = await API.post(
    "/paper/submit",
    formData
  );

  return res.data;
};

// ================= GET ALL PAPERS =================
export const getAllPapers = async () => {
  const res = await API.get("/paper");
  return res.data;
};

// ================= GET MY PAPERS =================
export const getMyPapers = async () => {
  const res = await API.get("/paper/my");
  return res.data;
};

// ================= GET SINGLE PAPER =================
export const getPaperById = async (id) => {
  const res = await API.get(`/paper/${id}`);
  return res.data;
};

// ================= ASSIGN REVIEWER =================
export const assignReviewer = async (
  id,
  reviewerId
) => {
  const res = await API.post(
    `/review/${id}/assign`,
    { reviewerId }
  );

  return res.data;
};

// ================= SUBMIT REVIEW =================
export const submitReview = async (
  id,
  data
) => {
  const res = await API.post(
    `/review/${id}/submit`,
    data
  );

  return res.data;
};

// ================= ACCEPT PAPER =================
export const acceptPaper = async (id) => {
  const res = await API.put(
    `/paper/${id}/accept`
  );

  return res.data;
};

// ================= REJECT PAPER =================
export const rejectPaper = async (
  id,
  reason
) => {
  const res = await API.put(
    `/paper/${id}/reject`,
    { reason }
  );

  return res.data;
};

// ================= PUBLISH PAPER =================
export const publishPaper = async (id) => {
  const res = await API.post(
    `/published/publish/${id}`
  );

  return res.data;
};