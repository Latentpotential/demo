import { Airplay, BrickWallShield, BusFront, CalendarX, Car, ChartCandlestick, ChevronDown, ChevronUp, ConciergeBell, FileDiff, FileDown, Funnel, Grid2X2, HandCoins, LayoutList, LocateFixed, Megaphone, Network, Phone, ScrollText, Shapes, ShoppingCart, UserCheck, UserStar } from 'lucide-react';
import { useState } from 'react'
import CheckBoxList from './CheckBoxList';

const SideBarCompo = ({title, content, icon,nature}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='mb-1'>
      
      <button onClick={() => setOpen(!open)}
        className={`w-[270px] h-[45px] flex justify-between items-center p-4 text-left ${nature === 'secondary' ? 'bg-black text-white' : 'bg-white text-black'} rounded-lg`}>
        <div className='flex items-center w-full'>
          <div className='mr-6'>
            {icon}
          </div>
          <div>
            {title}
          </div>
        </div>
        {open? <ChevronUp size={30}/> : <ChevronDown size={30}/>}
      </button>
      {open && 
      <div className='pt-4 pb-4 pr-4 rounded-lg w-[270px] text-white bg-gray-500'>
        <div className='flex ml-5 items-center w-full text-xl'>
          <div className='mr-6'>
            {icon}
          </div>
          <div>
            {title}
          </div>
        </div>
        {content}
      </div>
      }
    </div>
  )
}

const SideBarCompo2 = ({title, icon,nature}) => {

  return (
    <div className='mb-1'>
      
      <button
        className={`w-[270px] h-[45px] flex justify-start items-center p-4 text-left ${nature === 'secondary' ? 'bg-black text-white' : 'bg-white text-black'} rounded-lg`}>
        <div className='mr-6'>
          {icon}
        </div>
        {title}
      </button>
    </div>
  )
}

const Sidebaritems1 = [
  {
  title: "Lead",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <Funnel size={30}/>
 },
 {
  title: "Lead Old",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <ConciergeBell size={30}/>
 },
 {
  title: "Customer Network",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <Network size={30}/>
 },

]

const Sidebaritems2 = [
  {
  title: "Follow Ups",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <Phone size={30}/>
 },
 {
  title: "Test Ride Activity",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <BusFront size={30}/>
 },
 {
  title: "Requirement",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <LayoutList size={30}/>
 },
 {
  title: "Quotation",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <ScrollText size={30}/>
 },
 {
  title: "Orders",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <ShoppingCart size={30}/>
 },
 {
  title: "Performance Invoice",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <BrickWallShield size={30}/>
 },
 {
  title: "Attendance",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <UserCheck size={30}/>
 },
 {
  title: "Sales Activity",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <LocateFixed size={30}/>
 },
 {
  title: "Travel Plan",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <Car size={30}/>
 },
 {
  title: "Expense",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <HandCoins size={30}/>
 },
 {
  title: "Leave & Application",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <CalendarX size={30}/>
 },
 {
  title: "Lead Campaigns",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <Megaphone size={30}/>
 },
 {
  title: "My Dealer",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <Shapes size={30}/>
 },
]

const Sidebaritems3 = [
  {
  title: "Dashboard",
  content: <CheckBoxList />,
  nature: "secondary",
  icon: <Grid2X2 size={30}/>
}
]

const Sidebaritems4 = [
  {
  title: "Master",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <UserStar size={30}/>
 },
 {
  title: "LMS Report",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <ChartCandlestick size={30}/>
 },
 {
  title: "BPR Report",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <FileDiff size={30}/>
 },
 {
  title: "Export Report",
  content: <CheckBoxList />,
  nature: "primary",
  icon: <FileDown size={30}/>
 },
]

const SideBar = () => {
  
  return (
    <div className='max-w-md mx-auto mt-10'>

      {Sidebaritems3.map((item, i) => (
        <SideBarCompo2 key={i} title={item.title} nature={item.nature} icon={item.icon}/>
      ))}

      {Sidebaritems1.map((item, i) => (
        <SideBarCompo key={i} title={item.title} content={item.content} nature={item.nature} icon={item.icon}/>
      ))}

      {Sidebaritems2.map((item, i) => (
        <SideBarCompo2 key={i} title={item.title} nature={item.nature} icon={item.icon}/>
      ))}

      {Sidebaritems4.map((item, i) => (
        <SideBarCompo key={i} title={item.title} content={item.content} nature={item.nature} icon={item.icon}/>
      ))}
    </div>
  )
}

export default SideBar
