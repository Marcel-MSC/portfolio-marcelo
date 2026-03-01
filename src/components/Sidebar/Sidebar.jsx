import { Link, useLocation } from 'react-router-dom';
import { User, Code2, Briefcase, GraduationCap, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const items = [
  { name: 'Me', path: '/', icon: User },
  { name: 'Projects', path: '/projects', icon: Code2 },
  { name: 'Work', path: '/work', icon: Briefcase },
  { name: 'Education', path: '/education', icon: GraduationCap },
];

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();

  return (
    <>
      {/* Toggle quando sidebar fechada */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed left-0 top-6 z-20 hidden rounded-r-lg border border-l-0 border-accent/30 bg-gray-900 p-2.5 text-gray-100 shadow-lg transition-colors hover:bg-gray-800 hover:text-accent md:block"
          aria-label="Abrir menu"
        >
          <PanelLeftOpen className="h-5 w-5" />
        </button>
      )}
      <nav
        className={`fixed left-0 top-0 z-10 hidden h-full w-64 flex-col border-r border-accent/30 bg-gray-900 pt-4 transition-transform duration-200 md:flex ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Side navigation"
      >
        <div className="flex items-center justify-between px-3 pb-2">
          <span className="text-sm font-medium text-gray-400">Menu</span>
          <button
            onClick={onToggle}
            className="rounded p-1.5 text-gray-400 transition-colors hover:bg-gray-800 hover:text-accent"
            aria-label="Fechar menu"
          >
            <PanelLeftClose className="h-5 w-5" />
          </button>
        </div>
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
    </>
  );
};

export default Sidebar;
