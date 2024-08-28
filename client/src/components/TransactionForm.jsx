const TransactionForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const transactionData = {
      description: formData.get("description"),
      paymentType: formData.get("paymentType"),
      category: formData.get("category"),
      amount: parseFloat(formData.get("amount")),
      location: formData.get("location"),
      date: formData.get("date"),
    };
    console.log("transactionData", transactionData);
  };

  return (
    <form
      className="flex flex-col w-full max-w-lg gap-5 px-3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap">
        <div className="w-full">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            htmlFor="description"
          >
            Transaction
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="description"
            name="description"
            type="text"
            required
            placeholder="Rent, Groceries, Salary, etc."
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="flex-1 w-full mb-6 md:mb-0">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            htmlFor="paymentType"
          >
            Payment Type
          </label>
          <div className="relative">
            <select
              className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="paymentType"
              name="paymentType"
            >
              <option value={"card"}>Card</option>
              <option value={"cash"}>Cash</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full mb-6 md:mb-0">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            htmlFor="category"
          >
            Category
          </label>
          <div className="relative">
            <select
              className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="category"
              name="category"
            >
              <option value={"saving"}>Saving</option>
              <option value={"expense"}>Expense</option>
              <option value={"investment"}>Investment</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full mb-6 md:mb-0">
          <label
            className="block mb-2 text-xs font-bold text-white uppercase"
            htmlFor="amount"
          >
            Amount($)
          </label>
          <input
            className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
            id="amount"
            name="amount"
            type="number"
            placeholder="150"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="flex-1 w-full mb-6 md:mb-0">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
            id="location"
            name="location"
            type="text"
            placeholder="New York"
          />
        </div>
        <div className="flex-1 w-full">
          <label
            className="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-[11px] px-4 mb-3 leading-tight focus:outline-none
						 focus:bg-white"
            placeholder="Select date"
          />
        </div>
      </div>
      <button
        className="w-full px-4 py-2 font-bold text-white rounded bg-gradient-to-br from-pink-500 to-pink-500 hover:from-pink-600 hover:to-pink-600 disabled:opacity-70 disabled:cursor-not-allowed"
        type="submit"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
