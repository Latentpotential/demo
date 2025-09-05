import { useLocation, useNavigate } from "react-router-dom";
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
import ButtonList from "./SubButton";

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

  const handleClick = () => {
    setActiveIndex(index);
    if (path) {
      navigate(path);
    } else if (collapsible) {
      setOpen(!open);
    }
  };

  const isActive = activeIndex === index;

  return (
    <div className="mb-1">
      <button
        onClick={handleClick}
        className={`w-[270px] h-[45px] flex justify-between items-center p-4 text-left border rounded-lg transition
          ${isActive ? "bg-black text-white" : "bg-white text-black dark:bg-black/30 dark:text-white dark:border-gray-500"}
        `}
      >
        <div className="flex items-center w-full">
          <div className="mr-6">{icon}</div>
          <div>{title}</div>
        </div>
        {collapsible && (open ? <ChevronUp size={30} /> : <ChevronDown size={30} />)}
      </button>

      {collapsible && open && (
        <div className="rounded-lg w-full text-white bg-gray-500 dark:bg-white dark:text-black">
          {content}
        </div>
      )}
    </div>
  );
};


const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selected, setSelected] = useState("");
  const location = useLocation();
  
  const SidebarItems = [
  { title: "Dashboard", icon: <Grid2X2 size={30} />, path: "/" },
  { title: "Lead", content: <ButtonList onSelect={setSelected} />, icon: <Funnel size={30} />, collapsible: true },
  { title: "Lead Old", content: <ButtonList onSelect={setSelected} />, icon: <ConciergeBell size={30} />, collapsible: true },
  { title: "Customer Network", content: <ButtonList onSelect={setSelected} />, icon: <Network size={30} />, collapsible: true },
  { title: "Follow Ups", icon: <Phone size={30} /> },
  { title: "Test Ride Activity", icon: <BusFront size={30} /> },
  { title: "Requirement", icon: <LayoutList size={30} /> },
  { title: "Quotation", icon: <ScrollText size={30} /> },
  { title: "Orders", icon: <ShoppingCart size={30} /> },
  { title: "Performance Invoice", icon: <BrickWallShield size={30} /> },
  { title: "Attendance", icon: <UserCheck size={30} /> },
  { title: "Sales Activity", icon: <LocateFixed size={30} /> },
  { title: "Travel Plan", icon: <Car size={30} /> },
  { title: "Expense", icon: <HandCoins size={30} /> },
  { title: "Leave & Application", icon: <CalendarX size={30} /> },
  { title: "Lead Campaigns", icon: <Megaphone size={30} /> },
  { title: "My Dealer", icon: <Shapes size={30} /> },
  { title: "Master", content: <ButtonList onSelect={setSelected} />, icon: <UserStar size={30} />, collapsible: true },
  { title: "LMS Report", content: <ButtonList onSelect={setSelected} />, icon: <ChartCandlestick size={30} />, collapsible: true },
  { title: "BPR Report", content: <ButtonList onSelect={setSelected} />, icon: <FileDiff size={30} />, collapsible: true },
  { title: "Export Report", content: <ButtonList onSelect={setSelected} />, icon: <FileDown size={30} />, collapsible: true },
];

  return (
    <div className="fixed top-24 w-[270px]  h-auto overflow-y-auto bg-white dark:bg-inherit scrollbar-hide max-w-md mx-auto mt-10">
      {location.pathname === "/select" && (
        <div className="text-lg mb-4 px-2 py-3 w-[180px] text-wrap flex justify-around items-center rounded-lg bg-green-200 dark:bg-inherit border border-white dark:border-gray-500 text-white dark:text-green-500">
          {selected || "None"}
        </div>
      )}
      <div className="fixed  w-[270px] h-[100%] overflow-y-auto bg-white dark:bg-inherit scrollbar-hide max-w-md mx-auto">
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
};

export default SideBar;
