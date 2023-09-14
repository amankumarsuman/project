import useEmblaCarousel from "embla-carousel-react";

import "./NewsFeed.scss";
import NewsCard from "./NewsCard";
import appleLogo from "../../../assets/images/appleLogo.png";

const rows = [
  {
    title: "This is awesome!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et, vel assumenda inventore",
    logo: appleLogo,
  },
  {
    title: "The best tutorial!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et, vel assumenda inventore",
    logo: appleLogo,
  },
  {
    title: "Revenue increased by 50%",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et, vel assumenda inventore",
    logo: appleLogo,
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et, vel assumenda inventore",
    logo: appleLogo,
  },
  {
    title: "The best overall service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et, vel assumenda inventore",
    logo: appleLogo,
  },
];

const NewsFeed = () => {
  // 2. initialize EmblaCarousel using the custom hook
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
  });

  return (
    // 3. set ref as emblaRef.
    // make sure we have overflow-hidden and flex so that it displays properly
    <div className="newsFeedComponent" ref={emblaRef}>
      <div className="newsFeedContainer">
        {rows.map((row, i) => (
          // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
          // for mobile devices we use 90% width
          <div key={i} className="newsFeedItem">
            <NewsCard {...row} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewsFeed;
