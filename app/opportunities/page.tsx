"use client";

import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import Sidebar from "../components/Sidebar";

type Opportunity = {
  title: string;
  description: string;
  buttonText: string;
  photo: string;
  link: string;
};

type OpportunitiesData = {
  [category: string]: Opportunity[];
};

export default function OpportunitiesPage() {
  const [data, setData] = useState<OpportunitiesData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch("/opportunities.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch opportunities data");
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!data) return <p className="text-center text-gray-700">Loading...</p>;

  // Extract categories
  const categories = Object.keys(data);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/images/opportunities.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar
        categories={categories}
        onCategorySelect={(category) => setSelectedCategory(category)}
      />

      {/* Main Content */}
      <main className="flex-grow pt-28 px-10 relative z-10">
        <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">
          Opportunities
        </h1>

        {/* Grids for Each Category (Limited to 6 Cards) */}
        {categories.map((category) => (
          <Grid
            key={category}
            category={category}
            items={data[category].slice(0, 6)} // Show only the first 6 items
          />
        ))}
      </main>

      {/* Footer */}
      <Footer />

      {/* Popup */}
      {selectedCategory && (
        <Popup
          category={selectedCategory}
          items={data[selectedCategory]}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}
