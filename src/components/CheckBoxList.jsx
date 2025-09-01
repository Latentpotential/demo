import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBox from "./CheckBox";

export default function CheckBoxList() {
  const navigate = useNavigate();
  const items = [
    "All",
    "OEM",
    "System Integrator",
    "End User",
    "Gov. Tender",
    "Dealer",
    "Channel Partner",
    "Sub Dealer",
  ];

  const STORAGE_KEY = "checkboxSelections:v1";


  const [checkedItems, setCheckedItems] = useState(() => {
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (index) => {
    setCheckedItems((prev) => {
      const updated = prev.map((v, i) => (i === index ? !v : v));

      if (!prev[index]) {
        navigate("/select");
      }
      return updated;
    });
  };

  return (
    <div className="p-4 space-y-2 flex flex-col items-start">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex w-full items-center border-t border-gray-100 gap-3 p-2"
        >
          <CheckBox
            checked={checkedItems[index]}
            onToggle={() => toggleItem(index)}
          />
          <span className="text-lg">{item}</span>
        </div>
      ))}
    </div>
  );
}
