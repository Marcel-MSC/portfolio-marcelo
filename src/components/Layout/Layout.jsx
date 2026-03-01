import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center pt-14 text-center md:ml-64 md:items-stretch md:pt-0 md:text-left">
        <UserHeader user={user} />
        <div className="w-full max-w-2xl p-6 md:max-w-none">{children}</div>
      </main>
    </>
  );
};

export default Layout;
