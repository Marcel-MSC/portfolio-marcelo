import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function yearsDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  return date2.getFullYear() - date1.getFullYear();
}

const RESUME_URL = 'https://gitconnected.com/marcel-msc/resume';

const UserHeader = ({ user }) => {
  const start = new Date(2020, 1, 1).getTime();
  const current = Date.now();
  const years = yearsDiff(start, current);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header
      className={`w-full border-b border-accent/10 bg-surface-raised/40 px-6 py-5 ${
        !isHome ? 'hidden md:block' : 'block'
      }`}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Full Stack Developer
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-gray-50 md:hidden">
            {user.basics.name}
          </h1>
          <h1 className="mt-1 hidden text-2xl font-semibold tracking-tight text-gray-50 md:block">
            {user.basics.label}
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            {years} years of experience · Coding in {user.basics.location.city}
          </p>
        </div>

        {/* CTA: mobile always; desktop relies on sidebar but keep a compact link on home */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex max-w-max items-center self-center rounded-lg border border-accent/30 bg-accent-soft px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft-hover md:hidden"
        >
          <span>Gitconnected Résumé</span>
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
        </a>
      </div>
    </header>
  );
};

export default UserHeader;
