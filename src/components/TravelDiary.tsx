import { FaStar, FaPlay, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";

interface TravelCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  videoUrl: string;
  location: string;
  date: string;
}

const TravelCard = ({
  image,
  title,
  description,
  rating,
  videoUrl,
  location,
  date,
}: TravelCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl flex flex-col h-full">
        <div className="relative group">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 text-gray-800 p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200"
            >
              <FaPlay className="w-6 h-6" />
            </a>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center space-x-1">
            <FaStar className="text-yellow-400 w-4 h-4" />
            <span className="text-sm font-bold">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3 font-medium">
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt className="w-4 h-4 text-red-500" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaCalendarAlt className="w-4 h-4 text-blue-500" />
              <span>{date}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 font-montserrat tracking-tight">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed flex-grow">
            {description}
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 mt-auto pt-4">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 text-sm font-medium"
            >
              <FaPlay className="w-3.5 h-3.5" />
              <span>Watch Video</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full lg:w-auto text-gray-500 hover:text-gray-700 text-sm font-medium text-center lg:text-right whitespace-nowrap"
            >
              Read More →
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        travel={{ image, title, description, rating, videoUrl, location, date }}
      />
    </>
  );
};

const TravelDiary = () => {
  const travels = [
    {
      image: "/img/dairy/sailung.jpeg",
      title: "Sailung",
      description:
        "Sailung, at 3,146 meters, is a beautiful hilltop in Nepal with panoramic views of over 100 Himalayan peaks, including Everest, Annapurna, and Langtang. The name Sailung means a hundred hillocks, reflecting its rolling landscapes. It is a spiritual site for both Hindus and Buddhists, with the Sailungeshwar Mahadev Temple at its peak. The area changes with the seasons, from green meadows to golden hills and snowy landscapes. Ideal for hiking, photography, and cultural exploration, Sailung offers peaceful surroundings, stunning sunrises, rhododendron forests, and a glimpse into the rich heritage of the Tamang and Sherpa communities.",
      rating: 4.8,
      videoUrl: "https://youtu.be/baG2Y_2geYQ?si=u8jsfUV6e9h1ynLg",
      location: "Nepal, Dolakha",
      date: "June 2023",
    },
    {
      image: "/img/travel4.jpeg",
      title: "Pachphokhari",
      description:
        "Panchpokhari, meaning five lakes, is a sacred and scenic destination in Nepal, located in Sindhupalchok district at an altitude of 4,100 meters. It is a revered pilgrimage site for both Hindus and Buddhists, especially during Janai Purnima. The five pristine glacial lakes are surrounded by rugged mountains and untouched natural beauty. The trek to Panchpokhari takes you through dense forests, traditional villages, and diverse landscapes. It offers breathtaking Himalayan views, including Jugal, Langtang, and Dorje Lakpa ranges. With its serene environment and spiritual significance, Panchpokhari is perfect for trekking, meditation, and nature lovers seeking a peaceful retreat.",
      rating: 4.6,
      videoUrl: "https://youtu.be/NA4VwMZmCIQ?si=xylxYcQyR2ALKpz8",
      location: "Nepal , Sindhupalchok ",
      date: "March 2023",
    },
    {
      image: "/img/dairy/tilicho.jpeg",
      title: "Tilicho",
      description:
        "Tilicho Lake, located at 4,919 meters in the Annapurna region, is one of the highest lakes in the world. Surrounded by snow-capped peaks, it offers breathtaking views of the Annapurna, Dhaulagiri, and Nilgiri ranges. The trek to Tilicho passes through diverse landscapes, from lush forests to barren, rocky terrain. The lake holds religious significance for Hindus and is mentioned in ancient scriptures. Its deep blue waters reflect the surrounding mountains, creating a stunning sight. The journey is challenging but rewarding, making it a must-visit for trekkers, adventure seekers, and those looking to experience the beauty of the Himalayas.",
      rating: 4.9,
      videoUrl: "https://youtu.be/LStw_oQrGxA?si=ejqIybS7l19smzSF",
      location: "Nepal, Manang",
      date: "August 2023",
    },
    {
      image: "/img/dairy/langtang.jpeg",
      title: "Langtang",
      description:
        "Langtang is a stunning Himalayan region in Nepal, known for its breathtaking landscapes, diverse wildlife, and rich Tamang culture. Located north of Kathmandu, it offers a mix of dense forests, alpine meadows, and snow-capped peaks. The Langtang Valley Trek takes you through traditional villages, past rivers, and into the heart of Langtang National Park, home to red pandas, Himalayan tahr, and rare bird species. The highlight is Kyanjin Gompa, a sacred Buddhist monastery with panoramic mountain views. With its serene beauty, moderate trekking routes, and warm hospitality, Langtang is a perfect destination for nature lovers and cultural explorers.",
      rating: 4.7,
      videoUrl: "https://www.youtube.com/@explorethroughmycamera",
      location: "Nepal, Rasuwa",
      date: "October 2023",
    },
    {
      image: "/img/dairy/abc.JPG",
      title: "Annapurna Base Camp",
      description:
        "Annapurna Base Camp, at 4,130 meters, is one of Nepal's most popular trekking destinations, offering stunning views of Annapurna, Machapuchare, Hiunchuli, and other peaks. The trek takes you through lush forests, terraced fields, and traditional Gurung and Magar villages. Along the way, natural hot springs in Jhinu Danda provide a relaxing break. The journey culminates at the base camp, surrounded by towering snow-capped peaks. With its diverse landscapes, rich culture, and breathtaking scenery, Annapurna Base Camp is a rewarding adventure for trekkers seeking a mix of challenge and beauty in the heart of the Himalayas.",
      rating: 4.7,
      videoUrl: "https://www.youtube.com/@explorethroughmycamera",
      location: "Nepal, Kaski",
      date: "October 2023",
    },
    {
      image: "/img/dairy/kalinchowk.jpg",
      title: "Kalinchowk",
      description:
        "Kalinchowk, at 3,842 meters, is a scenic hilltop in the Dolakha district, known for the Kalinchowk Bhagwati Temple, a sacred Hindu shrine. It offers panoramic views of the Himalayas, including Everest, Langtang, and Gaurishankar. The area is famous for its snowfall in winter, making it a popular snow-play destination near Kathmandu. The journey to Kalinchowk passes through dense rhododendron forests and charming villages. A cable car ride provides easy access to the temple. With its spiritual significance, breathtaking views, and winter charm, Kalinchowk is perfect for pilgrims, trekkers, and those looking for a quick Himalayan getaway.",
      rating: 4.7,
      videoUrl: "https://www.youtube.com/@explorethroughmycamera",
      location: "Nepal, Dolakha",
      date: "October 2023",
    },
    {
      image: "/img/dairy/manang.jpeg",
      title: "Manang",
      description:
        "Manang is a beautiful district located in the Annapurna region of Nepal, known for its rugged landscapes, traditional villages, and breathtaking mountain views. The region is home to a rich Tibetan-influenced culture and offers stunning views of peaks like Annapurna, Gangapurna, and Machapuchare. The trek to Manang, part of the Annapurna Circuit, takes you through diverse terrain, from subtropical forests to high-altitude deserts. Manang is also known for its acclimatization spots and the Gangapurna Lake, surrounded by majestic mountains. It’s a great destination for trekkers seeking adventure, culture, and natural beauty.",
      rating: 4.7,
      videoUrl: "https://www.youtube.com/@explorethroughmycamera",
      location: "Nepal, Manang",
      date: "October 2023",
    },
    {
      image: "/img/dairy/tinjure.jpeg",
      title: "Tinjure",
      description:
        "Tinjure is a scenic village located in the eastern part of Nepal, known for its vibrant rhododendron forests and stunning views of the eastern Himalayas. Situated near the border of Sankhuwasabha and Ilam districts, Tinjure is a peaceful getaway that offers a combination of natural beauty and cultural richness. The area is popular for trekking, particularly during the spring season when the rhododendron blooms in full color. The region also holds spiritual significance for the Tamang people. Tinjure’s remote location, lush landscapes, and breathtaking mountain views make it an ideal destination for nature lovers and adventurers.",
      rating: 4.7,
      videoUrl: "https://www.youtube.com/@explorethroughmycamera",
      location: "Nepal, Sankhuwasabha",
      date: "October 2023",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat tracking-tight">
            My Travel Diary
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore my journey through different destinations, capturing moments
            and sharing experiences from around the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {travels.map((travel, index) => (
            <TravelCard key={index} {...travel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelDiary;
