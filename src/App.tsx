import Navbar from "./components/Navbar";
import TravelDiary from "./components/TravelDiary";
import Gallery from "./components/Gallery";
import MyStory from "./components/MyStory";
import RecommendedPlaces from "./components/RecommendedPlaces";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen font-inter text-gray-800">
      <div id="home">
        <Navbar />
      </div>
      <div id="travel-diary">
        <TravelDiary />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="my-story">
        <MyStory />
      </div>
      <div id="recommended-places">
        <RecommendedPlaces />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
