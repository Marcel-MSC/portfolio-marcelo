import { Link, useLocation } from 'react-router-dom';
import { User, Code2, Briefcase, GraduationCap } from 'lucide-react';

const items = [
  { name: 'Me', path: '/', icon: User },
  { name: 'Projects', path: '/projects', icon: Code2 },
  { name: 'Work', path: '/work', icon: Briefcase },
  { name: 'Education', path: '/education', icon: GraduationCap },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav
      className="fixed left-0 top-0 z-10 hidden h-full w-64 flex-col border-r border-accent/30 bg-gray-900 pt-4 md:flex"
      aria-label="Side navigation"
    >
      <ul className="flex flex-col gap-1 px-3">
        {items.map(({ name, path, icon: Icon }) => {
          const isActive =
            (location.pathname === '/' && path === '/') || location.pathname === path;
          return (
            <li key={name}>
              <Link
                to={path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-gray-100 transition-colors hover:bg-gray-800 hover:text-accent ${
                  isActive ? 'bg-gray-800 text-accent' : ''
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
