import { Link, useLocation } from 'react-router-dom';
import {
  PanelLeftClose,
  PanelLeftOpen,
  Mail,
  Phone,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { navItems, isNavActive } from '../../utils/nav';

const RESUME_URL = 'https://gitconnected.com/marcel-msc/resume';
const PHONE = '11 96941-1127';
const EMAIL = 'marcelomarcos.s.c@gmail.com';

const Sidebar = ({ user, isOpen, onToggle }) => {
  const location = useLocation();
  const profiles = user?.basics?.profiles ?? [];

  return (
    <nav
      className={`fixed left-0 top-0 z-10 hidden h-full flex-col border-r border-accent/20 bg-surface transition-[width] duration-200 md:flex ${
        isOpen ? 'w-64' : 'w-16'
      }`}
      aria-label="Side navigation"
    >
      {/* Header / toggle */}
      <div
        className={`flex items-center border-b border-accent/10 px-3 py-3 ${
          isOpen ? 'justify-between' : 'justify-center'
        }`}
      >
        {isOpen && (
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
            Portfolio
          </span>
        )}
        <button
          onClick={onToggle}
          className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface-raised hover:text-accent"
          aria-label={isOpen ? 'Recolher menu' : 'Expandir menu'}
        >
          {isOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Profile */}
      <div
        className={`flex flex-col items-center border-b border-accent/10 px-3 py-5 ${
          isOpen ? '' : 'px-2 py-3'
        }`}
      >
        <img
          src={user.basics.image}
          alt={user.basics.name}
          className={`shrink-0 object-cover ring-2 ring-accent/40 ${
            isOpen
              ? 'mb-3 h-24 w-24 rounded-xl'
              : 'h-10 w-10 rounded-lg'
          }`}
        />
        {isOpen && (
          <div className="w-full text-center">
            <p className="text-base font-semibold leading-snug text-gray-100">
              {user.basics.name}
            </p>
            <p className="mt-1 text-sm text-accent">{user.basics.label}</p>
            <p className="mt-0.5 text-xs text-muted">
              {user.basics.location?.city}
            </p>
          </div>
        )}
      </div>

      {/* Nav links */}
      <ul className={`flex flex-col gap-1 py-4 ${isOpen ? 'px-3' : 'px-2'}`}>
        {navItems.map(({ name, path, icon: Icon }) => {
          const active = isNavActive(location.pathname, path);
          return (
            <li key={name}>
              <Link
                to={path}
                title={name}
                className={`relative flex items-center gap-3 rounded-lg py-2.5 text-sm transition-colors ${
                  isOpen ? 'px-3' : 'justify-center px-0'
                } ${
                  active
                    ? 'bg-accent-soft text-accent'
                    : 'text-gray-300 hover:bg-surface-raised hover:text-accent'
                }`}
              >
                {active && (
                  <span
                    className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r bg-accent"
                    aria-hidden
                  />
                )}
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                {isOpen && <span>{name}</span>}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Footer contacts */}
      <div
        className={`mt-auto border-t border-accent/10 ${
          isOpen ? 'space-y-3 p-4' : 'flex flex-col items-center gap-2 p-2'
        }`}
      >
        {isOpen ? (
          <>
            <a
              href={`tel:+5511969411127`}
              className="flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>{PHONE}</span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="truncate">{EMAIL}</span>
            </a>
            <div className="flex flex-wrap gap-2 pt-1">
              {profiles.slice(0, 4).map((profile) => (
                <a
                  key={profile.network}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 rounded-md border border-accent/20 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {profile.network}
                  <ExternalLink className="h-2.5 w-2.5" aria-hidden />
                </a>
              ))}
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent-soft px-3 py-2 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft-hover"
            >
              Résumé
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </>
        ) : (
          <>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-md p-1.5 text-muted transition-colors hover:text-accent"
              aria-label="E-mail"
              title={EMAIL}
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-1.5 text-muted transition-colors hover:text-accent"
              aria-label="Résumé"
              title="Résumé"
            >
              <ArrowRight className="h-4 w-4" />
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
