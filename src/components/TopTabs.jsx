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
      title : "Lead Bank",
      val : "3871"
    },
    {
      title : "To-be qualified",
      val : "3160"
    },
    {
      title : "Qualified",
      val : "4261"
    },
    {
      title : "Disqualified",
      val : "158123"
    },
    {
      title : "Win",
      val : "7855"
    },
    {
      title : "Lost",
      val : "3036"
    },
    {
      title : "Qualified Close",
      val : "175736"
    },
    {
      title : "No Response",
      val : "1026"
    },
  ]

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-2xl mb-10">
      <div className="flex justify-between space-x-4">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;

          return (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              initial={false}
              animate={{
                backgroundColor: isActive ? "#01A85C" : "#F8FAFD",
                color: isActive ? "#FFFFFF" : "#A5AEBC",
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between text-xs  gap-2 border border-gray-200 px-4 py-2 rounded-lg font-semibold"
            >
              <span className="whitespace-nowrap">{tab.title}</span>
              <motion.span key={index}
              onClick={() => setActiveTab(index)}
              initial={false}
              animate={{
                backgroundColor: isActive ? "#E1FFF0" : "#A5AEBC",
                color: isActive ? "#01A85C" : "#FFFFFF",
              }}
              transition={{ duration: 0.3 }}
              className="p-1 text-sm rounded-lg">{tab.val}  
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

