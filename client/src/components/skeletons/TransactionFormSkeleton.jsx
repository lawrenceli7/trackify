const TransactionFormSkeleton = () => {
  return (
    <div className="h-screen max-w-xl py-10 mx-auto">
      <h3 className="h-6 bg-gray-200 rounded animate-pulse"></h3>
      <ul className="flex gap-3 mt-5">
        <li className="w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
        <li className="w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
        <li className="w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
      </ul>
      <ul className="flex gap-3 mt-5">
        <li className="w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
        <li className="w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
      </ul>
      <ul className="flex gap-3 mt-5">
        <li className="w-full h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></li>
      </ul>
    </div>
  );
};
export default TransactionFormSkeleton;
