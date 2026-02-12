import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PortfolioItem {
    symbol: string;
    name: string;
    quantity: number;
    price: number;
    currency: string;
}

export interface PortfolioState {
    items: PortfolioItem[];
    balance: number;
}

const initialState: PortfolioState = {
    items: [],
    balance: 5000,
};

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        buyAsset: (state, action: PayloadAction<PortfolioItem>) => {
            const { symbol, name, quantity, price, currency } = action.payload;
            const existing = state.items.find((item) => item.symbol === symbol);

            if (existing) {
                const totalCost =
                    existing.quantity * existing.price + quantity * price;
                const totalQuantity = existing.quantity + quantity;
                existing.price = totalCost / totalQuantity;
            } else {
                state.items.push({ symbol, name, quantity, price, currency });
            }

            state.balance -= quantity * price;
        },
        sellAsset: (
            state,
            action: PayloadAction<{
                symbol: string;
                quantity: number;
                price: number;
            }>
        ) => {
            const { symbol, quantity, price } = action.payload;
            const existing = state.items.find((item) => item.symbol === symbol);

            if (!existing) return;

            if (quantity >= existing.quantity) {
                state.balance += existing.quantity * price;
                state.items = state.items.filter(
                    (item) => item.symbol !== symbol
                );
            } else {
                existing.quantity -= quantity;
                state.balance += quantity * price;
            }
        },
    },
});

export const { buyAsset, sellAsset } = portfolioSlice.actions;
export default portfolioSlice.reducer;
