


export default function DataTable() {

  const rupee = '₹';

  const orders = [
    { id: 1, source: "Cold Call", received: "7924", leadbank: "63", validate: "451", qualified: "1177", disqualified: "5721", win: "814", conversion: "60%", orderqty: "40", revenue: `${rupee}40,00,000` },
    { id: 2, source: "Demo-Van", received: "7924", leadbank: "63", validate: "451", qualified: "1177", disqualified: "5721", win: "814", conversion: "60%", orderqty: "40", revenue: `${rupee}40,00,000` },
    { id: 3, source: "Digital Campaign", received: "7924", leadbank: "63", validate: "451", qualified: "1177", disqualified: "5721", win: "814", conversion: "60%", orderqty: "40", revenue: `${rupee}40,00,000` },
    { id: 4, source: "Incoming", received: "7924", leadbank: "63", validate: "451", qualified: "1177", disqualified: "5721", win: "814", conversion: "60%", orderqty: "40", revenue: `${rupee}40,00,000` },
    { id: 5, source: "Referral", received: "7924", leadbank: "63", validate: "451", qualified: "1177", disqualified: "5721", win: "814", conversion: "60%", orderqty: "40", revenue: `${rupee}40,00,000` },
    { id: 6, source: "Demo & Display", received: "7924", leadbank: "63", validate: "451", qualified: "1177", disqualified: "5721", win: "814", conversion: "60%", orderqty: "40", revenue: `${rupee}40,00,000` },
    { id: 7, source: "Exhibition", received: "7924", leadbank: "63", validate: "451", qualified: "1177", disqualified: "5721", win: "814", conversion: "60%", orderqty: "40", revenue: `${rupee}40,00,000` },
    { id: 8, source: "Webinar", received: "7924", leadbank: "63", validate: "451", qualified: "1177", disqualified: "5721", win: "814", conversion: "60%", orderqty: "40", revenue: `${rupee}40,00,000` },
  ];

  return (
    <div className='w-[1125px] h-[550px] bg-white rounded-lg mt-4 ml-4 p-4 space-y-3 border border-gray-200'>
      <h2 className="text-xl font-semibold mb-4 mt-4">Lead Conversion - Source Wise</h2>

      <div className="overflow-x-hidden ">
        <table className="min-w-full border border-gray-200 rounded-lg">
          {/* Table Head */}
          <thead>
            <tr>
              <th className="px-3 py-3 text-left text-sm font-medium">Sr. No</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Source</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Received</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Lead Bank</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Validate</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Qualified</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Disqualified</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Win</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Conversion</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Order Qty</th>
              <th className="px-3 py-3 text-left text-sm font-medium">Revenue</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-300 border-t border-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100">
                <td className="px-3 py-3">{order.id}</td>
                <td className="px-3 py-3">{order.source}</td>
                <td className="px-3 py-3">{order.received}</td>
                <td className="px-3 py-3">{order.leadbank}</td>
                <td className="px-3 py-3">{order.validate}</td>
                <td className="px-3 py-3">{order.qualified}</td>
                <td className="px-3 py-3">{order.disqualified}</td>
                <td className="px-3 py-3">{order.win}</td>
                <td className="px-3 py-3">{order.conversion}</td>
                <td className="px-3 py-3">{order.orderqty}</td>
                <td className="px-3 py-3">{order.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

