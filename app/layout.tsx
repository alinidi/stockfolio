import './globals.css';
import { Header } from '@/components/ui/header/Header';
import { Providers } from '@/store/providers';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
