import { motion } from "framer-motion";

interface Place {
  name: string;
  description: string;
  image: string;
  altitude?: string;
  bestTime?: string;
}

const places: Place[] = [
  {
    name: "Everest Base Camp",
    description:
      "Trek to the base of the world's highest peak, experiencing breathtaking views, Sherpa culture, and challenging high-altitude trails.",
    image:
      "https://images.unsplash.com/photo-1623127899673-39264566a100?auto=format&fit=crop&w=800&q=80",
    altitude: "5,364m",
    bestTime: "March-May, September-November",
  },
  {
    name: "Upper Mustang",
    description:
      "Explore the hidden kingdom with its ancient monasteries, cave dwellings, and dramatic desert landscapes reminiscent of Tibet.",
    image:
      "https://himalayasonfoot.com/wp-content/uploads/2024/02/Upper-Mustang-Trek-1200x540.jpg",
    altitude: "3,840m",
    bestTime: "March-October",
  },
  {
    name: "Rara Lake",
    description:
      "Visit Nepal's largest lake surrounded by snow-capped peaks and pristine forests, offering a serene escape in the remote western region.",
    image:
      "https://i0.wp.com/neostuffs.com/wp-content/uploads/2017/01/ra....-sushovan-aryal.jpg?fit=960%2C618",
    altitude: "2,990m",
    bestTime: "September-November",
  },
  {
    name: "Phoksundo Lake",
    description:
      "Discover the turquoise waters of this alpine lake in Dolpo, surrounded by dramatic mountains and rich Buddhist culture.",
    image:
      "https://www.nepalindependentguide.com/wp-content/uploads/2022/03/Phoksundo-Lake.gif",
    altitude: "3,611m",
    bestTime: "May-October",
  },
  {
    name: "Gosaikunda Lake",
    description:
      "A sacred high-altitude lake offering stunning mountain views and religious significance, perfect for spiritual and adventure seekers.",
    image:
      "https://www.nepalhightrek.com/wp-content/uploads/2023/10/goshaikunda-lake-trek.jpg",
    altitude: "4,380m",
    bestTime: "March-May, September-November",
  },
  {
    name: "Manaslu Circuit",
    description:
      "Less crowded alternative to Annapurna, offering diverse landscapes, authentic village experiences, and challenging passes.",
    image:
      "https://cdn.bookatrekking.com/data/images/2019/11/manaslu-circuit-trek-all-you-need-to-know1.webp",
    altitude: "5,106m (Larkya La Pass)",
    bestTime: "March-May, September-November",
  },
];

const RecommendedPlaces = () => {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-montserrat">
            Places I Recommend
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Hidden Gems of Nepal That Will Take Your Breath Away
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <motion.div
              key={place.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {place.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {place.description}
                </p>
                <div className="space-y-2">
                  {place.altitude && (
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-semibold mr-2">Altitude:</span>
                      {place.altitude}
                    </div>
                  )}
                  {place.bestTime && (
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-semibold mr-2">Best Time:</span>
                      {place.bestTime}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedPlaces;
