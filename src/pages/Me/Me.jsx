import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill, StyledLink } from '../../styles';
import { ProfileLink, StyledLinka } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      {Array.isArray(user.certificates) && user.certificates.length > 0 && (
        <div>
          <SectionTitle>Certificates</SectionTitle>
          <ul>
            {user.certificates.map((cert, i) => (
              <li key={i}>
                {cert.url ? (
                  <StyledLink href={cert.url} target="_blank" rel="noopener noreferrer">{cert.name}</StyledLink>
                ) : (
                  cert.name
                )}
                {cert.issuer && ` — ${cert.issuer}`}
                {(cert.date || cert.fullDate) && ` (${cert.date || cert.fullDate})`}
              </li>
            ))}
          </ul>
        </div>
      )}
      {Array.isArray(user.languages) && user.languages.length > 0 && (
        <div>
          <SectionTitle>Languages</SectionTitle>
          <ul>
            {user.languages.map((lang, i) => (
              <li key={i}>
                {lang.language}{lang.fluency ? ` — ${lang.fluency}` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}
      {Array.isArray(user.interests) && user.interests.length > 0 && (
        <div>
          <SectionTitle>Interests</SectionTitle>
          <div>
            {user.interests.map((interest, i) => (
              <Pill key={i}>{interest.name}</Pill>
            ))}
          </div>
        </div>
      )}
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <StyledLinka
                href={profile.url}
                target="_blank" rel="noreferrer noopener"
              >
                {profile.network}
              </StyledLinka>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;
