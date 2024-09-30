import './ui/global.css';
import {montserrat} from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {/* <h1 className="text-3xl font-bold text-blue-500">CURSO DE NEXTJS 2024</h1> */}
        {children}
        </body>
    </html>
  );
}
