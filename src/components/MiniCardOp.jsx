const MiniCardOp = ({ data }) => {
  const { title, inc, total, subtitle, fillData } = data;

  return (
    <div className="w-[100%] h-auto dark:bg-black/20 dark:text-white dark:border-gray-500 bg-white rounded-lg mt-4 ml-4 p-4 space-y-3 space-x-2 border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-md ">{title}</p>
        </div>
        <div className="text-sm dark:bg-black/20 dark:text-white dark:border-gray-500 rounded-full border border-gray-200 text-green-200 bg-green-100 px-2 py-1">
          <p>&#43;{inc}</p>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-4xl font-bold">{total}</p>
        <p className="text-gray-400 dark:text-white text-nowrap">{subtitle}</p>
      </div>

      <div className="flex justify-start items-center space-x-2">
        {fillData?.map((item, index) => (
          <div
            key={index}
            className="w-24 h-16 dark:bg-black/20 dark:text-white dark:border-gray-500 bg-gray-300 rounded-lg p-2 border border-gray-200 inline-block"
          >
            <div className="text-sm text-gray-400 dark:text-white">{item.content}</div>
            <div className="font-bold text-lg">{item.val}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCardOp;
