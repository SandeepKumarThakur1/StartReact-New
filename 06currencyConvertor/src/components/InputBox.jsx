const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label className="text-black mb-2 inline-block">{label}</label>
          <input
            className="text-black outline-none w-full bg-transparent py-1.5 border px-2 rounded-md"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 text-black bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((c, index) => (
              <option value={c} key={index}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
