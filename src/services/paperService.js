import axios from "axios";

const API = "http://localhost:5000/api"; // change if needed

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