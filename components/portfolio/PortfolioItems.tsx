'use client';

import {
    PortfolioItem as PortfolioItemType,
    sellAsset,
} from '@/features/portfolioSlice';
import { useAppDispatch } from '@/store/hooks';
import { useState } from 'react';
import { SellModal } from '../ui/modal/SellModal';

export const PortfolioItem = ({ item }: { item: PortfolioItemType }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();

    const currentPrice = item.price * 1.05;
    const profit = (currentPrice - item.price) * item.quantity;
    const profitPercent = ((currentPrice - item.price) / item.price) * 100;

    // const { data } = useGetQuoteQuery(item.symbol);
    // const currentPrice = data ? parseFloat(data.close) : item.price;

    // const profit = (currentPrice - item.price) * item.quantity;
    // const profitPercent = ((currentPrice - item.price) / item.price) * 100;

    const handleSell = (quantity: number) => {
        dispatch(
            sellAsset({
                symbol: item.symbol,
                quantity,
                price: currentPrice,
            })
        );
    };

    return (
        <>
            <div className="bg-gray-800/30 rounded-lg p-3 hover:bg-gray-800/50 transition-colors">
                <div className="flex justify-between items-start mb-1">
                    <div>
                        <span className="font-bold text-white">
                            {item.symbol}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                            {item.quantity} shares
                        </span>
                    </div>
                    <span className="text-white font-medium">
                        ${(item.quantity * currentPrice).toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">
                        Avg. ${item.price.toFixed(2)}
                    </span>
                    <span
                        className={
                            profit >= 0 ? 'text-green-400' : 'text-red-400'
                        }
                    >
                        {profit >= 0 ? '▲' : '▼'} ${Math.abs(profit).toFixed(2)}{' '}
                        ({Math.abs(profitPercent).toFixed(1)}%)
                    </span>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-2 bg-gray-700 hover:bg-gray-600 text-white text-sm py-1.5 rounded-lg transition-colors"
                >
                    Sell
                </button>
            </div>

            <SellModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleSell}
                symbol={item.symbol}
                name={item.name}
                price={currentPrice}
                currency={item.currency}
                maxQuantity={item.quantity}
            />
        </>
    );
};
