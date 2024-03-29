import { Inter } from 'next/font/google';
import './mobilerequest.module.scss';
import Sidebar from '../../../components/sidebar/sidebar'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mobilerequest Page',
  description: 'Generated by create next app',
};

const MobileRequestLayout = ({ children }) => {
  return (

    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <div className="content">{children}</div>
      </body>
    </html>
  );
};

export default MobileRequestLayout;
