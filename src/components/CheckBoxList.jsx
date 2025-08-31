import React, { useState } from "react";
import CheckBox from "./CheckBox";

export default function CheckBoxList() {
  const items = ["All", "OEM", "System Integrator", "End User", "Gov. Tender", "Dealer", "Channel Partner", "Sub Dealer"];
  const [checkedItems, setCheckedItems] = useState(
    Array(items.length).fill(false)
  );

  const toggleItem = (index) => {
    setCheckedItems((prev) =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  };

  return (
    <div className="p-4 space-y-2 flex flex-col items-start">
      {items.map((item, index) => (
        <div key={index} className="flex w-full items-center border-t border-gray-100 gap-3 p-2">
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
