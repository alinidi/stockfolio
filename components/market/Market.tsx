'use client';

import { StockCardContainer } from '../stockCardWrapper/StockCardWrapper';

const POPULAR_STOCKS = [
    'AAPL',
    'TSLA',
    'MSFT',
    'GOOGL',
    'SYN',
    'YESBANK',
    'ZOREN',
    'TRPIF',
    'TGKB',
    'QFOPI',
];

export const MarketTable = () => {
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {POPULAR_STOCKS.map((symbol) => (
                <StockCardContainer key={symbol} symbol={symbol} />
            ))}
        </div>
    );
};
