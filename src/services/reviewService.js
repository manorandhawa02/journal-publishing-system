import API from "./api";

// submit review
export const submitReview = async (
  paperId,
  reviewData
) => {
  const res = await API.post(
    `/review/${paperId}`,
    reviewData
  );

  return res.data;
};

// get reviews
export const getReviews = async (paperId) => {
  const res = await API.get(
    `/review/${paperId}`
  );

  return res.data;
};