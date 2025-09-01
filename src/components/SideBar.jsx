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
import CheckBoxList from "./CheckBoxList";

const SidebarItem = ({ title, content, icon, nature, collapsible = false, path }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else if (collapsible) {
      setOpen(!open);
    }
  };

  return (
    <div className="mb-1">
      <button
        onClick={handleClick}
        className={`w-[270px] h-[45px] flex justify-between items-center p-4 text-left ${
          nature === "secondary" ? "bg-black text-white" : "bg-white text-black"
        } rounded-lg`}
      >
        <div className="flex items-center w-full">
          <div className="mr-6">{icon}</div>
          <div>{title}</div>
        </div>
        {collapsible && (open ? <ChevronUp size={30} /> : <ChevronDown size={30} />)}
      </button>

      {collapsible && open && (
        <div className="pt-4 pb-4 pr-4 rounded-lg w-[270px] text-white bg-gray-500">
          <div className="flex ml-5 items-center w-full text-xl">
            <div className="mr-6">{icon}</div>
            <div>{title}</div>
          </div>
          {content}
        </div>
      )}
    </div>
  );
};

const SidebarItems = [
  {
    title: "Dashboard",
    icon: <Grid2X2 size={30} />,
    nature: "secondary",
    collapsible: false,
    path: "/",
  },
  {
    title: "Lead",
    content: <CheckBoxList />,
    icon: <Funnel size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "Lead Old",
    content: <CheckBoxList />,
    icon: <ConciergeBell size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "Customer Network",
    content: <CheckBoxList />,
    icon: <Network size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "Follow Ups",
    icon: <Phone size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Test Ride Activity",
    icon: <BusFront size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Requirement",
    icon: <LayoutList size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Quotation",
    icon: <ScrollText size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Orders",
    icon: <ShoppingCart size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Performance Invoice",
    icon: <BrickWallShield size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Attendance",
    icon: <UserCheck size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Sales Activity",
    icon: <LocateFixed size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Travel Plan",
    icon: <Car size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Expense",
    icon: <HandCoins size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Leave & Application",
    icon: <CalendarX size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Lead Campaigns",
    icon: <Megaphone size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "My Dealer",
    icon: <Shapes size={30} />,
    nature: "primary",
    collapsible: false,
  },
  {
    title: "Master",
    content: <CheckBoxList />,
    icon: <UserStar size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "LMS Report",
    content: <CheckBoxList />,
    icon: <ChartCandlestick size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "BPR Report",
    content: <CheckBoxList />,
    icon: <FileDiff size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "Export Report",
    content: <CheckBoxList />,
    icon: <FileDown size={30} />,
    nature: "primary",
    collapsible: true,
  },
];

// Sidebar Component
const SideBar = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      {SidebarItems.map((item, index) => (
        <SidebarItem
          key={index}
          title={item.title}
          content={item.content}
          icon={item.icon}
          nature={item.nature}
          collapsible={item.collapsible}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default SideBar;
