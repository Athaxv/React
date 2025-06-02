import React, { useState } from "react";
// import { motion } from "framer-motion";

function Card({cardData}) {
  const [expanded, setExpanded] = useState(false);

  const tweet = cardData.post.message;

  const renderTweetWithHashtags = (tweet) => {
    const parts = [];
    const regex = /#\w+/g;
    let lastIndex = 0;

    for (const match of tweet.matchAll(regex)) {
      const { index } = match;
      const hashtag = match[0];

      if (lastIndex < index) {
        parts.push(tweet.slice(lastIndex, index));
      }

      parts.push(
        <span key={index} className="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
          {hashtag}
        </span>
      );

      lastIndex = index + hashtag.length;
    }

    if (lastIndex < tweet.length) {
      parts.push(tweet.slice(lastIndex));
    }

    return parts;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mt-40 rounded-xl p-5  items-center space-y-4 transition-colors duration-300
        bg-white dark:bg-neutral-900
        border border-gray-200 dark:border-neutral-700"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img
            src={cardData.user.profileImage}
            className="h-10 w-10 rounded-full object-cover"
            alt="Profile"
          />
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-100 text-base">{cardData.user.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{cardData.user.title}</p>
          </div>
        </div>
        <img
          src={cardData.user.companyLogo}
          className="h-4 w-4 object-contain"
          alt="Google Logo"
        />
      </div>

      <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">
        <p className={`${expanded ? "" : "line-clamp-3"} transition-all duration-300`}>
          {renderTweetWithHashtags(tweet)}
        </p>
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-3 text-indigo-600 dark:text-indigo-400 text-sm "
          >
            Read more
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
