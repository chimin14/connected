"use client";

import { useEffect, useState } from "react";

type Review = {
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  // Fetch reviews when the component loads
  useEffect(() => {
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Failed to load reviews:", err));
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    if (response.ok) {
      const data = await response.json();
      setReviews(data.reviews); // Update reviews list
      setNewReview({ name: "", rating: 0, comment: "" });
    } else {
      console.error("Failed to save review");
    }
  };

  return (
    <div className="bg-customCyan flex flex-col items-center min-h-screen p-5 pb-15">
      <div className="w-screen p 10 12 12 12 flex flex-col p-0 bg-footerCyan text-customCyan font-semibold italic text-start">
        <h1 className="py-5 text-3xl text-center font-bold text-yellow-500">Reviews</h1>

        {/* Display Reviews */}
        <div className="flex flex-col gap-3 mt-10 pt-2 pb-5 p-20">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-white p-4 rounded-md"
            >
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="w-7 h-7 text-center rounded-full bg-yellow-500">
                    {review.name.charAt(0)}
                  </div>
                  <span>{review.name}</span>
                </div>
                <div className="flex p-1 gap-1 text-yellow-500">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={i < review.rating ? "text-yellow-500" : ""}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div>{review.comment}</div>
              <div className="flex justify-between">
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Review Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 bg-gray-300 pt-4 p-20 mt-10 rounded-md pb-4"
        >
          <h2 className="text-lg">Add Your Review</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) =>
              setNewReview((prev) => ({ ...prev, name: e.target.value }))
            }
            className="p-2 rounded bg-white text-black focus:outline-none"
            required
          />
          <select
            value={newReview.rating}
            onChange={(e) =>
              setNewReview((prev) => ({
                ...prev,
                rating: parseInt(e.target.value, 10),
              }))
            }
            className="p-2 rounded bg-customCyan text-white focus:outline-none"
            required
          >
            <option value="0">Select Rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 && "s"}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Your Comment"
            value={newReview.comment}
            onChange={(e) =>
              setNewReview((prev) => ({ ...prev, comment: e.target.value }))
            }
            className="p-2 rounded bg-white text-yellow-500 focus:outline-none"
            rows={4}
            required
          />
          <button
            type="submit"
            className="p-2 bg-yellow-500 hover:bg-customCyan rounded text-white"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
