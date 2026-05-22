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
  paperId,
  reviewerId
) => {

  const res = await API.post(
    `/review/${paperId}/assign`,
    { reviewerId }
  );

  return res.data;
};

// ================= SUBMIT REVIEW =================
export const submitReview = async (
  paperId,
  reviewData
) => {

  const res = await API.post(
    `/review/${paperId}/submit`,
    reviewData
  );

  return res.data;
};

// ================= GET ASSIGNED PAPERS =================
export const getAssignedPapers = async () => {

  const res = await API.get(
    "/review/assigned"
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