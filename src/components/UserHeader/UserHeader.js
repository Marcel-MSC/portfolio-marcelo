import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import DialogDownload from '../DialogDownload';

import { HeaderContainer, Header, Image, ViewResumeLink, DownloadResumeBtn } from './styles';

function secondsDiff(d1, d2) {
  let secDiff = Math.floor((d2 - d1) / 1000);
  return secDiff;
}

function minutesDiff(d1, d2) {
  let seconds = secondsDiff(d1, d2);
  let minutesDiff = Math.floor(seconds / 60);
  return minutesDiff;
}

function hoursDiff(d1, d2) {
  let minutes = minutesDiff(d1, d2);
  let hoursDiff = Math.floor(minutes / 60);
  return hoursDiff;
}

function daysDiff(d1, d2) {
  let hours = hoursDiff(d1, d2);
  let daysDiff = Math.floor(hours / 24);
  return daysDiff;
}

function weeksDiff(d1, d2) {
  let days = daysDiff(d1, d2);
  let weeksDiff = Math.floor(days / 7);
  return weeksDiff;
}

function yearsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

const UserHeader = ({ user }) => {
  let start = new Date(2019, 5, 1).getTime();
  let current = Date.now();
  // let seconds = secondsDiff(start, current);
  // let minutes = minutesDiff(start, current);
  let hours = hoursDiff(start, current)
  let days = daysDiff(start, current);
  let weeks = weeksDiff(start, current);
  let years = yearsDiff(start, current);

  let stringExp = years.toString() + ' Years or ' 
    + weeks.toString() + ' Weeks or '
    + days.toString() + ' Days or '
    + hours.toString() + ' Hours';
    // + minutes.toString() + ' Miutes or '
    // + seconds.toString() + ' Seconds';

  const location = useLocation();
  let [showDialog, setShowDialog] = useState(false)

  function dialogDownload() {
    setShowDialog(true)
  }

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{stringExp} - of experience as a developer</p>
          <p>{user.basics.headline}</p>
          <p>Whatsapp/Telefone: {user.basics.phone}</p>
          <p>E-mail: {user.basics.email}</p>
          {/* <p>
            <a href={user.basics.blog} target="_blank" rel="noreferrer noopener">
              {user.basics.blog}
            </a>
          </p> */}
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
        {/* <DownloadResumeBtn onClick={dialogDownload} rel="noopener noreferrer">
            Download Resume
          <ArrowRight16 />
        </DownloadResumeBtn>
        {showDialog && <DialogDownload setShowDialog={setShowDialog} />} */}
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;