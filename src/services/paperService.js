import API from "./api";
import axios from "axios";

const API = "http://localhost:5000/api"; // change if needed

// submit paper
export const submitPaper = async (formData) => {
  const res = await API.post(
    "/paper/submit",
    formData
  );

  return res.data;
};

// get all papers
export const getAllPapers = async () => {
  const res = await API.get("/paper");
  return res.data;
};

// get my papers
export const getMyPapers = async () => {
  const res = await API.get("/paper/my");
  return res.data;
};

// get single paper
export const getPaperById = async (id) => {
  const res = await API.get(`/paper/${id}`);
  return res.data;
};

// decision
export const makeDecision = async (
  id,
  decision
) => {
  const res = await API.put(
    `/admin/decision/${id}`,
    { decision }
  );

  return res.data;
};

// ================= GET PAPER =================
export const getPaper = (id) => axios.get(`${API}/papers/${id}`);

// ================= FINAL DECISION =================
export const makeDecision = (id, decision) =>
  axios.put(`${API}/decision/${id}/final`, { decision });

// ================= SUBMIT REVIEW =================
export const submitReview = (id, data) =>
  axios.post(`${API}/reviews/${id}/submit`, data);

// ================= ASSIGN REVIEWER =================
export const assignReviewer = (id, reviewerId) =>
  axios.post(`${API}/reviews/${id}/assign`, { reviewerId });

// ================= Submit Revision =================
export const submitRevision = (id, data) =>
  axios.put(`${API}/papers/${id}/revision`, data);