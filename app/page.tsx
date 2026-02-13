import { MarketTable } from '@/components/marketComponent/Market';
import { PortfolioSidebar } from '@/components/portfolio/PortfolioSidebar';

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="min-h-screen bg-gray-950 w-full">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-96 order-1 lg:order-2">
                            <PortfolioSidebar />
                        </div>
                        <div className="flex-1 order-2 lg:order-1">
                            <MarketTable />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
