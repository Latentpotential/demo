
import BarGraphAll from "./BarGraphMain"
import MyLineChart from "./LineChart"
import DataTable from "./List"
import MiniCard3 from "./MiniCard3"
import MiniCard4 from "./MiniCard4"
import MiniCardOp from "./MiniCardOp"


const MainCard = () => {

  const initialData1 = [
    { name: "Inverter Battery", value: 140, date: "2025-08-28" },
    { name: "E-Scooter", value: 7624, date: "2025-08-29" },
    { name: "EV Charger", value: 220, date: "2025-08-30" },
    { name: "Okaya Lithium", value: 127, date: "2025-08-31" },
    { name: "Inverter Battery", value: 2231, date: "2025-09-01" },
    { name: "Lithium Battery", value: 0, date: "2025-09-02" },
    { name: "FERRATO", value: 0, date: "2025-09-03" },
  ];

  const initialData2 = [
    { name: "Lead Bank", value: 60, date: "2025-08-25" },
    { name: "Validate", value: 480, date: "2025-08-26" },
    { name: "No Response", value: 120, date: "2025-08-28" },
    { name: "Close", value: 1270, date: "2025-08-29" },
    { name: "Lost", value: 0, date: "2025-08-30" },
    { name: "Disqualified", value: 2423, date: "2025-08-31" },
    { name: "Qualified", value: 400, date: "2025-09-01" },
    { name: "Win", value: 480, date: "2025-09-01" },
  ];

  const FirstCardData = {
    title : "Lead Network",
    inc : "12.5% from last month",
    total : "70,824",
    subtitle : "Total network connections across all channels",
    fillData : [
      {content : "Retailer", val : "50,000"},
      {content : "Dealer", val : "27,707"},
      {content : "Distributors", val : "10,000"},
      {content : "OEM", val : "133"},
    ]
  };

  const SecondDataCard ={
    title : "Customer Network",
    inc : "2.3% growth rate",
    total : "6",
    subtitle : "Active customer base and distribution network",
    fillData : [
      {content : "Dealer", val : "1"},
      {content : "Distributors", val : "14"},
      {content : "Others", val : "5"},
    ]
  };


  return (
    <div className='w-[1670px] h-[2030px] relative top-24 bg-gray-300 dark:bg-black/20 dark:text-white rounded-lg mt-14 ml-2 border border-gray-200 dark:border-gray-500'>
      <div className="flex justify-start items-start">
        <MiniCardOp data={FirstCardData}  />
        <MiniCardOp data={SecondDataCard} />
        <MiniCard3 />
      </div>

      <div className="flex justify-start items-start">
        <BarGraphAll initialData={initialData1} width={"1125px"} widthGraph={1000} title={"Product Category Distribution"}/>
        <MiniCard4 />
      </div>

      <div className="flex justify-start items-start">
        <DataTable />
        <MyLineChart />
      </div>

      <div>
        <BarGraphAll initialData={initialData2} width={"1635px"} widthGraph={1500} title={"Lead Category Distribution"}/>
      </div>
    </div>
  )
}

export default MainCard
