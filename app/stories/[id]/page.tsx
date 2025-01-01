"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Story = {
  id: string;
  photo: string;
  description: string;
  content: string;
  name: string;
};

export default function StoryPage() {
  const { id } = useParams(); // Extract the `id` from the URL
  const [story, setStory] = useState<Story | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/stories.json`) // Fetch all stories
      .then((res) => res.json())
      .then((data: Story[]) => {
        const foundStory = data.find((story) => story.id === id); // Find the story by ID
        if (foundStory) {
          setStory(foundStory);
        } else {
          setError("Story not found.");
        }
      })
      .catch(() => setError("Failed to fetch story."));
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!story) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-20">
        <h1 className="text-4xl font-bold text-center text-customCyan mb-8">
          {story.description}
        </h1>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={story.photo}
              alt={story.description}
              className="w-full lg:w-80 rounded shadow-lg"
            />
            <p className="text-center text-gray-700 font-bold text-xl mt-4">
              {story.name}
            </p>
          </div>

          {/* Text Section */}
          <div className="flex-grow">
            <p className="text-lg text-gray-700 leading-relaxed font-style: italic">{story.content}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
