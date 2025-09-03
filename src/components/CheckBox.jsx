import { Check } from "lucide-react";

export default function CheckBox({ id, checked, onToggle, ariaLabel }) {
  const handleClick = () => onToggle?.(id);

  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      onToggle?.(id);
    }
  };

  return (
    <div
      role="checkbox"
      tabIndex={0}
      aria-checked={!!checked}
      aria-label={ariaLabel ?? `checkbox-${id}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`w-6 h-6 flex items-center justify-center border-2 rounded cursor-pointer transition
        ${checked ? "bg-gray-500 border-gray-500  text-white" : "border-gray-400 dark:border-black"}`}
    >
      {checked && <Check size={16} className="text-white" />}
    </div>
  );
}
