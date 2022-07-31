import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import DialogDownload from '../DialogDownload';

import { HeaderContainer, Header, Image, ViewResumeLink, DownloadResumeBtn } from './styles';


const UserHeader = ({ user }) => {
  const location = useLocation();
  let [showDialog, setShowDialog] = useState(false)
  
  function dialogDownload () {
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
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>
          <p>Whatsapp/Telefone: {user.basics.phone}</p>
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
        <DownloadResumeBtn
          onClick={dialogDownload}
          rel="noopener noreferrer"
        >
          Download
          <ArrowRight16 />
        </DownloadResumeBtn>
        {showDialog && <DialogDownload setShowDialog={setShowDialog}/>}
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;