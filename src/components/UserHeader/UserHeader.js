import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

function yearsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

const UserHeader = ({ user }) => {
  let start = new Date(2020, 1, 1).getTime();
  let current = Date.now();
  let years = yearsDiff(start, current);
  let stringExp = years.toString() + ' Years'

  const location = useLocation();

  let profileGitConnected = user.basics.profiles.find(profile => profile.network.toLowerCase() === 'gitconnected');

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.image} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              style={{ color: 'rgb(46, 204, 64)' }}
              href={profileGitConnected.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Gitconnected Profile
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.location.city}</p>
          <p>{stringExp} of experience as a Full Stack Developer</p>
          <p>Whatsapp/Telefone: 11 96941-1127</p>
          <p>E-mail: marcelomarcos.s.c@gmail.com</p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Gitconnected Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;