# Stockfolio — Investment Portfolio Simulator
#### Deploy: https://stockfolio-git-main-alinidis-projects.vercel.app/

A pet project: investment portfolio simulator with real-time data from Twelve Data.

<img width="662" height="1298" alt="real data" src="https://github.com/user-attachments/assets/03042c52-5a84-4215-a8c0-31e4ff164dc0" />

## Tech Stack

- **Next.js**
- **TypeScript**
- **Redux Toolkit** + **RTK Query**
- **Tailwind CSS**
- **Twelve Data API - https://twelvedata.com/** — real stock prices *
- 
## Note on API Limitations:
- **800 requests per day** shared across all stocks
- **8 requests per minute** rate limit
- Data updates every **10-30 seconds** (polling interval)

Due to these limitations:
- Some stocks may load slower than others
- If you see missing data, it's likely the rate limit was reached
- The portfolio may take a few seconds to refresh prices

## Features

- View real-time stock prices (AAPL, TSLA, MSFT, GOOGL, etc.)
- Buy stocks with quantity selection
- Sell stocks (partial or full)
- Virtual balance ($5000 starting cash)
- Profit/loss calculation for each position
- Auto-refresh prices (polling)
- Responsive design (mobile/desktop)

## Screenshots

<img width="903" height="880" alt="buy" src="https://github.com/user-attachments/assets/c8f03208-7366-46ad-8887-cf3c87a21162" />

<img width="902" height="817" alt="sell" src="https://github.com/user-attachments/assets/fcfe23c1-8e4c-484e-a9a2-9efb2f89c794" />

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


