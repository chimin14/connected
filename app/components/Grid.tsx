import Card from "./Card";

type GridProps = {
  category: string;
  items: { title: string; description: string; buttonText: string; photo: string; link: string }[];
};

export default function Grid({ category, items }: GridProps) {
  return (
    <section className="my-8 px-4">
      {/* Category Header */}
      <h2 className="text-2xl font-bold text-center mb-6">{category}</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            buttonText={item.buttonText}
            photo={item.photo}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
