import './global.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
    title: 'VolleyAI',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet" />
            </head>
            <body>
                <div className="app-layout">
                    <Sidebar />
                    {children}
                </div>
            </body>
        </html>
    );
}