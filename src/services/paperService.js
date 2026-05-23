import API from "./api";
import axios from "axios";

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

  const token = localStorage.getItem("token");

  const res = await axios.post(
    `http://localhost:5000/api/review/${id}/assign`,
    { reviewerId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ================= SUBMIT REVIEW =================
export const submitReview = async (
  id,
  data
) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    `http://localhost:5000/api/review/${id}/submit`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ================= ACCEPT PAPER =================
export const acceptPaper = async (id) => {

  const token = localStorage.getItem("token");

  const res = await axios.put(
    `http://localhost:5000/api/paper/${id}/accept`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ================= REJECT PAPER =================
export const rejectPaper = async (
  id,
  reason
) => {

  const token = localStorage.getItem("token");

  const res = await axios.put(
    `http://localhost:5000/api/paper/${id}/reject`,
    { reason },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ================= PUBLISH PAPER =================
export const publishPaper = async (id) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    `http://localhost:5000/api/published/publish/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

// ================= GET REVIEWERS =================
export const getReviewers = async () => {

  const token = localStorage.getItem("token");

  const res = await axios.get(
    "http://localhost:5000/api/admin/reviewers",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};