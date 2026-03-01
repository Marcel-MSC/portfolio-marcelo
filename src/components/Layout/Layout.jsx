import { useState } from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

const Layout = ({ user, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <MobileNav />
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />
      <main
        className={`flex min-h-screen flex-col items-center pt-14 text-center md:pt-0 ${
          sidebarOpen
            ? 'md:ml-64 md:items-stretch md:text-left'
            : 'md:ml-0 md:items-center md:text-center'
        }`}
      >
        <UserHeader user={user} />
        <div
          className={`w-full max-w-2xl p-6 ${sidebarOpen ? 'md:max-w-none' : 'md:max-w-2xl'}`}
        >
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
