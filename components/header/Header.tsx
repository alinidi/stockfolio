'use client';

import { useAppSelector } from '@/store/hooks';

export const Header = () => {
    const balance = useAppSelector((state) => state.portfolio.balance);

    return (
        <header className="p-3 bg-cyan-950 flex justify-between">
            <span className="text-2xl">Stockfolio</span>
            <span className="text-2xl">${balance.toFixed(2)}</span>
        </header>
    );
};
