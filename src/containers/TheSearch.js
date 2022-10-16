import TheHeader from "components/TheHeader/TheHeader";
import SearchPageCard from "components/TheSearch/SearchCard";
import { SEARCHCARDS } from "data/index";
function Search() {
  return (
    <div className="bg-[#121212] text-white overflow-y-scroll overflow-x-hidden">
      <TheHeader search={true} />

      <div className="py-0 md:px-8 md:pb-8 md:mb-[95px] p-4 mb-[180px] mt-6">
        <h2 className="text-2xl font-bold">Browse all</h2>
        <div className="grid md:gap-6 md:grid-cols-search pt-4 gap-4 grid-cols-searchMedium">
          {SEARCHCARDS.map((card) => {
            return (
              <SearchPageCard
                key={card.title}
                cardData={{
                  bgcolor: card.bgcolor,
                  title: card.title,
                  imgurl: card.imgurl,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
