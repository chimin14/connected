import { NextResponse } from "next/server";

let reviews = [
  { name: "John Doe", rating: 5, comment: "Great app!", date: "2025-01-01" },
];

// GET: Fetch all reviews
export async function GET() {
  return NextResponse.json(reviews);
}

// POST: Add a new review
export async function POST(req: Request) {
  const newReview = await req.json();
  newReview.date = new Date().toISOString().split("T")[0]; // Add today's date
  reviews.push(newReview);
  return NextResponse.json({ message: "Review added!", reviews });
}
