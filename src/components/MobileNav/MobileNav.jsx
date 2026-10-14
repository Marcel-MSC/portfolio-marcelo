import { Link, useLocation } from 'react-router-dom';
import { navItems, isNavActive } from '../../utils/nav';

const MobileNav = ({ user }) => {
  const location = useLocation();

  return (
    <div className="block md:hidden">
      <div className="fixed left-0 top-0 z-20 w-full border-b border-accent/20 bg-surface/95 backdrop-blur-sm">
        <div className="flex items-center gap-3 px-4 py-2.5">
          <img
            src={user.basics.image}
            alt={user.basics.name}
            className="h-10 w-10 shrink-0 rounded-lg object-cover ring-1 ring-accent/40"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-gray-100">
              {user.basics.name}
            </p>
            <p className="truncate font-mono text-[10px] uppercase tracking-wider text-muted">
              {user.basics.label}
            </p>
          </div>
        </div>
        <nav
          className="flex w-full justify-around border-t border-accent/10"
          aria-label="Mobile navigation"
        >
          {navItems.map(({ path, icon: Icon, name }) => {
            const active = isNavActive(location.pathname, path);
            return (
              <Link
                key={path}
                to={path}
                className={`relative flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] transition-colors ${
                  active ? 'text-accent' : 'text-gray-400 hover:text-accent'
                }`}
                aria-label={name}
                aria-current={active ? 'page' : undefined}
              >
                <Icon className="h-5 w-5" aria-hidden />
                <span>{name}</span>
                {active && (
                  <span
                    className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-t bg-accent"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      {/* Reserva a altura da barra fixa (avatar + nav) + folga */}
      <div className="h-32" aria-hidden />
    </div>
  );
};

export default MobileNav;
