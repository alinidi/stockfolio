'use client';

import { useGetQuoteQuery } from '@/api/twelveApi';
import { StockCard } from '../stockCard/StockCard';
import { useAppDispatch } from '@/store/hooks';
import { buyAsset } from '@/features/portfolioSlice';
import { useState } from 'react';
import { BuyModal } from '../modal/Modal';

export const StockCardContainer = ({ symbol }: { symbol: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, isLoading } = useGetQuoteQuery(symbol);
    const dispatch = useAppDispatch();

    if (isLoading) return <div>Loading {symbol}...</div>;
    if (!data) return null;

    const handleBuy = (quantity: number = 1) => {
        dispatch(
            buyAsset({
                symbol: data.symbol,
                name: data.name,
                quantity,
                price: parseFloat(data.close),
                currency: data.currency,
            })
        );
        setIsModalOpen(false);
    };

    return (
        <>
            <StockCard
                // symbol={data.symbol}
                // name={data.name}
                // price={data.close}
                // currency={data.currency}
                // change={data.change}
                // percent_change={data.percent_change}
                // onBuy={handleBuy}
                symbol="AAPL"
                name="APPLE"
                price="254.16489"
                currency="USD"
                change="+2.03"
                percent_change="0.05"
                onBuy={() => setIsModalOpen(true)}
            />
            <BuyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleBuy}
                symbol={data.symbol}
                name={data.name}
                price={parseFloat(data.close)}
                currency={data.currency}
            />
        </>
    );
};
