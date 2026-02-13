type Props = {
    symbol: string;
    name: string;
    price: string;
    currency: string;
    change?: string;
    percent_change?: string;
};

export const StockCard = ({
    symbol,
    name,
    price,
    currency,
    change,
    percent_change,
}: Props) => {
    const isPositive = change && parseFloat(change) >= 0;

    return (
        <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500/50">
            <div className="flex justify-between items-start">
                <div>
                    <span className="text-xl font-bold text-white">
                        {symbol}
                    </span>
                    <p className="text-sm text-gray-400 mt-1">{name}</p>
                </div>

                {change && percent_change && (
                    <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                            isPositive
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                        }`}
                    >
                        {isPositive ? '▲' : '▼'}{' '}
                        {Math.abs(parseFloat(percent_change)).toFixed(2)}%
                    </span>
                )}
            </div>

            <div className="mt-4 flex justify-between items-end">
                <div>
                    <p className="text-xs text-gray-500">Current price</p>
                    <p className="text-2xl font-semibold text-white mt-1">
                        {parseFloat(price).toFixed(2)}
                        <span className="text-sm text-gray-400 ml-1">
                            {currency}
                        </span>
                    </p>
                </div>
                <button className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-blue-500/25 ml-5">
                    Buy
                </button>
            </div>
        </div>
    );
};
