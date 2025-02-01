import TravelDiary from "../components/TravelDiary";
import Gallery from "../components/Gallery";
import MyStory from "../components/MyStory";

const Home = () => {
  return (
    <div className="min-h-screen font-inter text-gray-800">
      <TravelDiary />
      <Gallery />
      <MyStory />
    </div>
  );
};

export default Home;
