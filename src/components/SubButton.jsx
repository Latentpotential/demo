import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonList() {
  const navigate = useNavigate();
  const items = [
    "OEM",
    "System Integrator",
    "End User",
    "Gov. Tender",
    "Dealer",
    "Channel Partner",
    "Sub Dealer",
  ];

  const STORAGE_KEY = "buttonSelections:v1";

  const [selectedItems, setSelectedItems] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return Array.isArray(saved) && saved.length === items.length
        ? saved
        : Array(items.length).fill(false);
    } catch {
      return Array(items.length).fill(false);
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedItems));
  }, [selectedItems]);

  const toggleItem = (index) => {
    setSelectedItems((prev) => {
      const updated = prev.map((v, i) => (i === index ? !v : v));

      if (!prev[index]) {
        navigate("/select");
      }
      return updated;
    });
  };

  return (
    <div className="dark:bg-black/50 rounded-lg">
      <div className=" flex flex-col items-start dark:bg-black/50 rounded-lg">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleItem(index)}
            className={`w-full text-left px-8 py-4 transition hover:bg-black/50
              ${
                selectedItems[index]
                  ? "bg-black/30 text-white"
                  : "bg-black/30 text-white"
              }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
