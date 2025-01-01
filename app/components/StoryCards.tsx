import { useRouter } from "next/navigation";

type StoryCardProps = {
  id: string;
  photo: string;
  description: string;
};

const StoryCard: React.FC<StoryCardProps> = ({ id, photo, description }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/stories/${id}`)} // Navigate to the dynamic route
      className="cursor-pointer shadow-lg hover:shadow-xl transition rounded overflow-hidden"
    >
      <img src={photo} alt={description} className="w-full h-64 object-cover" />
      <div className="p-4 bg-white">
        <p className="text-lg font-bold text-customCyan">{description}</p>
      </div>
    </div>
  );
};

export default StoryCard;
