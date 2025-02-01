import { motion } from "framer-motion";

const MyStory = () => {
  return (
    <section className="px-4 py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-montserrat">
            My Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Where Technology Meets Adventure
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:pr-6"
          >
            <p className="text-gray-700 leading-relaxed text-base md:text-md lg:text-lg">
              As a CSIT student, my love for technology drives me to spend hours
              coding, debugging, and solving complex problems. But beyond the
              digital world, travel holds a special place in my heart. My first
              adventure was to Annapurna Base Camp (ABC), where I was awe-struck
              by the towering peaks and deeply moved by the warmth and kindness
              of the people I met along the way.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-md lg:text-lg">
              After ABC, I explored places like Taplejung, Sailung,
              Panchpokhari, Tinjurey, Tilicho, Langtang, and Kalinchowk. Each
              destination offered something unique—breathtaking landscapes, rich
              cultures, and unforgettable encounters with locals. Everywhere I
              went, I was welcomed with open arms, and these experiences left a
              lasting impression on me.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-md lg:text-lg">
              Travel has taught me that while technology connects us through
              innovation, it's the human connections that truly bind us
              together. As much as I love technology, I've realized that some of
              life's most profound lessons come from the people I meet and the
              places I visit, making every journey an invaluable part of who I
              am.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-md lg:text-lg">
              As I continue to balance my love for technology and travel, I've
              come to appreciate how both passions complement each other. Coding
              gives me the tools to understand and shape the digital world,
              while travel broadens my perspective, offering lessons that no
              textbook can teach. Whether it's a challenging coding problem or a
              new cultural experience, both realms inspire me to grow and push
              my boundaries, constantly learning from the world around me. Each
              step I take, whether in the digital space or on a mountain trail,
              feels like another part of my ongoing journey.
            </p>
          </motion.div>

          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 lg:gap-6 sticky top-8"
          >
            <div className="space-y-4 lg:space-y-6">
              <div className="h-[280px] lg:h-[320px] overflow-hidden rounded-2xl shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="/img/dairy/langtang.jpeg"
                  alt="Travel Memory 1"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="h-[180px] lg:h-[220px] overflow-hidden rounded-2xl shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="/img/dairy/manang.jpeg"
                  alt="Travel Memory 2"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6 pt-8">
              <div className="h-[180px] lg:h-[220px] overflow-hidden rounded-2xl shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="/img/dairy/sailung.jpeg"
                  alt="Travel Memory 3"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="h-[280px] lg:h-[320px] overflow-hidden rounded-2xl shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                <img
                  src="/img/dairy/tilicho.jpeg"
                  alt="Travel Memory 4"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
