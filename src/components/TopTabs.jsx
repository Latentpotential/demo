import React, { useState } from "react";
import { motion } from "framer-motion";

export default function InlineTabs() {
  // Tab Data
  const tabs = [
    {
      title : "All",
      val : "175736"
    },
    {
      title : "All",
      val : "175736"
    },
    {
      title : "All",
      val : "175736"
    },
    {
      title : "All",
      val : "175736"
    },
    {
      title : "All",
      val : "175736"
    },
    {
      title : "All",
      val : "175736"
    },
    {
      title : "All",
      val : "175736"
    },
    {
      title : "All",
      val : "175736"
    },
    {
      title : "All",
      val : "175736"
    },
  ]

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-2xl mb-10">
      <div className="flex justify-between space-x-5">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;

          return (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              initial={false}
              animate={{
                backgroundColor: isActive ? "#01A85C" : "#E0E5ED",
                color: isActive ? "#FFFFFF" : "#374151",
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-md font-semibold"
            >
              <span>{tab.title}</span>
              <span>{tab.val}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

