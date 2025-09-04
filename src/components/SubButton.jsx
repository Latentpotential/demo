import { useNavigate } from "react-router-dom";

export default function ButtonList({ onSelect }) {
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

  const handleClick = (e, item) => {
    e.stopPropagation();
    if (onSelect) onSelect(item.label);
    navigate(item.path);
  };

  return (
    <div className="dark:bg-black/50 rounded-lg">
      <div className="flex flex-col items-start dark:bg-black/50 rounded-lg">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => handleClick(e, item)}
            className="w-full text-left px-8 py-4 transition bg-black/30 text-white hover:bg-black/50"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
