import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonList() {
  const navigate = useNavigate();

  const items = [
    { label: "OEM", path: "/select" },
    { label: "System Integrator", path: "/select" },
    { label: "End User", path: "/select" },
    { label: "Gov. Tender", path: "/select" },
    { label: "Dealer", path: "/select" },
    { label: "Channel Partner", path: "/select" },
    { label: "Sub Dealer", path: "/select" },
  ];

  return (
    <div className="dark:bg-black/50 rounded-lg">
      <div className="flex flex-col items-start dark:bg-black/50 rounded-lg">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="w-full text-left px-8 py-4 transition bg-black/30 text-white hover:bg-black/50"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
