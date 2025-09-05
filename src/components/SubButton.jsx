import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ButtonList({ onSelect }) {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const items = [
    { label: "OEM", path: "/select" },
    { label: "System Integrator", path: "/select" },
    { label: "End User", path: "/select" },
    { label: "Gov. Tender", path: "/select" },
    { label: "Dealer", path: "/select" },
    { label: "Channel Partner", path: "/select" },
    { label: "Sub Dealer", path: "/select" },
  ];

  const handleClick = (e, item, index) => {
    e.stopPropagation();
    setSelectedIndex(index);
    if (onSelect) onSelect(item.label);
    navigate(item.path);
  };

  return (
    <div className="bg-gray-600 rounded-lg border border-gray-500 p-4">
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => handleClick(e, item, index)}
            className={`w-full text-left px-6 py-2 rounded-xl border transition-all 
              ${selectedIndex === index 
                ? "bg-green-200 text-white border-green-200 shadow-md" 
                : "bg-black/50 dark:bg-black/50 text-white border-gray-500 hover:bg-green-500 dark:hover:bg-black/20"}
            `}
          >
            <p className="font-semibold">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
