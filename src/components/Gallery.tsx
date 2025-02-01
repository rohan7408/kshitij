import { useState, useEffect } from "react";

const Gallery = () => {
  const galleryImages = [
    {
      image: "img/gallery/ga (1).jpeg",
    },
    {
      image: "img/gallery/ga (1).jpg",
    },
    {
      image: "img/gallery/ga (2).JPG",
    },
    {
      image: "img/gallery/ga (3).JPG",
    },
    {
      image: "img/gallery/ga (4).JPG",
    },
    {
      image: "img/gallery/ga (5).jpg",
    },
    {
      image: "img/gallery/ga (2).jpeg",
    },
    {
      image: "img/gallery/ga (3).jpeg",
    },
    {
      image: "img/gallery/ga (4).jpeg",
    },
    {
      image: "img/gallery/ga (5).jpeg",
    },
    {
      image: "img/gallery/ga (6).jpeg",
    },
    {
      image: "img/gallery/ga (7).jpeg",
    },
    {
      image: "img/gallery/ga (8).jpeg",
    },
    {
      image: "img/gallery/ga (9).jpeg",
    },
    {
      image: "img/gallery/ga (10).jpeg",
    },
    {
      image: "img/gallery/ga (11).jpeg",
    },
    {
      image: "img/gallery/ga (12).jpeg",
    },
    {
      image: "img/gallery/ga (13).jpeg",
    },
    {
      image: "img/gallery/ga (14).jpeg",
    },
    {
      image: "img/gallery/ga (15).jpeg",
    },
    {
      image: "img/gallery/ga (16).jpeg",
    },
    {
      image: "img/gallery/ga (17).jpeg",
    },
    {
      image: "img/gallery/ga (18).jpeg",
    },
    {
      image: "img/gallery/ga (19).jpeg",
    },
    {
      image: "img/gallery/ga (20).jpeg",
    },
    {
      image: "img/gallery/ga (21).jpeg",
    },
    {
      image: "img/gallery/ga (22).jpeg",
    },
    {
      image: "img/gallery/ga (23).jpeg",
    },
    {
      image: "img/gallery/ga (24).jpeg",
    },
    {
      image: "img/gallery/ga (25).jpeg",
    },
    {
      image: "img/gallery/ga (26).jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide effect with decreased duration (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prev) =>
          prev === galleryImages.length - 1 ? 0 : prev + 1
        );
        setTimeout(() => setIsAnimating(false), 100);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isAnimating, galleryImages.length]);

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat">
            Travel Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of moments captured during my adventures around the
            world
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[600px] overflow-hidden rounded-2xl">
          {/* Images */}
          <div
            className="absolute inset-0 flex transition-all duration-500 ease-in-out transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className={`min-w-full h-full relative transition-transform duration-500
                  ${currentIndex === index ? "scale-100" : "scale-[0.95]"}`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                {/* Gradient Overlay with fade */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                    transition-opacity duration-500
                    ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
