function SearchPageCard({ cardData }) {
  return (
    <div
      key={cardData.title}
      className="overflow-hidden relative w-full border-none rounded-lg after:block after:pb-[100%]"
      style={{ backgroundColor: `${cardData.bgcolor}` }}
    >
      <div className="absolute w-full h-full bg-search-card-gradient">
        <img src={cardData.imgurl} alt={cardData.title} />
        <h2 className="text-2xl font-bold">{cardData.title}</h2>
      </div>
    </div>
  );
}

export default SearchPageCard;
