import {
  FaStar,
  FaPlay,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  travel: {
    image: string;
    title: string;
    description: string;
    rating: number;
    videoUrl: string;
    location: string;
    date: string;
  };
}

const Modal = ({ isOpen, onClose, travel }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:px-24 lg:px-32"
      onClick={onClose}
    >
      {/* Backdrop with fade */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[3px]
          animate-fadeIn"
      />

      {/* Modal Content */}
      <div
        style={{ maxWidth: "900px" }}
        className="relative bg-white/95 w-[85%] md:w-[600px] lg:w-[900px] mx-auto rounded-2xl overflow-hidden shadow-2xl
        scale-100 hover:scale-[1.02] transition-all duration-300 ease-out
        animate-modalSlideIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with fade and scale */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white z-10 hover:opacity-80 
          transition-all duration-300 hover:scale-110"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-56 md:h-72">
          <img
            src={travel.image}
            alt={travel.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

          {/* Content Over Image with slide up */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-2 font-montserrat">
              {travel.title}
            </h3>
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="w-3 h-3 text-red-400" />
                <span className="text-xs md:text-sm">{travel.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaCalendarAlt className="w-3 h-3 text-blue-400" />
                <span className="text-xs md:text-sm">{travel.date}</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/90 text-gray-800 px-2 py-0.5 rounded-lg">
                <FaStar className="w-3 h-3 text-yellow-400" />
                <span className="text-xs md:text-sm font-bold">
                  {travel.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section with fade in */}
        <div className="p-4 md:p-5">
          <p className="text-gray-600 leading-relaxed mb-4 text-xs md:text-sm">
            {travel.description}
          </p>
          <div className="flex justify-end">
            <a
              href={travel.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 bg-gradient-to-r from-red-600 to-red-700 
              text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-800 
              transition-all duration-300 text-xs md:text-sm font-medium hover:scale-105"
            >
              <FaPlay className="w-3 h-3" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
