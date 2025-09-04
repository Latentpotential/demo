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
import ButtonList from "./SubButton";

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
    <div className="mb-1 ">
      <button
        onClick={handleClick}
        className={`w-[270px] h-[45px] flex justify-between items-center p-4 text-left border border-white dark:border-neutral-600 ${
          nature === "secondary" ? "bg-black text-white dark:text-white" : "bg-white text-black "
        } rounded-lg dark:bg-black/50 dark:text-white`}
      >
        <div className="flex items-center w-full">
          <div className="mr-6">{icon}</div>
          <div>{title}</div>
        </div>
        {collapsible && (open ? <ChevronUp size={30} /> : <ChevronDown size={30} />)}
      </button>

      {collapsible && open && (
        <div className=" rounded-lg w-full text-white bg-gray-500 dark:bg-white dark:text-black">
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
    path: "/", // Add navigation path
  },
  {
    title: "Lead",
    content: <ButtonList />,
    icon: <Funnel size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "Lead Old",
    content: <ButtonList />,
    icon: <ConciergeBell size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "Customer Network",
    content: <ButtonList />,
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
    content: <ButtonList />,
    icon: <UserStar size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "LMS Report",
    content: <ButtonList />,
    icon: <ChartCandlestick size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "BPR Report",
    content: <ButtonList />,
    icon: <FileDiff size={30} />,
    nature: "primary",
    collapsible: true,
  },
  {
    title: "Export Report",
    content: <ButtonList />,
    icon: <FileDown size={30} />,
    nature: "primary",
    collapsible: true,
  },
];

const SideBar = () => {
  return (
    <div className="relative  top-24 bg-white dark:bg-inherit max-w-md mx-auto mt-10">
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
