import { useState, useRef, useEffect } from "react";

type SidebarProps = {
  categories: string[];
  onCategorySelect: (category: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ categories, onCategorySelect }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-24 right-8 z-20 bg-yellow-500 text-white font-bold px-4 py-2 rounded hover:bg-yellow-600"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        onMouseEnter={() => setIsSidebarOpen(true)} // Open on hover
      >
        Categories
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full bg-customCyan shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-64 z-30`}
        onMouseLeave={() => setIsSidebarOpen(false)} // Close on hover leave
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-yellow-500">Categories</h2>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className="text-yellow-500 font-semibold hover:underline"
                  onClick={() => {
                    onCategorySelect(category);
                    setIsSidebarOpen(false); // Close on category click
                  }}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
