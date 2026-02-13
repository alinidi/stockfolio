import { useGetQuoteQuery } from '@/api/twelveApi';
import { StockCard } from '../stockCard/StockCard';

export const StockCardContainer = ({ symbol }: { symbol: string }) => {
    const { data, isLoading } = useGetQuoteQuery(symbol);

    if (isLoading) return <div>Loading {symbol}...</div>;
    if (!data) return null;

    return (
        <StockCard
            // symbol={data.symbol}
            // name={data.name}
            // price={data.close}
            // currency={data.currency}
            // change={data.change}
            // percent_change={data.percent_change}
            symbol="AAPL"
            name="APPLE"
            price="254.16489"
            currency="USD"
            change="+2.03"
            percent_change="0.05"
        />
    );
};
