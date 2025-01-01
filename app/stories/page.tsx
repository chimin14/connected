"use client";

import { useEffect, useState } from "react";
import StoryCard from "../components/StoryCards";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Story = {
  id: string;
  photo: string;
  description: string;
};

const StoriesPage = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/stories.json")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch stories:", err);
        setError("Failed to fetch stories. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-20">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">Stories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoriesPage;
