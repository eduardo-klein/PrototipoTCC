import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
  title: 'sic',
  description: 'layout inicial do site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      
        <body className='d-flex flex-column min-vh-100'>
          <Navbar></Navbar>
          <main className='flex-grow-1'>
            {children}
          </main>
          <Footer></Footer>
        </body>

      
         

      
     
    </html>
      
    
  )
}
