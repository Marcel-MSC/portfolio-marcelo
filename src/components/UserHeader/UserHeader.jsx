import { useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function yearsDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  return date2.getFullYear() - date1.getFullYear();
}

const UserHeader = ({ user }) => {
  const start = new Date(2020, 1, 1).getTime();
  const current = Date.now();
  const years = yearsDiff(start, current);
  const stringExp = years.toString() + ' Years';
  const location = useLocation();
  const isHome = location.pathname === '/';
  const profileGitConnected = user.basics.profiles.find(
    (profile) => profile.network.toLowerCase() === 'gitconnected'
  );

  return (
    <div
      className={`flex justify-between ${!isHome ? 'hidden md:flex' : 'flex flex-col items-center md:flex-row md:items-stretch'}`}
    >
      <div className="flex flex-col items-center md:flex-row md:items-stretch">
        <img
          src={user.basics.image}
          alt={user.basics.name}
          className="mb-4 h-[35vh] w-[14vw] min-w-[120px] rounded-lg border-2 border-accent md:mr-4"
        />
        <div className="md:text-left">
          <h2 className="text-2xl font-semibold">{user.basics.name}</h2>
          <h4 className="mt-1">
            <a
              href={profileGitConnected?.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent hover:underline"
            >
              Gitconnected Profile
            </a>
          </h4>
          <p className="mt-1">{user.basics.label}</p>
          <p>Coding in {user.basics.location.city}</p>
          <p>{stringExp} of experience as a Full Stack Developer</p>
          <p>Whatsapp/Telefone: 11 96941-1127</p>
          <p>E-mail: marcelomarcos.s.c@gmail.com</p>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <a
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex max-w-max items-center rounded-lg border-2 border-accent/30 bg-gray-900 px-6 py-3 font-bold text-gray-100 transition-colors hover:bg-accent/30"
        >
          <span>Gitconnected Résumé</span>
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
        </a>
      </div>
    </div>
  );
};

export default UserHeader;
