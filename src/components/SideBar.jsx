import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  BrickWallShield,
  BusFront,
  CalendarX,
  Car,
  ChartCandlestick,
  ChevronDown,
  ChevronUp,
  ConciergeBell,
  FileDiff,
  FileDown,
  Funnel,
  Grid2X2,
  HandCoins,
  LayoutList,
  LocateFixed,
  Megaphone,
  Shapes,
  ShoppingCart,
  UserCheck,
  UserStar,
  Network,
  Phone,
  ScrollText,
} from "lucide-react";

const ButtonList = ({ selectedItem, setSelectedItem }) => {
  const navigate = useNavigate();

  const items = [
    { label: "OEM", path: "/select/oem" },
    { label: "System Integrator", path: "/select/integrator" },
    { label: "End User", path: "/select/end-user" },
    { label: "Gov. Tender", path: "/select/gov" },
    { label: "Dealer", path: "/select/dealer" },
    { label: "Channel Partner", path: "/select/partner" },
    { label: "Sub Dealer", path: "/select/sub-dealer" },
  ];

  const handleClick = (e, item) => {
    e.stopPropagation();
    setSelectedItem(item.label);
    navigate(item.path);
  };

  return (
    <div className="bg-gray-600 rounded-lg border border-gray-500 p-4">
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const isSelected = selectedItem === item.label;
          return (
            <button
              key={item.label}
              type="button"
              onClick={(e) => handleClick(e, item)}
              className={`w-full text-left px-6 py-2 rounded-xl border transition-all
                ${
                  isSelected
                    ? "bg-green-500 text-white border-green-500 shadow-md"
                    : "bg-black/50 dark:bg-black/50 text-white border-gray-500 hover:bg-green-500 dark:hover:bg-black/20"
                }`}
            >
              <p className="font-semibold">{item.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const SidebarItem = ({
  title,
  content,
  icon,
  collapsible = false,
  path,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const isActive = activeIndex === index;

  const handleClick = () => {
    setActiveIndex(index);
    if (path) {
      navigate(path);
    } else if (collapsible) {
      setOpen((s) => !s);
    }
  };

  return (
    <div className="mb-1">
      <button
        onClick={handleClick}
        className={`w-[270px] h-[45px] flex justify-between items-center p-4 text-left border rounded-lg transition
          ${
            isActive
              ? "bg-black text-white"
              : "bg-white text-black dark:bg-black/30 dark:text-white dark:border-gray-500"
          }
        `}
      >
        <div className="flex items-center w-full">
          <div className="mr-6">{icon}</div>
          <div>{title}</div>
        </div>
        {collapsible &&
          (open ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
      </button>

      {collapsible && open && (
        <div className="rounded-lg w-full text-white bg-gray-500 dark:bg-inherit dark:text-black p-3">
          {content}
        </div>
      )}
    </div>
  );
};

export default function SidebarWithSelection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // 🔥 Moved state here

  const SidebarItems = [
    { title: "Dashboard", icon: <Grid2X2 size={24} />, path: "/" },
    {
      title: "Lead",
      content: <ButtonList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />,
      icon: <Funnel size={24} />,
      collapsible: true,
    },
    {
      title: "Lead Old",
      content: <ButtonList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />,
      icon: <ConciergeBell size={24} />,
      collapsible: true,
    },
    {
      title: "Customer Network",
      content: <ButtonList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />,
      icon: <Network size={24} />,
      collapsible: true,
    },
    { title: "Follow Ups", icon: <Phone size={24} /> },
    { title: "Test Ride Activity", icon: <BusFront size={24} /> },
    { title: "Requirement", icon: <LayoutList size={24} /> },
    { title: "Quotation", icon: <ScrollText size={24} /> },
    { title: "Orders", icon: <ShoppingCart size={24} /> },
    { title: "Performance Invoice", icon: <BrickWallShield size={24} /> },
    { title: "Attendance", icon: <UserCheck size={24} /> },
    { title: "Sales Activity", icon: <LocateFixed size={24} /> },
    { title: "Travel Plan", icon: <Car size={24} /> },
    { title: "Expense", icon: <HandCoins size={24} /> },
    { title: "Leave & Application", icon: <CalendarX size={24} /> },
    { title: "Lead Campaigns", icon: <Megaphone size={24} /> },
    { title: "My Dealer", icon: <Shapes size={24} /> },
    {
      title: "Master",
      content: <ButtonList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />,
      icon: <UserStar size={24} />,
      collapsible: true,
    },
    {
      title: "LMS Report",
      content: <ButtonList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />,
      icon: <ChartCandlestick size={24} />,
      collapsible: true,
    },
    {
      title: "BPR Report",
      content: <ButtonList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />,
      icon: <FileDiff size={24} />,
      collapsible: true,
    },
    {
      title: "Export Report",
      content: <ButtonList selectedItem={selectedItem} setSelectedItem={setSelectedItem} />,
      icon: <FileDown size={24} />,
      collapsible: true,
    },
  ];

  return (
    <div className="fixed top-24 w-[270px] h-auto overflow-y-auto bg-white dark:bg-inherit scrollbar-hide max-w-md mx-auto mt-10">

      <div className="fixed w-[270px] h-[100%] overflow-y-auto bg-white dark:bg-inherit scrollbar-hide max-w-md mx-auto">
        {SidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            title={item.title}
            content={item.content}
            icon={item.icon}
            collapsible={item.collapsible}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
}
