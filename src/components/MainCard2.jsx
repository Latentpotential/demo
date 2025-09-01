import { useEffect, useState } from "react"
import SearchBar2 from "./SearchBar2";
import { EllipsisVertical } from "lucide-react";
import InlineTabs from "./TopTabs";

const MainCard2 = () => {

  const [activeTab, setActiveTab] = useState("My");

  const tabs = ["My", "Team", "Assign"];
  

  const leadsData = {
    My : [
      { id: 1, date: "10/12/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 2, date: "6/7/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 3, date: "24/1/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 4, date: "30/9/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 5, date: "15/8/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 6, date: "12/10/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 7, date: "7/4/25", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 8, date: "23/6/25", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      ],
    Team : [
      { id: 1, date: "10/12/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 2, date: "6/7/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 3, date: "24/1/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 4, date: "30/9/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 5, date: "15/8/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 6, date: "12/10/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 7, date: "7/4/25", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 8, date: "23/6/25", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
    ],
    Assign : [
      { id: 1, date: "10/12/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 2, date: "6/7/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 3, date: "24/1/23", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 4, date: "30/9/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 5, date: "15/8/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 6, date: "12/10/24", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 7, date: "7/4/25", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
      { id: 8, date: "23/6/25", createdBy: "Abacus Test", source: "India", name: "Haryana", district: "Faridabad", mobile: "+91 ***** *****", currentBal : "" },
    ]
  };

  return (
    <div classname="overflow-x-hidden ">
      <div className="flex justify-between items-center">        
        {/* Tabs Header */}
        <div className="flex justify-between text-xl mt-5 ml-5 items-center space-x-16">
          {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xl font-semibold transition-colors p-5 ${
                  activeTab === tab
                    ? "border-b-4 border-primary text-primary"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
        </div>

        <div className="mr-[130px]">
          <SearchBar2 />
        </div>
      </div>
      <div >
        <div className="w-[1670px] h-[2030px] bg-white rounded-lg ml-4 p-4 space-y-3 border border-gray-200">
          <div className="w-full pt-3">
            <InlineTabs />
          </div>
          <div classname="w-full mx-auto mt-10">

            {/* Tab Content */}
            <div className="overflow-x-hidden border border-gray-200 rounded-lg">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-12 py-5 text-left text-sm font-medium">Sr No.</th>
                    <th className="pl-8 py-5 text-left text-sm font-medium">Date</th>
                    <th className="pl-12 py-5 text-left text-sm font-medium">CreatedBy</th>
                    <th className="pl-16 py-5 text-left text-sm font-medium">Source</th>
                    <th className="px-16 py-5 text-left text-sm font-medium">Name</th>
                    <th className="px-12 py-5 text-left text-sm font-medium">District</th>
                    <th className="pl-12 py-5 text-left text-sm font-medium">Mobile</th>
                    <th className="pl-36 pr-24 text-left text-sm font-medium">Current Balance</th>
                    <th className="pl-8 py-5 text-left text-sm font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 border-t border-b border-gray-200">
                  {leadsData[activeTab].map((lead, index) => (
                    <tr key={index} className="hover:bg-gray-50 bg-white text-gray-600">
                      <td className="px-12 py-5">{lead.id}</td>
                      <td className="pl-8 py-5">{lead.date}</td>
                      <td className="pl-12 py-5">{lead.createdBy}</td>
                      <td className="pl-16 py-5">{lead.source}</td>
                      <td className="px-16 py-5">{lead.name}</td>
                      <td className="px-12 py-5">{lead.district}</td>
                      <td className="pl-12 py-5">{lead.mobile}</td>
                      <td className="pl-36 pr-36 py-5">{lead.currentBal}</td>
                      <td className="pl-8 py-5"><div className="bg-gray-200 mr-16 ml-24 p-1 items-center flex justify-center rounded-full"><EllipsisVertical size={30} /></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard2
