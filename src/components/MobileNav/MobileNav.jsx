import { Link } from 'react-router-dom';
import { User, Code2, Briefcase, GraduationCap } from 'lucide-react';

const navItems = [
  { to: '/', icon: User, label: 'Me' },
  { to: '/projects', icon: Code2, label: 'Projects' },
  { to: '/work', icon: Briefcase, label: 'Work' },
  { to: '/education', icon: GraduationCap, label: 'Education' },
];

const MobileNav = () => {
  return (
    <div className="block md:hidden">
      <div className="h-12" aria-hidden />
      <div className="fixed left-0 top-0 z-20 flex w-full justify-center bg-gray-900/95 py-2">
        <nav className="flex w-full max-w-screen-sm justify-around" aria-label="Mobile navigation">
          {navItems.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex flex-1 items-center justify-center py-2 text-gray-100 transition-colors hover:text-accent"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
