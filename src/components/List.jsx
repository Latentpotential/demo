export default function DataTable() {
  const rupee = "₹";

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
    <div className="w-[1125px] h-[550px] bg-white dark:bg-black/20 dark:border-white rounded-lg mt-4 ml-4 p-4 space-y-3 border border-gray-200  transition-colors">
      <h2 className="text-xl font-semibold mb-4 mt-4 text-gray-900 dark:text-white">
        Lead Conversion - Source Wise
      </h2>

      <div className="overflow-x-hidden">
        <table className="min-w-full border border-gray-200 dark:border-white rounded-lg">
          {/* Table Head */}
          <thead className="bg-gray-100 dark:bg-black/20">
            <tr>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Sr. No</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Source</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Received</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Lead Bank</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Validate</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Qualified</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Disqualified</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Win</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Conversion</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Order Qty</th>
              <th className="px-3 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">Revenue</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-300 dark:divide-white border-t border-gray-200 dark:border-white">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-100 dark:hover:bg-black/50 transition-colors">
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.id}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.source}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.received}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.leadbank}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.validate}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.qualified}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.disqualified}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.win}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.conversion}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.orderqty}</td>
                <td className="px-3 py-3 text-gray-900 dark:text-white">{order.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
