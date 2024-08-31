const TransactionFormSkeleton = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full max-w-xl py-10">
        <h3 className="h-12 mb-6 bg-gray-200 rounded animate-pulse"></h3>
        <ul className="flex gap-3">
          <li className="w-full h-12 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
          <li className="w-full h-12 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
          <li className="w-full h-12 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
        </ul>
        <ul className="flex flex-col gap-3 mt-5">
          <li className="w-full h-12 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
          <li className="w-full h-12 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
        </ul>
        <ul className="flex flex-col gap-3 mt-5">
          <li className="w-full h-12 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
        </ul>
      </div>
    </div>
  );
};
export default TransactionFormSkeleton;
