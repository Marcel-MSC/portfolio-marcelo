import { useState } from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

const Layout = ({ user, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <MobileNav user={user} />
      <Sidebar
        user={user}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((v) => !v)}
      />
      <main
        className={`flex min-h-screen flex-col text-left transition-[margin] duration-200 ${
          sidebarOpen ? 'md:ml-64' : 'md:ml-16'
        }`}
      >
        <UserHeader user={user} />
        <div className="mx-auto w-full max-w-3xl p-6 md:px-8 md:py-8">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
