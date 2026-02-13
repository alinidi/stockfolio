'use client';

import { useAppSelector } from '@/store/hooks';

export const Header = () => {
    const balance = useAppSelector((state) => state.portfolio.balance);

    return (
        <header className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 px-6 py-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
                <div className="bg-blue-600/20 p-2 rounded-xl">
                    <span className="text-2xl" role="img" aria-label="chart">
                        📈
                    </span>
                </div>
                <div>
                    <span className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Stockfolio
                    </span>
                    <span className="text-xs text-gray-500 ml-2 font-light">
                        virtual trading
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-xs text-gray-400 font-light">
                        Available balance
                    </p>
                    <div className="flex items-center gap-1">
                        <span className="text-3xl font-bold text-white">
                            ${balance.toFixed(2)}
                        </span>
                        <span className="text-xs text-gray-500">USD</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
