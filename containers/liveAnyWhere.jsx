import MeduimCard from "../components/MeduimCard";

const LiveAnyWhere = ({ cardsData }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold py-8">Live AnyWhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
        {cardsData.map((item) => (
          <MeduimCard key={item.img} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default LiveAnyWhere;
