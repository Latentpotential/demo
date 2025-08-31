
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CheckBox({ checked, onToggle }) {


  return (
    <div
      onClick={onToggle}
      className={`w-6 h-6 flex items-center justify-center border-2 rounded cursor-pointer transition
        ${checked ? "bg-gray-500 border-gray-500 text-white" : "border-gray-400"}`}
    >
      {checked && <Check size={16} className="text-white" />}
      
    </div>
  );
}
