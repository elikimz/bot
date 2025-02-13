import { useState } from "react";
import { motion } from "framer-motion";

const loveMessages = [
  "Kim loves Faith more than the stars love the night sky ✨💖",
  "Every heartbeat of Kim sings Faith’s name 🎶💘",
  "Faith, you're the magic in Kim's life, the sparkle in every dream ✨💕",
  "Kim + Faith = Forever and Always 💑💞",
  "No matter what, Kim's love for Faith grows stronger every second ⏳❤️"
];

const floatingHeartAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: [10, -10, 10], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
};

const spinningHeartAnimation = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
  transition: { duration: 5, repeat: Infinity, ease: "linear" },
};

const circleTextAnimation = {
  animate: { rotate: 360 },
  transition: { duration: 10, repeat: Infinity, ease: "linear" },
};

export default function KimLovesFaith() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const generateLoveLink = () => {
    setShowMessage(true);
  };

  const nextMessage = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % loveMessages.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-pink-300 p-6 relative overflow-hidden text-center">
      {/* Floating Hearts Animation */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500 text-2xl md:text-3xl lg:text-4xl"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          {...floatingHeartAnimation}
        >
          ❤️ Kim & Faith ❤️
        </motion.div>
      ))}

      {/* Spinning Heart Centerpiece */}
      <motion.div
        className="text-red-600 text-4xl md:text-6xl lg:text-8xl mb-6"
        {...spinningHeartAnimation}
      >
        ❤️ Kim & Faith ❤️
      </motion.div>
      
      {/* Circular Moving Text */}
      <motion.div
        className="absolute text-white text-sm md:text-lg lg:text-xl font-bold"
        style={{ top: "20%", left: "50%", transform: "translate(-50%, -50%)" }}
        {...circleTextAnimation}
      >
        💕 Happy Valentine Love Faiii 💕
      </motion.div>
      
      {!showMessage ? (
        <button
          onClick={generateLoveLink}
          className="bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-red-700 transition-all shadow-lg text-lg md:text-xl"
        >
          Click for Kim's Love Confession 💌
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 md:p-6 bg-white shadow-lg rounded-lg text-center max-w-xs md:max-w-sm lg:max-w-md relative"
        >
          <motion.div
            className="text-red-500 w-8 md:w-10 h-8 md:h-10 mx-auto mb-2"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            ❤️ Kim & Faith ❤️
          </motion.div>
          <div className="text-lg md:text-xl font-semibold text-red-600">{loveMessages[messageIndex]}</div>
          <button
            onClick={nextMessage}
            className="mt-4 bg-gray-700 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-gray-800 transition-all"
          >
            Next Message ➡️
          </button>
        </motion.div>
      )}
    </div>
  );
}
