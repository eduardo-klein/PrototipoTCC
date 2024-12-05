// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import { UserProvider } from './context/usuarioContexto';

export const metadata = {
  title: 'sic',
  description: 'layout inicial do site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className='d-flex flex-column min-vh-100'>
        <UserProvider>
          <Navbar />
          <main className='flex-grow-1'>
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}