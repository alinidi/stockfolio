'use client';

import { useAppSelector } from '@/store/hooks';
import { PortfolioItem } from './PortfolioItems';

export const PortfolioSidebar = () => {
    const { items, balance } = useAppSelector((state) => state.portfolio);
    const totalValue = items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );

    return (
        <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 h-fit sticky top-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">My Portfolio</h2>
                <span className="text-xs text-gray-500">
                    {items.length} assets
                </span>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Available cash</span>
                    <span className="text-white font-medium">
                        ${balance.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-400">Portfolio value</span>
                    <span className="text-2xl font-bold text-white">
                        ${totalValue.toFixed(2)}
                    </span>
                </div>
            </div>
            {items.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    <p>No assets yet</p>
                    <p className="text-sm mt-2">
                        Buy some stocks to get started
                    </p>
                </div>
            ) : (
                <div className="space-y-3 max-h-100 overflow-y-auto pr-2">
                    {items.map((item) => (
                        <PortfolioItem
                            key={`${item.symbol}-${item.price}`}
                            item={item}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
